import request from '@/utils/request'
const baseURL = 'http://106.12.7.183:3001'

export function fetchList(params){
    return request({
        params,
        url: `${baseURL}/playlist/list`,
        method: 'get'
    })
}

export function fetchById(params){
    return request({
        params,
        url: `${baseURL}/playlist/getById`,
        method: 'get',
    })
}

export function update(params){
    return request({
        url: `${baseURL}/playlist/updatePlaylist`,
        data: {
            ...params
        },
        method: 'post',
    })
}

export function del(params){
    return request({
        params,
        url: `${baseURL}/playlist/del`,
        method: 'get',
    })
}