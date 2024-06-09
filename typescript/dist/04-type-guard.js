function print(emp) {
    console.log('Name:' + emp.name);
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
});
