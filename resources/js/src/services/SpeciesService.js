import apiClient from './Api'

const speciesService = {
    fetchSpecies: (page = 1) =>
        apiClient.get(`/species?page=${page}`),
    fetchSpecie: id =>
        apiClient.get(`/species/${id}`),
    createSpecie: specie =>
        apiClient.post('/species', specie),
    updateSpecie: specie =>
        apiClient.put(`/species/${specie.id}`, specie),
    deleteSpecie: id =>
        apiClient.delete(`/species/${id}`),
    fetchAlbanianSpecies: (page = 1) =>
        apiClient.get(`/albanian?page=${page}`),
    fetchFavourites: (page = 1) =>
        apiClient.get(`/favourites?page=${page}`),
    favourite: id =>
        apiClient.post(`/favourites/${id}`),

}

export default speciesService
