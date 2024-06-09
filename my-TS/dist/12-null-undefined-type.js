var x = undefined;
var y = null;
// let z:String=undefined
function doSomething(x) {
    if (x === null) {
    }
    else {
        console.log(x.toLocaleLowerCase());
    }
}
function live(x) {
    console.log(x === null || x === void 0 ? void 0 : x.toFixed());
}
