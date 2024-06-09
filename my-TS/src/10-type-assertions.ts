//类型断言
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')
//不知道类型
// const x = ('hello' as unknown) as Number