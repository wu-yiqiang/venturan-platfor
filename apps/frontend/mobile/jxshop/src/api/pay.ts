import { http } from '@/utils/http'


// 获取门店列表
export function payPay(data: any) {
    console.log('萨达飒飒')
    return http.post<any>('/order/create', data)
}