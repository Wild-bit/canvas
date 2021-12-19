import Canvas from "../../../common/canvas"
//canvas中相对于原点的位置
interface Point {
    x:number
    y:number
}
class ShapeCanvas extends Canvas{
    shapeWidth:number
    shapeHeight:number
    shapeCount:number
    shapes:Point[]
    ctx:CanvasRenderingContext2D
    constructor() {
        super() //表示父类的构造函数，用来创建父类的 this。
        this.shapeWidth = 100
        this.shapeHeight = 100
        this.shapeCount = 6
        this.shapes = []
        this.ctx = this.getContext('2d')
    }
}