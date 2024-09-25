/**
 * Class that handles photo gallery display logic.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoGallery {
  #images = []
  #gridColumns
  #gridRows

  /**
   * Class constructor.
   *
   * @param {Array} images - array of images to be rendered in the gallery.
   */
  constructor (images) {
    this.#images = images

    console.log(this.#images)
  }

  /**
   * Creates a grid gallery layout by calculating the grid size by taking the grid columns as an argument and calculating the needed grid row size to fit the selected amount of photos.
   *
   * @param {number} columns - the amount of columns which will be used to calculate the grid layout.
   */
  #createGridGallery (columns) {
    // TODO: Check that #images isn't empty, add error handling.
    const numberOfPhotos = this.#images.length
    this.#gridColumns = columns
    this.#gridRows = Math.ceil(numberOfPhotos / this.#gridColumns)

    for (let i = 1; i < numberOfPhotos; i++) {

    }
  }
}

// Grid gallery.
// Flexbox display.
// Animations? Dynamic galleries?
// If-statements or switch to check which kind of gallery should be created.

// Takes an array of photos as argument.

// Loop through the images (urls) in the photo array and create as many image elements as items in the array.
// Based on this info, set up the grid or flexbox layout.
