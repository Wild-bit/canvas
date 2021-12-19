
/*
** abstract 抽象类 不允许实例化，抽象类当做父类，被继承。且抽象类的派生类的构造函数中必须调用super()；接口可以当做“子类”继承其他类
*/
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
    render(container:HTMLElement){
        this.container = container
        let {width,height} = container.getBoundingClientRect()
        this.initCanvasSize(width,height)
        this.container.innerHTML = ''
        this.container.appendChild(this.el)
    }
}
export default Canvas