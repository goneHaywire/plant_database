import apiClient from './Api'

const photoService = {
    getPhotos: id => apiClient.get(`/species/${id}/photos`),
    addPhotos: photosObject => apiClient.post(`/photos`, photosObject),
    deletePhoto: id => apiClient.delete(`/photos/${id}`),
}

export default photoService
