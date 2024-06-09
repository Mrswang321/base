function printCoord(pt) {
    console.log(pt.x, '===>', pt.y, '===>');
}
printCoord({
    x: 100, y: 4000
});
//可以不传
function printName(obj) {
    var _a;
    // console.log(obj.last?.toUpperCase())
    // if (obj.last!=undefined) {
    //   console.log(obj.last.toUpperCase())
    // }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase());
}
printName({
    first: "first"
});
printName({
    first: 'first', last: "last"
});
