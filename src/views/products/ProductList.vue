<template>
     <div class="cards cards-menu" v-if="props.products.length"> 
        <ProductItem
            v-for="(item, index) in props.products"
            :item="item"
            :key="index"
            @addToCart="passEmitItem(item)"
        />
     </div>
     <div  class="empty" v-else>{{ props.alertMessage }}</div>  
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['addToCart'])

const props =  defineProps({
    alertMessage: {
        type: String,
        default: 'не найдено.',
    },
    products: {
        type: Array,
        default: () => []
    }
})

const passEmitItem = (item) => {
    emit('addToCart', item)
}
</script>
