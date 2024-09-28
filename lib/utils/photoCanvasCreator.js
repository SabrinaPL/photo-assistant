// Helper class that draws images using canvas API.
export class PhotoCanvasCreator {
  #imageToBeDrawn
  #appendCanvasTo

  constructor (imageToBeDrawn, appendCanvasTo) {
    if (imageToBeDrawn === null || imageToBeDrawn.length === 0) {
      throw new Error('Invalid image')
    }

    this.#imageToBeDrawn = imageToBeDrawn
    this.#appendCanvasTo = appendCanvasTo
  }

  /**
   * Method to create a blank canvas.
   *
   * @param {*} canvasId
   * @param {*} canvasWidth
   * @param {*} canvasHeight
   */
  createPhotoCanvas (canvasId, canvasWidth, canvasHeight) {
    // Setup an empty canvas.
    const canvas = document.createElement('canvas')
    canvas.id = canvasId
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    console.log(canvas)
  }
}
