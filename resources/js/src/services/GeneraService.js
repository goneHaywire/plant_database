import apiClient from './Api'

const generaService = {
    fetchGenera: (page = 1) =>
        apiClient.get(`/genera?page=${page}`),
    fetchGenre: id =>
        apiClient.get(`/genera/${id}`),
    createGenre: genre =>
        apiClient.post('/genera', genre),
    updateGenera: genre =>
        apiClient.put('/genera', genera),
    deleteGenre: id =>
        apiClient.delete(`/genera/${id}`),
}
export default generaService
