import apiClient from './Api'

const mapService = {
    getAreas: () => apiClient.get('/areas'),
    getSoilPolygons: () => apiClient.get('/polygons/soil'),
    getSpecieStatusPolygons: (id) => apiClient.get(`/polygons/specie/${id}`),
    createPolygon: polygon => apiClient.post('/polygons', polygon),
    deletePolygon: id => apiClient.delete(`/polygons/${id}`),

}

export default mapService
