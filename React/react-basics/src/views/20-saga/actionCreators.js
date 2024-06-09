export const loadData = url => {
  return {
    type: 'loadDataSaga',
    url: '/manifest.json'
  }
}

export const loadData2 = url => {
  return {
    type: 'loadDataSaga2',
    url: '/manifest.json'
  }
}