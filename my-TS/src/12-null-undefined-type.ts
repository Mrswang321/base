let x: undefined = undefined
let y: null = null

// let z:String=undefined

function doSomething(x: String | null) {
  if (x === null) {

  } else {
    console.log(x.toLocaleLowerCase())
  }
}
function live(x?: Number | null) {
  console.log(x?.toFixed())
}