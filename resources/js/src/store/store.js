import Vuex from 'vuex';
import Vue from 'vue';
import apiClient from '../services/Api'
import router from '../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
    },
    getters: {
        getUser: (state) => state.user
    },
    mutations: {
        // SET_USER_DATA(state, user) {
        //     state.user = user
        // },
        SET_USER_DATA: (state, user) => {
            state.user = user
        },
        CLEAR_USER_DATA: (state) => {
            state.user = null
        }
    },
    actions: {
        login: function ({
            commit
        }, user) {

            console.log(user)
            console.log(this.state.user)
            // this.state.user = user
            console.log('testttt')
            console.log(user.name)
            console.log(user.access_token)
            commit('SET_USER_DATA', user)
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
            localStorage.setItem('user', JSON.stringify(user))
            router.push('/dashboard')
        },
        logout: ({
            commit
        }) => {
            commit('CLEAR_USER_DATA')
            localStorage.removeItem('user')
            router.push('/login')
        }
    }
})

export default store
