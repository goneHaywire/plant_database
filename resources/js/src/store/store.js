import Vuex from 'vuex';
import Vue from 'vue';
import apiClient from '../services/Api'
import router from '../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        stats: null
    },
    getters: {
        getUser: (state) => state.user,
        getStats: (state) => state.stats
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
        SET_STAT: (state, stat, value) => state.stats[stat] = value
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
        }
    }
})

export default store
