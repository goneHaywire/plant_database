import ApiClient from './Api'

var familyService = {
    fetchFamilies: (page = 1) =>
        ApiClient.get(`/families?page=${page}`),
    fetchFamily: id =>
        ApiClient.get(`/families/${id}`),
    createFamily: family =>
        ApiClient.post(`/families`, family),
    updateFamily: family =>
        ApiClient.put('/families', family),
    deleteFamily: id =>
        ApiClient.delete(`/family/${id}`),
}
export default familyService
