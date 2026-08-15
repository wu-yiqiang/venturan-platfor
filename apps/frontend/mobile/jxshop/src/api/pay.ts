import { http } from '@/utils/http'


// 获取门店列表
export function payPay(data: any) {
    return http.post<any>('/order/create', data)
}

export function getOrders() {
    return http.post<any>('/order/list')
}

export function createPrepaidPaymentLink(data: any) {
    return http.post<any>('/order/create_prepaid_payment_link', data)
}

export function getPrepaidPaymentDetails(data: any) {
    return http.post<any>('/order/query_prepaid_payment', data)
}