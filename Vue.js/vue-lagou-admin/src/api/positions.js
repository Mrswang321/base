import request from '@/utils/request'

export const getPositionsList = () => {
  return request({
    url: '/positions/list',
    method: 'get'
  })
}

export const deletePosition = (id) => {
  return request({
    url: '/positions/remove',
    method: 'delete',
    data: {
      id
    }
  })
}

export const addPosition = (data) => {
  return request({
    url: '/positions/add',
    method: 'post',
    data
  })
}

export const editPosition = (data) => {
  return request({
    url: '/positions/update',
    method: 'patch',
    data
  })
}