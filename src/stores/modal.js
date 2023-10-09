import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    mode: null,
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    setMode (mode) {
      this.mode = mode;
    },
   
    closeModal() {
      this.isOpen = false;
      this.mode = null
    },
  },
})
