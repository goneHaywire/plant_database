import apiClient from './Api'

const userService = {
    getUsers: () => {
        apiClient.get('/users')
    },
    getUsersCount: () => {
        apiClient.get('/users/count')
    }

}

export default userService
