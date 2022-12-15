import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fe5f70eb-fa11-4ce5-b473-76499d12ee60'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data) //берем из респонса данные и возвращаем
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}
