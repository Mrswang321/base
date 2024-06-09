// const hello = (name: string | undefined) => {
//   console.log(name)
// }

// let x

// hello(x)

let x: number | string
x = 100
x = 'hello'
// x = true

enum Car {
  Automatice = 200,
  Manual = 300
}

interface Moto {
  vType: 'moto',
  make: number
}

interface Truck {
  vType: 'truck',
  capacity: number
}

type Vehicle = Moto | Truck

let v: Vehicle = {
  vType: 'truck',
  capacity: 100
}

function evaluatePrice(vehicle: Vehicle) {
  // return vehicle.capacity * 0.3
  switch(vehicle.vType) {
    case 'moto':
      return vehicle.make * 0.3

    case 'truck':
      return vehicle.capacity * 0.3
  }
}

const myTruck: Truck = {
  vType: 'truck',
  capacity: 10
}
evaluatePrice(myTruck)