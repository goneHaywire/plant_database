import Vuex from 'vuex';
import Vue from 'vue';
import apiClient from '../services/Api'
import router from '../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        stats: [],
        soilPolygons: [],
        areas: {},
        areasArray: [],
        districts: [],
        alerts: [],
        alert_id: 1
    },
    getters: {
        getUser: (state) => state.user,
        getStats: (state) => state.stats,
        getSoilPolygons: (state) => state.soilPolygons,
        // getSoilPolygonsLength: (state) => state.soilPolygons.length,
        getAreas: state => state.areas,
        getAreasArray: state => state.areasArray,
        // getAreasLength: state => state.areas.length,
        getDistricts: state => state.districts,
        getAlerts: store => store.alerts,

    },
    mutations: {
        SET_USER_DATA: (state, user) => {
            state.user = user
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
            localStorage.setItem('user', JSON.stringify(user))
        },
        CLEAR_USER_DATA: (state) => {
            state.user = null
            apiClient.defaults.headers.common['Authorization'] = `j`
            localStorage.removeItem('user')
        },
        SET_STATS: (state, stats) => state.stats = stats,
        SET_SOIL_POLYGONS: (state, soilPolygons) => state.soilPolygons = soilPolygons,
        SET_AREAS: (state, areas) => state.areas = areas,
        SET_AREAS_ARRAY: (state, areasArray) => state.areasArray = areasArray,
        ADD_SOIL_POLYGON: (state, soilPolygon) => state.soilPolygons.push(soilPolygon),
        REMOVE_SOIL_POLYGON: (state, id) => state.soilPolygons = state.soilPolygons.filter(polygon => polygon.id !== id),
        SET_DISTRICTS: (state, districts) => state.districts = districts,
        ADD_ALERT: (state, alert) => state.alerts.push(alert),
        REMOVE_ALERT: (state, id) => state.alerts = state.alerts.filter(alert => alert.id !== id)
    },
    actions: {
        login: function ({
            commit
        }, user) {
            commit('SET_USER_DATA', user)
            router.push('/dashboard')
        },
        logout: ({
            commit
        }) => {
            commit('CLEAR_USER_DATA')
            router.push('/login')
        },
        setStats: ({
            commit
        }, stats) => {
            commit('SET_STATS', stats)
        },
        setSoilPolygons: ({
            commit
        }, soilPolygons) => {
            commit('SET_SOIL_POLYGONS', soilPolygons)
        },
        setAreas: ({
            commit
        }, areas) => {
            commit('SET_AREAS', areas)
        },
        setAreasArray: ({
            commit
        }, areasArray) => {
            commit('SET_AREAS_ARRAY', areasArray)
        },
        addSoilPolygon: ({
            commit
        }, soilPolygon) => {
            commit('ADD_SOIL_POLYGON', soilPolygon)
        },
        removeSoilPolygon: ({
            commit
        }, id) => {
            commit('REMOVE_SOIL_POLYGON', id)
        },
        setDistricts: ({
            commit
        }, districts) => {
            commit('SET_DISTRICTS', districts)
        },
        createAlert: ({
            commit,
            state
        }, alert) => {
            const alert_id = state.alert_id
            alert.id = alert_id
            commit('ADD_ALERT', alert)
            setTimeout(() => commit('REMOVE_ALERT', alert_id), 5000)
            state.alert_id++;
        }

    }
})

export default store
