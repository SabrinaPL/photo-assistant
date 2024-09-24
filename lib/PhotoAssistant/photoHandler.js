import { PhotoCreator } from '../utils/photoCreator.js'

/**
 * Class that handles photos by storing images in, retrieving and deleting images from local storage and by adding them to an array.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoHandler {
  #images = []

  /**
   * Entry point method.
   *
   * @param {HTMLImageElement} image - most recent image.
   */
  runPhotoHandler (image) {
    const photoCreator = new PhotoCreator()
    const newImage = photoCreator.createNewPhoto(image)
    this.#addImagesToArray(newImage)
  }

  /**
   * Getter method for retrieving the images array.
   *
   * @returns {Array} images.
   */
  getImages () {
    return this.#images
  }

  /**
   * Method to add images to an array.
   *
   * @param {HTMLImageElement} image - image to be added to images array.
   */
  #addImagesToArray (image) {
    if (this.#images.length === 0) {
      this.#images.push(image)
    } else {
      // Check that images added to the array are unique.
      if (!this.#images.includes(image)) {
        this.#images.push(image)
      }
    }
  }

  #saveImagesToStorage () {
    localStorage.setItem()
  }

  getImageFromStorage () {
    localStorage.getItem()
  }

  #removeImageFromStorage() {
    localStorage.removeItem()
  }
}
