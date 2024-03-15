import { axios, axiosInstance } from '@/plugins/axios'

import mainStore from '@/stores/main'

export default {
    get_base_url() {
        return process.env.BACKEND_BASE_URL || null
    },

    get_available_routes() {
        return {
            // AUTH
            login: { path: 'api/auth/login', method: 'POST', auth: false },
            // USERS
            loadUsers: { path: 'api/users', method: 'GET', auth: false },
            loadUser: { path: 'api/users/{id}', method: 'GET', auth: false },
        }
    },

    get_url(route_path, param = {}) {
        for (const key in param) {
            route_path = route_path.replace(`{${key}}`, param[key])
        }
        let _url = this.get_base_url() + '/' + route_path
        console.log('_url', _url)
        return _url
    },

    get_route(route_name) {
        const routes = this.get_available_routes()
        if (!routes[route_name]) {
            throw new Error('route_name not found')
        }
        return routes[route_name]
    },

    async server_fetch(route_name, config = {}, param = null, use_custom_axios_instance = true) {
        const route = this.get_route(route_name)
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

        if (route.auth) {
            const _token = mainStore.computed.baseStore().token
            console.log('_token', _token)
            if (!_token) throw new Error('token not found')
            headers['Authorization'] = `Bearer ${_token}`
        }

        const requestOptions = {
            method: config.method ? config.method : route.method,
            headers: config.headers ? config.headers : headers,
            redirect: 'follow',
        }

        if (config.body) {
            requestOptions.data = config.body
        }

        let url = this.get_url(route.path, param)

        try {
            let response = null
            if (use_custom_axios_instance) {
                console.log('use_custom_axios_instance')
                response = await axiosInstance(url, requestOptions)
            } else {
                console.log('use axios')
                response = await axios(url, requestOptions)
            }

            // Simulazione di un ritardo di 1 secondo
            await new Promise((resolve) => setTimeout(resolve, 1000))

            console.log('response', response)

            return response.data
        } catch (error) {
            let _error = {
                error: error,
                code: error.code,
                type: 'error',
            }
            return _error
        }
    },
}
