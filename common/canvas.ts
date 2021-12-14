
abstract class Canvas {
    readonly el: HTMLCanvasElement
    width: number
    height: number
    container:HTMLElement
    constructor() {
        this.el = document.createElement('canvas')
    }
    //初始canvas容器大小
    initCanvasSize(width:number,height:number){
        this.el.width = width
        this.el.height = height
        this.width = width
        this.height = height
    }
    // 获取canvas上下文
    getContext(contextId : '2d'){
        return this.el.getContext(contextId)
    }
}