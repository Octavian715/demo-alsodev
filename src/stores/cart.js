import products from '@/data/menu.json'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state:() => ({
        cartItems: [],
        sortOrder:'default',
        products
    }),
    getters: {
        getTotalCartPrice () {
            return this.cartItems.reduce((acc, currentItem)=> {
                const itemTotalPrice = currentItem.price * currentItem.quantity

                acc += itemTotalPrice
    
                return acc
            }, 0)
        }
    },
    actions: {
        sortProducts() {
            this.products.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            if (this.sortOrder === 'asc') {
                return priceA - priceB;
            } else if (this.sortOrder === 'desc') {
                return priceB - priceA;
            } else {
                return this.products =products }
            })   
        },
        addToCart (item) {
                const targetItem = this.cartItems.findIndex(product => product.id === item.id)
                if(targetItem !== -1) {
                    this.cartItems[targetItem].quantity++
                } else {
                    item.quantity = 1
                    this.cartItems.push(item)
                }
            },
    removeFromCart(product) {
        const existingCartItem = this.cartItems.find(item => item.id === product.id);
      
        if (existingCartItem) {
            if (existingCartItem.quantity > 1) {
                existingCartItem.quantity--;
            } else {
                const index = this.cartItems.indexOf(existingCartItem);
                this.cartItems.splice(index, 1);
            }
        }
    }
}
})