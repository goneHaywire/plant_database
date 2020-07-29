import apiClient from './Api'

const speciesService = {
    getSpecies: () => {
        apiClient.get('/species')
    },
    getSpecie: id => {
        apiClient.get(`/species/${id}`)
    },
    createSpecie: specie => {
        apiClient.post('/species', specie)
    },
    updateSpecie: specie => {
        apiClient.put('/species', specie)
    },
    deleteSpecie: id => {
        apiClient.delete(`/specie/${id}`)
    },
    getSpeciesCount: () => {
        apiClient.get('/species/count')
    }
}

export default speciesService
