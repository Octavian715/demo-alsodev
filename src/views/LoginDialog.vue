<template>
   <UiModal mode="login">
    <template #full>
        <div :class="{'modal-auth': true, 'is-open': isOpen}">
    <div class="modal-dialog modal-dialog-auth">
        <button class="close-auth" @click="closeModal">&times;</button>
        <form id="logInForm" @submit.prevent="handleLogin">
            <fieldset class="modal-body">
                <legend class="modal-title">Авторизация</legend>
                <label class="label-auth">
                    <span>Логин</span>
                    <input id="login" type="text" v-model.trim="userName">
                </label>
                <label class="label-auth">
                    <span>Пароль</span>
                    <input id="password" type="password" v-model="password">
                </label>
                <p style="color:red; margin-left: 30px;" v-if="errorMessage">{{ errorMessage }}</p>
            </fieldset>
            <!-- /.modal-body -->
            <div class="modal-footer">
                <div class="footer-buttons">
                    <button class="button button-primary button-login" type="submit" :disabled="disableSubmit">Войти</button>
                </div>
            </div>
        </form>
        <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
</div>
    </template>
   </UiModal>
</template>

<script>
import { ref, computed, onMounted , watch} from 'vue'
import { useUserStore, useModalStore } from '@/stores'
import UiModal from '@/components/common/UiModal.vue'


export default {
    components: { UiModal },
    setup() {
        const userName =ref('')
        const password = ref('')
        let errorMessage = ref(null)

        const userStore = useUserStore()
        const modalStore = useModalStore()
       
        const isOpen = computed(()=> modalStore.isOpen)

        watch(userName, (oldValue,newValue) => {
            if (oldValue !== newValue) {
            errorMessage.value = null
        }
    })
        watch(password, (oldValue,newValue) => {
            if (oldValue !== newValue) {
            errorMessage.value = null
        }
    })

    


        const disableSubmit = computed(()=> userName.value.length === 0 || password.value.length === 0)
        const handleLogin =  () => {
            if (userName.value === 'test' && password.value === 'test') {
            userStore.login(userName.value, password.value)
        } else { 
            console.log
            errorMessage.value = 'Invalid credentials!' 
        }
    }
        const closeModal = () =>{
            modalStore.closeModal()
        }

        onMounted(() =>  modalStore.setMode('login'))


        return {
            errorMessage,
            disableSubmit,
            closeModal,
            isOpen,
            userName, 
            password,
            handleLogin
        }
    }
    
}
</script>


