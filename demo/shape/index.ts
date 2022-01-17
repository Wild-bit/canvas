import renderCanvasInstances from '../../common/render'
import ShapeCanvas from './canvas/shape'

const moduleName = 'shape'
export default class Shape extends renderCanvasInstances {
  constructor() {
    super(moduleName)
    this.canvasInstances.push(new ShapeCanvas())
  }
}
