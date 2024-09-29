/**
 * Class that draws an image to a canvas so that the image can be saved.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoCanvasCreator {
  #imageToBeDrawn
  #appendCanvasTo
  #canvas

  constructor (appendCanvasTo) {
    if (appendCanvasTo === null) {
      throw new Error('Invalid HTML element')
    }

    this.#appendCanvasTo = appendCanvasTo
  }

  _runPhotoCanvasCreator (imageToBeDrawn, canvasId, canvasWidth, canvasHeight) {
    if (imageToBeDrawn === null || imageToBeDrawn.length === 0) {
      throw new Error('Invalid image')
    } if (typeof (canvasId) !== 'string' || typeof (canvasWidth) !== 'string' || typeof (canvasHeight) !== 'string' || (canvasId) === null || (canvasWidth) === null || (canvasHeight) === null) {
      throw new Error('Invalid string')
    }

    this.#imageToBeDrawn = imageToBeDrawn

    this.#createCanvas(canvasId, canvasWidth, canvasHeight)
    this.#imageToBeDrawn.onload = () => this.#drawPhotoToCanvas()
    this.#appendCanvas()
  }

  /**
   * Method to create a blank canvas.
   *
   * @param {*} canvasId
   * @param {*} canvasWidth
   * @param {*} canvasHeight
   */
  #createCanvas (canvasId, canvasWidth, canvasHeight) {
    // Setup an empty canvas.
    this.#canvas = document.createElement('canvas')
    this.#canvas.id = canvasId
    this.#canvas.width = canvasWidth
    this.#canvas.height = canvasHeight
  }

  #drawPhotoToCanvas () {
    console.log('in drawPhotoToCanvas')
    console.log(this.#canvas)
    console.log(this.#imageToBeDrawn)
    const canvas2dContext = this.#canvas.getContext('2d')
    console.log(canvas2dContext)
    canvas2dContext.drawImage(this.#imageToBeDrawn, 300, 200)
  }

  #appendCanvas () {
    console.log('inside appendCanvas')
    console.log(this.#appendCanvasTo)
    console.log(this.#canvas)
    this.#canvas.appendChild(this.#appendCanvasTo)
  }
}
