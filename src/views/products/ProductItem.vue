<template>
    <div class="card">
            <img 
              :src="item.img" 
              :alt="item.name" 
              class="card-image"   
              @click="showModal(item.id)" 
             />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ item.name || '-' }}</h3>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="ingredients"> {{ item.description || '' }}</div>
              </div>
              <!-- /.card-info -->
              <div class="card-buttons">
                <button class="button button-primary button-add-cart" @click="emitItem(item)"> 
                  <span class="button-card-text">В корзину</span>
                  <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">{{ item.price || 0 }} ₽</strong>
              </div>
            </div>
            <!-- /.card-text -->  
    </div>
    <UIModal title=" " v-if="isOpen && isMode === `card-${item.id}`">
        <img 
              :src="item.img" 
              :alt="item.name" 
              class="card-image"  
              style="object-fit: contain;"  
             />
             <div class="card-text" style="min-height: auto;">
              <div class="card-heading">
                <h3 class="card-title card-title-reg">{{ item.name || '-' }}</h3>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="ingredients"> {{ item.description || '' }}</div>
              </div>
              <!-- /.card-info -->
            </div>
    </UIModal>

    
</template>

<script setup>
import UIModal from '@/components/common/UIModal.vue'
import { defineProps, defineEmits } from 'vue'
import {computed} from 'vue'
import { useModalStore } from '@/stores'

const modalStore =  useModalStore()

const emit = defineEmits(['addToCart', 'openModal'])

const isOpen = computed(()=> modalStore.isOpen)
const isMode = computed(()=> modalStore.mode)

const { default: item }  = defineProps({
    item: {
        type: Object,
        default: () => ({})
    }
 })

 const showModal = (item) => {
    modalStore.openModal()
    modalStore.setMode(`card-${item}`)
 }

 const emitItem = (item) => {
    emit('addToCart', item)
}
</script>
