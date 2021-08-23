import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2eae2884-65e2-46fe-8482-866c4ffe142c"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
     getProfile (userId) {
        console.log('Obsolve method,pleace use profileAPI');
        return profileAPI.getProfile(userId);
     }

}

export const profileAPI = {
    getProfile (userId) {
        return  instance.get(`profile/` + userId);
    },
    getStatus (userId) {
        return instance.get('profile/status/'+userId);
    },
    updateStatus (ststus) {
        return instance.put('profile/status',{status:ststus});
    }

}

export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
     logout(email, password, rememberMe = false) {
        return instance.delete('auth/login');
    }


}


