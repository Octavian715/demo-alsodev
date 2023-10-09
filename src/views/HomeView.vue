<template>
  <main>
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input 
            type="text" 
            class="input input-search" 
            v-model="searchQuery"
            @input="searchRestaurants"
            placeholder="Поиск блюд и ресторанов"
             />
          </label>
        </div>
        <RestaurantList :list="restaurants" v-if="!searchQuery"/>
        <div v-else-if="searchResults.restaurants || searchResults.products  && searchQuery">
          <h2>Рестораны</h2>
          <RestaurantList :list="searchResults.restaurants" alertMessage="Подходящих ресторанов не найдено."/>
          <h2>продукты</h2>
          <ProductList :products="searchResults.products" alertMessage="Подходящих продукты не найдено."/>
        </div> 
        <!-- /.card -->
      </section>
    </div>
  </main>
</template>


<script setup>
import restaurants from '@/data/restaurants'
import products from '@/data/menu'
import { ref } from 'vue'
import RestaurantList from '@/views/restaurant/RestaurantList.vue'
import ProductList from '@/views/products/ProductList.vue'

const searchQuery = ref('')
const searchResults= ref([]) 

const searchRestaurants = () => {
  const query = searchQuery.value.toLowerCase()
  
  const resultRestaurantsName = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(query))
  const resultRestaurantsCategory = restaurants.filter(restaurant => restaurant.category.toLowerCase().includes(query))
  
  const resultProductsName = products.filter(product => product.name.toLowerCase().includes(query))
  const resultProductsIngredients = products.filter(product => product.description.toLowerCase().includes(query))

  const resultProducts = Array.from(new Set([...resultProductsName, ...resultProductsIngredients]))
  const resultRestaurants = Array.from(new Set([...resultRestaurantsName, ...resultRestaurantsCategory]))

  searchResults.value = { restaurants:resultRestaurants, products: resultProducts }
}


</script>

<style scoped>
 .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
 }
</style>