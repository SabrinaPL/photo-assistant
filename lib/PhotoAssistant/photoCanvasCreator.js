/**
 * Class that draws an image to a canvas so that the image can be saved.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 2.0.0
 */
export class PhotoCanvasCreator {
  #imageToBeDrawn
  #appendCanvasTo
  #canvas

  /**
   * 
   * @param {HTMLElement} appendCanvasTo 
   */
  constructor(appendCanvasTo) {
    if (appendCanvasTo === null || appendCanvasTo === undefined) {
      throw new Error('Invalid HTML element')
    }

    this.#appendCanvasTo = appendCanvasTo
  }

  _runPhotoCanvasCreator(imageToBeDrawn, canvasId) {
    if (imageToBeDrawn === null || imageToBeDrawn === undefined || imageToBeDrawn.src.length === 0) {
      throw new Error('Invalid image')
    } if (canvasId === undefined || typeof (canvasId) !== 'string') {
      throw new Error('Invalid string')
    }

    this.#imageToBeDrawn = imageToBeDrawn
    this.#imageToBeDrawn.onload = this.#createCanvas(canvasId)
    this.#drawPhotoToCanvas()
    this.#appendCanvas()
  }

  #createCanvas(canvasId) {
    // Setup an empty canvas.
    this.#canvas = document.createElement('canvas')
    this.#canvas.id = canvasId
    this.#canvas.width = this.#imageToBeDrawn.width
    this.#canvas.height = this.#imageToBeDrawn.height
  }

  #drawPhotoToCanvas() {
    const canvas2dContext = this.#canvas.getContext('2d')

    if (this.#imageToBeDrawn.style.filter) {
      const filter = this.#imageToBeDrawn.style.filter
      canvas2dContext.filter = filter
    }
    canvas2dContext.drawImage(this.#imageToBeDrawn, 0, 0)
  }

  #appendCanvas() {
    this.#appendCanvasTo.appendChild(this.#canvas)
  }
}
