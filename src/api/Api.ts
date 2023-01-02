import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c5a144af-0307-47c5-b1db-3a2a53e232eb"
    }
});

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
    },
    getFollow (id: string ) {
        return instance.post(`follow/${id}`, {}, {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
    },
    getUnFollow (id: string ) {
        return instance.delete(`follow/${id}`, {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
    }
}

