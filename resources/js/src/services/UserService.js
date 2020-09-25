import apiClient from './Api'

const userService = {
    fetchUsers: (page = 1) =>
        apiClient.get(`/users?page=${page}`),
    getUsersCount: () =>
        apiClient.get('/users/count'),
    deleteUser: id => apiClient.delete(`/users/${id}`),
}

export default userService
