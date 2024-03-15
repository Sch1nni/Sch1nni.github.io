import { defineStore } from 'pinia'
import actions from './action'

export default defineStore('base', {
    id: 'base',
    state: () => ({
        auth_profile: null, // authenticated user profile
        token: null, // token
        error: false,
        title: 'Titolo di default (pinia)',
        theme: 'light',
        locale: 'zhCN',
        date_locale: '',

        cursor: null,
        mousePosition: { x: 0, y: 0 },
        cursorEvent: {},
        cursorPosition: { x: 0, y: 0 },
    }),

    getters: {},
    actions,
})
