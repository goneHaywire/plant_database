const axios = require('axios');

const apiClient = axios.create({
    // baseURL: 'http://localhost:5000/api/',
    // baseURL: 'http://localhost:8000/api/',
    baseURL: 'http://192.168.0.107:5000/api/',
    timeout: 5000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
})

export default apiClient
