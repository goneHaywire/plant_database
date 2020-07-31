import apiClient from './Api.js'

const authService = {
    login: (payload) =>
        apiClient.post('auth/login/', payload)
        .catch(err => console.log(err)),
    verifyToken: (token) =>
        // token = JSON.parse(localStorage.getItem('user')).access_token
        apiClient.post('/auth/verify', {
            token
        })
}

export default authService
