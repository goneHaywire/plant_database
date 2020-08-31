import apiClient from './Api'

const mapService = {
    getAreas: () => apiClient.get('/areas'),
    getSoilPolygons: () => apiClient.get('/polygons/soil'),
    getSpecieStatusPolygons: (id) => apiClient.get(`/polygons/specie/${id}`),
    createPolygon: polygon => apiClient.post('/polygons', polygon),
    deletePolygon: id => apiClient.delete(`/polygons/${id}`),
    getDistricts: () => apiClient.get('/districts'),
    getSoils: () => apiClient.get('/soils'),
}

export default mapService
