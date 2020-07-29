import ApiClient from './Api'

const familyService = {
    getFamilies: () => {
        ApiClient.get('/families')
    },
    getFamily: id => {
        ApiClient.get(`/families/${id}`)
    },
    createFamily: family => {
        ApiClient.post(`/families`, family)
    },
    updateFamily: family => {
        ApiClient.put('/families', family)
    },
    deleteFamily: id => {
        ApiClient.delete(`/family/${id}`)
    },
    getFamilyCount: () => {
        ApiClient.get('/family/count')
    }
}

export default familyService
