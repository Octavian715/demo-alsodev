<template>
    <UIModal title="Корзина">
		<div v-if="!cartItems.length" class="empty">
			Ваша корзина пуста
        </div>
		<div class="food-row" v-for="item in cartItems" :key="item" v-else>
			<span class="food-name">{{ item.name }}</span>
			<strong class="food-price">{{ item.price }}</strong>
			<div class="food-counter">
				<button 
				class="counter-button"  
                @click="cartStore.removeFromCart(item)"
                >-</button>
				<span class="counter">{{ item.quantity }}</span>
				<button 
				class="counter-button" 
                @click="cartStore.addToCart(item)"
                >+</button>
			</div>
		</div>
            	
			<!-- /.modal-body -->
		<div class="modal-footer">
			<span class="modal-pricetag">{{ cartStore.getTotalCartPrice }} ₽</span>
			<div class="footer-buttons" v-if="cartItems.length">
				<button class="button button-primary">Оформить заказ</button>
				<button class="button clear-cart" @click="modalStore.closeModal">Отмена</button>
			</div>
		</div>
    </UIModal>
			<!-- /.modal-footer -->
</template>

<script setup>
import UIModal from '@/components/common/UIModal.vue';
import {  useCartStore, useModalStore } from '@/stores';
import { onMounted } from 'vue';


const modalStore = useModalStore()
const cartStore = useCartStore()

const cartItems = cartStore.cartItems

onMounted(() =>  modalStore.setMode('cart'))
</script>

<style scoped>
 .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 45px;
 }
</style>