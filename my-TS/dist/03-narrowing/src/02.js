function print(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
    }
}
function nultiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) {
            return x * factor;
        });
    }
}
console.log(nultiplyAll([3, 4], 2));
