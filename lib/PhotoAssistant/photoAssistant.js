// Orchestrator class that invokes photo filtering, gallery display or photo sorting depending on which method has been sent in as argument (switch-statements?)
// Also invokes the photoHandler.

// Try/catch block to catch thrown errors.

import { PhotoFilter } from './photoFilter.js'

/**
 * Class that works as an orchestrator.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoAssistant {
  #images = []

  /**
   * Method to add filter to image in the DOM.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  #addFilter (filterMethod, filterValue) {
    const photoFilter = new PhotoFilter(filterMethod, filterValue)

    // Move this logic to the PhotoFilter class of the lib.
    this.#images.forEach((image) => {
      photoFilter.runPhotoFilter(image)
    })

    console.log(this.#images)
  }
}
