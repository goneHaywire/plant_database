import Vuex from 'vuex';
import Vue from 'vue';
import apiClient from '../services/Api'
import router from '../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        stats: null,
        soilPolygons: [],
        areas: {},
        areasArray: []
    },
    getters: {
        getUser: (state) => state.user,
        getStats: (state) => state.stats,
        getSoilPolygons: (state) => state.soilPolygons,
        // getSoilPolygonsLength: (state) => state.soilPolygons.length,
        getAreas: state => state.areas,
        getAreasArray: state => state.areasArray
        // getAreasLength: state => state.areas.length
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
        SET_STAT: (state, stat, value) => state.stats[stat] = value,
        SET_SOIL_POLYGONS: (state, soilPolygons) => state.soilPolygons = soilPolygons,
        SET_AREAS: (state, areas) => state.areas = areas,
        SET_AREAS_ARRAY: (state, areasArray) => state.areasArray = areasArray,
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
        setStat: ({
            commit
        }, stat, value) => {
            console.log('u vune!')
            commit('SET_STAT', stat, value)
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
        }

    }
})

export default store
