const obj = {
  x: 0
}

const obj2 = {
  x: 0
}

console.log(Object.is(obj, obj2))
console.log(JSON.stringify(obj) === JSON.stringify(obj2))

function reducer(state={x: 0, y: 1}, action) {
  switch (action.type) {
    case value:
      return {
        x: 100,
        ...state
      }
      break;
  
    default:
      break;
  }
}