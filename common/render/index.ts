import Canvas from '../canvas'

abstract class renderCanvasInstances extends Canvas {
  wrap: HTMLDivElement
  moduleName: string
  canvasInstances: Canvas[]

  constructor(moduleName: string) {
    super()
    this.canvasInstances = []
    this.moduleName = moduleName
    this.wrap = document.createElement('div')
    this.wrap.style.width = '500px'
    this.wrap.style.height = '500px'
    this.wrap.style.border = '1px solid #dedede'
    this.wrap.style.borderRadius = '20px'
  }
  renderCanvas() {
    let count = this.canvasInstances.length
    if (count > 0) {
      for (let canvas of this.canvasInstances) {
        // let clone =
        canvas.render(this.wrap)
      }
    }
    //  document.body.appendChild(this.wrap)
    // this.wrap.style.width = '500px'
    // this.wrap.style.height = '500px'
    // this.wrap.style.border = '1px soild #dedede'
    // this.wrap.style.borderRadius = '20px'
    // super.render(this.wrap)
  }
  render() {
    this.wrap.innerHTML = ''
    document.body.appendChild(this.wrap)
    this.renderCanvas()
    // super.render(this.container)
    return this
  }
}
export default renderCanvasInstances
