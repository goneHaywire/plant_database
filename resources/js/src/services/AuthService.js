import apiClient from './Api.js'

const authService = {
    login: function (payload) {
        return apiClient.post('auth/login/', payload)
            .catch(err => console.log(err))
    },
    verifyToken: function (token) {
        // token = JSON.parse(localStorage.getItem('user')).access_token

        return apiClient.post('/auth/verify', {
            token
        })
    }
}

export default authService
