import { http } from '@/utils/http';
// 获取字典
export function getDictionaryItemByType(type) {
    return http.post('/mapping/types', { mappingType: type });
}
