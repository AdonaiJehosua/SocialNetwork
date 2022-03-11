import axios from "axios";

const instanceSSN = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '9f5d4eb8-8125-4f7d-9549-512c38c3ade7'}
})



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instanceSSN.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser (id) {
        return instanceSSN.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUser (id) {
        return instanceSSN.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile (userId) {
        console.log('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instanceSSN.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus (userId) {
        return instanceSSN.get(`profile/status/${userId}`)
            .then(response => response.data)

    },
    updateStatus (status) {
        return instanceSSN.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
}

export const authAPI = {
    me () {
        return instanceSSN.get(`auth/me`)
            .then(response => response.data)
    }
}
