import { http } from '@/utils/http'


// 用户登录
export function userLogin(data: any) {
    return http.post<any>('/user/login', data)
}

// 用户登录
export function userRegister(data: any) {
    return http.post<any>('/user/register', data)
}

export function userUpdate(data: any) {
    return http.post<any>('/user/update', data)
}

export function userLogout() {
    return http.post<any>('/user/logout')
}