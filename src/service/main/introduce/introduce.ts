import { request, requestJson } from '@/service/index'

export function test() {
  return request.request({
    method: 'get',
    url: '/api/list'
  })
}

export function demo() {
  return request.request({
    method: 'post',
    url: '/api/demo',
    data: { name: 'zd' }
  })
}
