import apiClient from './Api'

const generaService = {
    getGenera: () => {
        apiClient.get('/genera')
    },
    getGenre: id => {
        apiClient.get(`/genera/${id}`)
    },
    createGenre: genre => {
        apiClient.post('/genera', genre)
    },
    updateGenera: genre => {
        apiClient.put('/genera', genera)
    },
    deleteGenre: id => {
        apiClient.delete(`/genera/${id}`)
    },
    getGeneraCount: () => {
        apiClient.get('/genera/count')
    }
}

export default generaService
