function prontC(pt) {
}
prontC({
    x: 20, y: 20000
});
//扩展后的类型都得写
var bear = {
    name: "winie",
    honey: true
};
// console.log(bear.name, bear.honey)
// type Animal={
//   name:String
// }
//类型别名扩展
// type Bear=Animal&{
// honey:Boolean
// }
// const bear:Bear ={
//   name:"winnie",
//   honey:true
// }
//向现有的类型添加字段
// interface MyWindow {
//   count: Number
// }
// // 同名添加字段
// interface MyWindow {
//   title: String
// }
// const w: MyWindow = {
//   title: "ts ", count: 0
// }
//type类型创建后不能更改
// type MyWindow={
//   title:String
// }
// type MyWindow={
//   count:String
// }
