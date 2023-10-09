<template>
    <div :class="{'modal': true, 'is-open': isOpen}" v-if="isOpen">
        <slot name="full">
            <div class="modal-dialog">
                <slot name="header">
                    <div class="modal-header">
                        <slot name="title">
                            <h3 class="modal-title" v-if="title">{{  title }}</h3>
                        </slot>
                        <button class="close" @click="closeModal">&times;</button>
                    </div>
                </slot>
                <div class="modal-body">
                    <slot/>
                </div>
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer"/>
            </div>
        </div>
        </slot> 
    </div>
</template>

<script>
import { computed } from 'vue'
import { useModalStore } from '@/stores'

export default {
    props: {
        title: String,
    },
    setup() {

        const modalStore = useModalStore()

        const isOpen = computed(() => modalStore.isOpen)


    return {
        isOpen,
        closeModal: modalStore.closeModal
    }
 },
}
</script>
