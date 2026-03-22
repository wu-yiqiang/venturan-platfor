import { http } from '@/utils/http';
// 用户登录
export function userLogin(data) {
    return http.post('/user/login', data);
}
// 用户登录
export function userRegister(data) {
    return http.post('/user/register', data);
}
