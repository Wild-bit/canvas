import Canvas from "COMMON/canvas";

abstract class  renderCanvasInstances extends Canvas {
    // el:HTMLDivElement
    moduleName:string
    // canvasInstances:Canvas[]

    constructor(moduleName:string) {
        // this.canvasInstances = []
        super()
        this.moduleName = moduleName
        this.container = document.createElement('div')
    }
    // renderCanvas(){
    //     let count = this.canvasInstances.length
    //     this.el.style.width = '500px'
    //     this.el.style.height = '500px'
    //     this.el.style.border = '1px soild #dedede'
    //     Canvas.
    // }
    render(){
        this.container.innerHTML = ''
        this.container.style.width = '500px'
        this.container.style.height = '500px'
        this.container.style.border = '1px soild #dedede'
        super.render(this.container)
    }
}
export default renderCanvasInstances