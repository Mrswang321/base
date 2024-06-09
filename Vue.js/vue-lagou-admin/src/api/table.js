// import request from '@/utils/request'
import axios from 'axios'

export function getList(params) {
  return axios({
    url: '/dev-api/vue-admin-template/table/list',
    method: 'get',
    params
  })
}