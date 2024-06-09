import axios from 'axios'
// import config from './config'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 60000
    })
  }

  get({ url, params = {} }) {
    return new Promise((resolve, reject) => {
      this.instance.get(url, {
        params
      })
        .then((result) => {
          resolve(result.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default new Http()