import apiClient from './Api'

const mapService = {
    getAreas: () => apiClient.get('/areas'),
    getSoilPolygons: () => apiClient.get('/polygons/soil'),
    getSpecieStatusPolygons: (id) => apiClient.get(`/polygons/specie/${id}`)

}

export default mapService
