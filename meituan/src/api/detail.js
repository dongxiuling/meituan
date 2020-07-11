import request from '@/utils/request'
// 传data
export function getStoreById(data){
    return request({
        url:'/get_store_id',
        data
    })
}