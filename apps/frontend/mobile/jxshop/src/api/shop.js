import { http } from '@/utils/http';
// 获取门店列表
export function getShops() {
    return http.post('/shop/list');
}
// 获取门店列表
export function getShopDetails(shopId) {
    return http.get(`/details/${shopId}`);
}
// 获取门店商品列表
export function getShopDetail(shopId) {
    return http.get(`/shop/details/${shopId}`);
}
export function getShopCommodities(shopId) {
    return http.post(`/commodity/list`, { shopId });
}
