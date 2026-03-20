import { http } from '@/utils/http'


// 获取门店列表
export function payPay(data) {
    return http.post<any>('/shop/list', data)
}