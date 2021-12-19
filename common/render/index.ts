import Canvas from "../canvas";

abstract class  renderCanvasInstances {
    el:HTMLDivElement
    moduleName:string
    canvasInstances:Canvas[]

    constructor(moduleName:string) {
        this.canvasInstances = []
        this.moduleName = moduleName
        this.el = document.createElement('div')
    }
    renderCanvas(){
        let count = this.canvasInstances.length
        
    }
    render(){
        this.el.innerHTML = ''
        document.body.appendChild(this.el)
    }
}