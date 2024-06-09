function printAll(strs) {
    //类型守卫
    if (typeof strs === 'object') {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s, '====>object');
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs, '===>string');
    }
    else {
        // 
        console.log(strs, '==>');
    }
}
printAll(null);
