import { PhotoFilter } from '../../../lib/photoAssistant/photoFilter.js'

export class PhotoHandler {
  #clickedImages = []

  /**
   * Method to add clicked images to an image array.
   *
   * @param {*} image
   */
  addClickedImagesToArray (image) {
    this.#clickedImages.push(image)

    console.log(this.#clickedImages)
  }

  /** 
   * Method to add filter to image in the DOM.
   * 
   */
  addFilter (filterMethod, editValue) {
    const photoFilter = new PhotoFilter()

    this.#clickedImages.forEach((image) => {
      photoFilter.filterPhoto(filterMethod, image, editValue)
    })
  }
}
