const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
})

export default apiClient
