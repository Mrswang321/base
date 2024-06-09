import { LOADDATA, LOADDATASAGA } from './actionTypes'

export const loadDataSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

export const loadDataSyncSaga = () => {
  return {
    type: LOADDATASAGA
  }
}



// export const loadDataAsync = () => {
//   return async (dispatch) => {
//     let result = await http.get({
//       url: '/api/list'
//     })
//     dispatch(loadDataSync(result.data))
//   }
// }

