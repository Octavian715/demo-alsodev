<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
    <LoginDialog v-if="isOpen && isMode === 'login'"/>
    <CartDialog v-if="isOpen && isMode === 'cart'"/>
</template>

<script setup>
import TheHeader from '@/components/parts/TheHeader.vue'
import TheFooter from '@/components/parts/TheFooter.vue'
import LoginDialog from '@/views/LoginDialog.vue'
import CartDialog from '@/views/CartDialog.vue'
import { useModalStore } from '@/stores'
import { computed } from 'vue'

const isOpen = computed(() => useModalStore().isOpen);
const isMode = computed(() => useModalStore().mode);
</script>