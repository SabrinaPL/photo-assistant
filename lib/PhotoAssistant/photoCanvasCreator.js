/**
 * Class that draws an image to a canvas so that the image can be saved.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
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
  _createPhotoCanvas (canvasId, canvasWidth, canvasHeight) {
    // Setup an empty canvas.
    const canvas = document.createElement('canvas')
    canvas.id = canvasId
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    console.log(canvas)
  }
}
