import request from '@/utils/request'
// 传data
export function getComment(data){
    return request({
        url:'/get_info',
        data
    })
}