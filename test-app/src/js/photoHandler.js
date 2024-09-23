import { PhotoFilter } from '../../../lib/photoAssistant/photoFilter.js'

/**
 * Class that handles filter method, value and adds clicked images to an array.
 */
export class PhotoHandler {
  #clickedImages = []

  /**
   * Entry point method.
   *
   * @param {*} clickedImage
   */
  runPhotoHandler (clickedImage) {
    this.#addClickedImagesToArray(clickedImage)
  }

  /**
   * Method to add filter to image in the DOM.
   *
   * @param {*} filterMethod - method to filter image.
   * @param {*} filterValue - value of which to filter image.
   */
  addFilter (filterMethod, filterValue) {
    const photoFilter = new PhotoFilter(filterMethod, filterValue)

    this.#clickedImages.forEach((image) => {
      photoFilter.runPhotoFilter(image)
    })
  }

  /**
   * Method to add clicked images to an image array.
   *
   * @param {*} clickedImage - recently clicked image to be added to clicked images array.
   */
  #addClickedImagesToArray (clickedImage) {
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
