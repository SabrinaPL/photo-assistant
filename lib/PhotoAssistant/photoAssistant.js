// Orchestrator class that invokes photo filtering, gallery display or photo sorting

// Try/catch block to catch thrown errors.

import { PhotoFilter } from './photoFilter.js'
import { PhotoHandler } from './photoHandler.js'

/**
 * Class that works as an orchestrator.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoAssistant {
  #images = []

  fetchImages () {
    const photoHandler = new PhotoHandler()
    const images = photoHandler.getImages()
    console.log('In fetch images: ' + images)
  }

  filterPhotos (filterMethod, filterValue) {
    this.fetchImages()
    this.#addFilter(filterMethod, filterValue)
  }

  displayPhotos () {
    // Invoke method to display photos in gallery.
  }

  sortPhotos () {
    // Invoke method to sort photos.
  }

  /**
   * Method to add filter to image.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  #addFilter (filterMethod, filterValue) {
    const photoFilter = new PhotoFilter(filterMethod, filterValue)

    this.#images.forEach((image) => {
      photoFilter.runPhotoFilter(image)
    })
  }
}
