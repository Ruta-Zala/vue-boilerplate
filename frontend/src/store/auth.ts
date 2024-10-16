interface State {
    token: string | null,
    user: UserType | null
}

import { UserType } from '@/types'
import { defineStore } from 'pinia'
import { TOKEN } from '@/service/const'
import LocalStorageService from '@/service/localstorage';

const tokenLs = new LocalStorageService(TOKEN);

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            token: null,
            user: null
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        clearAuthData() {
            this.token = null
            this.user = null
            tokenLs.setItem(null)

        },
        setUser(user: UserType) {
            this.user = user
        }
    },
})