/**
 * Class that handles photo gallery display logic.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoGallery {
  #images = []

  /**
   * Class constructor.
   *
   * @param {Array} images - array of images to be rendered in the gallery.
   */
  constructor (images) {
    this.#images = images

    console.log(this.#images)
  }

  #createGridGallery () {
    for (let i = 0; i < this.#images; i++) {

    }
  }
}

// Grid gallery.
// Flexbox display.
// Animations? Dynamic galleries?
// If-statements or switch to check which kind of gallery should be created.

// Takes an array of photos as argument.

// Loop through the images (urls) in the photo array and create as many image elements (with the helper method from photo.js) as items in the array.
// Based on this info, set up the grid or flexbox layout.
