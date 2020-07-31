import apiClient from './Api'

const speciesService = {
    fetchSpecies: (page = 1) =>
        apiClient.get(`/species?page=${page}`),
    fetchSpecie: id =>
        apiClient.get(`/species/${id}`),
    createSpecie: specie =>
        apiClient.post('/species', specie),
    updateSpecie: specie =>
        apiClient.put('/species', specie),
    deleteSpecie: id =>
        apiClient.delete(`/specie/${id}`),
    fetchAlbanianSpecies: (page = 1) =>
        apiClient.get(`/albanian?page=${page}`),
    fetchFavourites: (page = 1) =>
        apiClient.get(`/favourites?page=${page}`)

}

export default speciesService
