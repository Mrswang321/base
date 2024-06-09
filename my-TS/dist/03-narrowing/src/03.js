function example(x, y) {
    if (x == y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
    }
}
function mult(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
mult({ value: 5 }, 6);
mult({ value: undefined }, 6);
mult({ value: null }, 6);
// mult({ value: 'null'}, 6)
