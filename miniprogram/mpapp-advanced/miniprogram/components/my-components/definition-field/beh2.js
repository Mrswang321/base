module.exports = Behavior({
  // behaviors: [require('beh3.js')],
  definitionFilter(defFields, definitionFilterArr) {
    // definitionFilterArr[0](defFields)
    console.log(defFields)
    // console.log(100)
    console.log(defFields.definitionFilter(300))
  },
})