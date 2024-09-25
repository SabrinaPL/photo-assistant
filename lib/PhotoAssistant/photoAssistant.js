import { PhotoFilter } from './photoFilter.js'

/**
 * Class that works as an orchestrator.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoAssistant {
  #images = []

  addImage (image) {
    console.log('Image to be added: ' + image)
    // Send image to photoStorage for storing.
    // Retrieve image from storage.
    this.#addImageToArray(image)
  }

  filterPhotos (filterMethod, filterValue) {
    try {
      console.log('Adding filter...')
      this.#addFilter(filterMethod, filterValue)
    } catch (error) {
      console.error(error)
    }
  }

  displayPhotos () {
    // Invoke method to display photos in gallery.
  }

  sortPhotos () {
    // Invoke method to sort photos.
  }

  /**
   * Method to add images to an array.
   *
   * @param {HTMLImageElement} image - image to be added to images array.
   */
  #addImageToArray (image) {
    if (this.#images.length === 0) {
      this.#images.push(image)
    } else {
      // Check that images added to the array are unique.
      if (!this.#images.includes(image)) {
        this.#images.push(image)
      }
    }

    console.log(this.#images)
  }

  /**
   * Method to add filter to image.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  #addFilter (filterMethod, filterValue) {
    try {
      const photoFilter = new PhotoFilter(filterMethod, filterValue)

      if (this.#images.length !== 0) {
        this.#images.forEach((image) => {
          photoFilter.runPhotoFilter(image)
        })
      } else {
        throw new Error('No images have been selected for editing')
      }
    } catch (error) {
      console.error(error)
    }
  }
}
