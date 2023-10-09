import { defineStore } from "pinia"

const user = {
    id: 1,
    username: 'test',
    name: 'testName',
    password: 'test'
     }

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null || localStorage.getItem('currentUser'),
        isAuth: false
    }),
    actions: {
        login(username, password) {
        if (username === 'test' && password === 'test') {
          
            this.isAuth = true
            this.user = user
            localStorage.setItem('currentUser', JSON.stringify(user))
            location.reload()
          }
        },
        logout () {
            this.user = null
            localStorage.removeItem('currentUser')  
            location.reload()
            this.isAuth = false
        }
    }
})