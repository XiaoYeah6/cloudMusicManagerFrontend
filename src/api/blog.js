import request from '@/utils/request'
const baseURL = 'http://www.yeyilong.site:3001'

export function fetchList(params){
    return request({
        url: `${baseURL}/blog/list`,
        method: 'get',
        params: {
            ...params
        }
    })
}

export function del(params){
    return request({
        url: `${baseURL}/blog/del`,
        method: 'post',
        data: {
            ...params
        }
    })
}