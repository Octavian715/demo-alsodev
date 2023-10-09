<template>
  <div class="container">
    <header class="header">
		<RouterLink class="logo" :to="{path: '/'}">
			<img src="@/assets/img/icon/logo.svg" alt="Logo" />
    	</RouterLink>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span v-if="user" class="user-name">{{ user.name }}</span>
				<button class="button button-primary button-auth" v-if="!user" @click="showLogin">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
					<button class="button button-cart" id="cart-button" v-if="user" @click="showCart">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина</span>
				</button>
				<button class="button button-primary button-out" v-if="user" @click="logout">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>	
			</div>
		</header>
  </div>
</template>

<script >
import { useUserStore, useModalStore } from '@/stores';
import router from '@/router'

export default {

    setup () {
		const userStore = useUserStore()
		const modalStore = useModalStore()

		const user =  JSON.parse(userStore.user)

		const logout = () => {
			useUserStore().logout()
			router.push('/')
		}

		const showLogin = () => {
			modalStore.openModal()
			modalStore.setMode('login')
		}

		const showCart = () => {
			modalStore.openModal()
			modalStore.setMode('cart')
		}

		return {
			showLogin,
			showCart,
			user,
			logout,
			modalStore,
		}
	}
}

</script>
