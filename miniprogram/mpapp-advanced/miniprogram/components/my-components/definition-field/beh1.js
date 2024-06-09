module.exports = Behavior({
  behaviors: [require('beh2.js')],
  definitionFilter(defFields, definitionFilterArr) {
    console.log(defFields)
    // console.log(definitionFilterArr);
    // definitionFilterArr[0]()
    return {
      x: 100
    }
  },
})