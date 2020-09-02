import ApiClient from './Api'

var familyService = {
    fetchFamilies: (page = 1) =>
        ApiClient.get(`/families?page=${page}`),
    fetchFamily: id =>
        ApiClient.get(`/families/${id}`),
    createFamily: family =>
        ApiClient.post(`/families`, JSON.stringify(family)),
    updateFamily: family =>
        ApiClient.put(`/families/${family.id}`, JSON.stringify(family)),
    deleteFamily: id =>
        ApiClient.delete(`/families/${id}`),
    getAllFamilies: () =>
        ApiClient.get('/families/all'),
    getGeneraOfFamily: id =>
        ApiClient.get(`/families/${id}/genera`),
    searchFamilies: (query, page = 1) => ApiClient.post(`/families/search?page=${page}`, query),
}
export default familyService
