import apiClient from './Api'

const generaService = {
    fetchGenera: (page = 1) =>
        apiClient.get(`/genera?page=${page}`),
    fetchGenre: id =>
        apiClient.get(`/genera/${id}`),
    createGenre: genre =>
        apiClient.post('/genera', genre),
    updateGenera: genre =>
        apiClient.put(`/genera/${genre.id}`, genre),
    deleteGenre: id =>
        apiClient.delete(`/genera/${id}`),
    getSpeciesOfGenera: id =>
        apiClient.get(`/genera/${id}/species`),
    searchGenera: (query, page = 1) => apiClient.post(`/genera/search?page=${page}`, query),
}
export default generaService
