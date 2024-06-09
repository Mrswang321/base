import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/signin',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/users/isAuth',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
