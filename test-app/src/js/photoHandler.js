import { PhotoFilter } from '../../../lib/photoAssistant/photoFilter.js'

/**
 * Class that handles filter method, value and adds clicked images to an array.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoHandler {
  #clickedImages = []

  /**
   * Entry point method.
   *
   * @param {HTMLImageElement} clickedImage - most recent image that has been clicked.
   */
  runPhotoHandler (clickedImage) {
    this.#addClickedImagesToArray(clickedImage)
  }

  /**
   * Method to add filter to image in the DOM.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  addFilter (filterMethod, filterValue) {
    const photoFilter = new PhotoFilter(filterMethod, filterValue)

    // Move this logic to the PhotoFilter class of the lib.
    this.#clickedImages.forEach((image) => {
      photoFilter.runPhotoFilter(image)
    })

    console.log(this.#clickedImages)
  }

  /**
   * Method to add clicked images to an image array.
   *
   * @param {HTMLImageElement} clickedImage - recently clicked image to be added to clicked images array.
   */
  #addClickedImagesToArray (clickedImage) {
    // Also move this logic to the lib as a util.
    if (this.#clickedImages.length === 0) {
      this.#clickedImages.push(clickedImage)
    } else {
      // Check that images added to the array are unique.
      if (!this.#clickedImages.includes(clickedImage)) {
        this.#clickedImages.push(clickedImage)
      }
    }
  }
}
