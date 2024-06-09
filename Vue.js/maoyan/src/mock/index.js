import Mock from 'mockjs'
import config from '@/utils/config'

const url = config.baseURL + '/mock/test'

// 请求的时候一定要精准匹配RURL
Mock.mock(url, 'get', {
  img: "@cparagraph(3)",
})