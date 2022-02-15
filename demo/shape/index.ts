import renderCanvasInstances from 'COMMON/render/index'
import ShapeCanvas from './canvas/shape'

const moduleName = 'shape'
export default class Shape extends renderCanvasInstances {
  constructor() {
    super(moduleName)
    this.canvasInstances.push(new ShapeCanvas())
  }
}
