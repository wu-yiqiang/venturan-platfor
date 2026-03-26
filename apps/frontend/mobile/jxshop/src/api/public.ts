import { http } from '@/utils/http'


// 获取字典
export function getDictionaryItemByType(type: string) {
    return http.post<any>('/mapping/types', { mappingType: type })
}

export const upload = async (data: any): Promise<any> => {
    const formData = new FormData()
    formData.append('file', data)
    return await http.post('/general/upload', formData )
}