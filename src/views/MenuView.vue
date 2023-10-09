<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
         <h2 class="section-title restaurant-title">{{ currentRestaurant.value.name || '' }}</h2>
          <div class="card-info">
            <div>
              <div class="rating">{{ currentRestaurant.value.rating || '' }}</div>
              <div class="price">{{ currentRestaurant.value.description || '' }}</div>
              <div class="category">{{ currentRestaurant.value.category || '' }}</div>
            </div>
            <select id="sortOrder" v-model="sortOrder"  @change="updateSortOption">
            <option value="default">Сортировка по умолчанию</option>
            <option value="asc">Сначала дешевые</option>
            <option value="desc">Сначала дорогие</option>
          </select>
          </div>
          <!-- /.card-info -->
        </div>
        
        <ProductList @addToCart="addToCart" :products="sortedProducts" />
        <!-- /.cards -->
      </section>
    </div>
    <UiModal v-if="isOpen && isMode === 'success'">
      <template #full>
         <div class="modal-dialog">
          <div class="success">
            <p>Tовар был добавлен в вашу корзину</p>
          </div>
         </div> 
      </template>
    </UiModal>
    <LoginDialog v-if="isOpen && isMode === 'login'"/>
    <!-- /.container -->
  </main>
</template>

<script>
import {  useRoute } from 'vue-router'
import { computed, ref, onBeforeMount, defineAsyncComponent } from 'vue'
import { useCartStore, useModalStore, useUserStore } from '@/stores'
import restaurants from '@/data/restaurants'
import ProductList from '@/views/products/ProductList.vue'

export default {
  components: { 
    ProductList,
    UiModal: defineAsyncComponent(() => import('@/components/common/UiModal.vue')),
    LoginDialog: defineAsyncComponent(() =>import('@/views/LoginDialog.vue'))
   },
  setup () {
    const route = useRoute()
  
    const cartStore = useCartStore()
    const modalStore = useModalStore()
    const userStore = useUserStore()
   
    let currentRestaurant = ref(null)

    const isOpen = computed(()=> modalStore.isOpen)
    const isMode = computed(()=> modalStore.mode)

    onBeforeMount (() => {
      currentRestaurant.value = computed(() => restaurants.find(item => item.url === route.params.id))})

      const sortedProducts = computed(() => {
        return [...cartStore.products]
      })

      const updateSortOption = (() => {
        cartStore.sortOrder = sortOrder.value
        cartStore.sortProducts()
      })

    const addToCart = item => {
      if (userStore.user) {
        cartStore.addToCart(item)
        successModal()
      } else {
        modalStore.openModal()
        modalStore.setMode('login')
      }
    }

    const successModal = (() => {
      modalStore.openModal()
      modalStore.setMode('success')

      setTimeout(() => {
        modalStore.closeModal()
      }, 500)
    })




    return {
      successModal,
      isOpen,
      isMode,
      addToCart,
      currentRestaurant,
      sortedProducts,
      sortOrder: cartStore.sortOrder, 
      updateSortOption
    }
  }
}
</script>

<style scoped >
 .success {
  display: flex;
  justify-content: center;
  align-content: center;

 }

 .card-info { 
  width: 100%; 
  justify-content: space-between;
  }
  .card-info div:first-child { display: flex; }
</style>
