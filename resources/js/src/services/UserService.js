import apiClient from './Api'

const userService = {
    fetchUsers: (page = 1) =>
        apiClient.get(`/users?page=${page}`),
    getUsersCount: () =>
        apiClient.get('/users/count')
}

export default userService
