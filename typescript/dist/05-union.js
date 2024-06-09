// const hello = (name: string | undefined) => {
//   console.log(name)
// }
// let x
// hello(x)
var x;
x = 100;
x = 'hello';
// x = true
var Car;
(function (Car) {
    Car[Car["Automatice"] = 200] = "Automatice";
    Car[Car["Manual"] = 300] = "Manual";
})(Car || (Car = {}));
var v = {
    vType: 'truck',
    capacity: 100
};
function evaluatePrice(vehicle) {
    // return vehicle.capacity * 0.3
    switch (vehicle.vType) {
        case 'moto':
            return vehicle.make * 0.3;
        case 'truck':
            return vehicle.capacity * 0.3;
    }
}
var myTruck = {
    vType: 'truck',
    capacity: 10
};
evaluatePrice(myTruck);
