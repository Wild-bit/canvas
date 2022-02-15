import Canvas from 'COMMON/canvas'
//canvas中相对于原点的位置
interface Point {
  x: number
  y: number
}
class ShapeCanvas extends Canvas {
  shapeWidth: number
  shapeHeight: number
  shapeCount: number
  shapes: Point[]
  ctx: CanvasRenderingContext2D
  constructor() {
    super() //表示父类的构造函数，用来创建父类的 this。
    this.shapeWidth = 100
    this.shapeHeight = 100
    this.shapeCount = 6
    this.shapes = []
    this.ctx = this.getContext('2d')
  }
  // 动态计算shape的位置
  // drawShape(){
  //     let {width,height,shapeWidth,shapeHeight,shapeCount,shapes} = this
  //     let maxHorizontalCount = 4; // 每行最大容量
  //     let minMargin = 20
  // }
  drawShapes() {
    let { ctx, shapes, shapeHeight, shapeWidth } = this
    ctx.save()
    ctx.lineWidth = 1
    // 绘制三角形
    // let triangle =
    ctx.beginPath()
    ctx.moveTo(100, 50)
    ctx.lineTo(50, 100)
    ctx.lineTo(50, 50)
    ctx.closePath()
    ctx.stroke()
  }
  render(container: HTMLElement) {
    super.render(container)
    this.drawShapes()
  }
}
export default ShapeCanvas
