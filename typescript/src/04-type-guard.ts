// in 关键字
interface Admin {
  name: string
  privileges: string[]
}

interface Employee {
  name: string
  startDate: Date
}

type UnknowEmployee = Employee | Admin

function print(emp: UnknowEmployee) {
  console.log('Name:' + emp.name)
  if ("privileges" in emp) {
    console.log(0);
  }
  if ("startDate" in emp) {
    console.log(1);
  }
}

print({
  name: 'zhangsan',
  privileges: ['a', 'b'],
  startDate: new Date()
})