import request from '@/utils/request'

export const getUsersList = () => {
  return request({
    url: '/users',
    method: 'get'
  })
}

export const deleteUser = (id) => {
  return request({
    url: '/users',
    method: 'delete',
    data: {
      id
    }
  })
}

export const addUser = (data) => {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}