import { http } from '@/utils/http';
// 获取字典
export function getDictionaryItemByType(type) {
    return http.post('/mapping/types', { mappingType: type });
}
export const upload = async (data) => {
    const formData = new FormData();
    formData.append('file', data);
    return await http.post('/general/upload', formData);
};
