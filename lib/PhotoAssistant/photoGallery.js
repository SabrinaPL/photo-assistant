/**
 * Class that handles photo gallery display logic.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoGallery {
  #images = []
  #gridColumns
  #gridRows
  #galleryElement

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
   * @param {HTMLDivElement} galleryElement - the gallery element to which the grid layout will be appended.
   */
  #createGridGallery (columns, galleryElement) {
    // TODO: add type check and error handling.
    const numberOfPhotos = this.#images.length
    this.#galleryElement = galleryElement
    this.#gridColumns = columns
    this.#gridRows = Math.ceil(numberOfPhotos / this.#gridColumns)

    this.#galleryElement.style.display = 'grid'
    this.#galleryElement.style.gridTemplateColumns = `repeat(${this.#gridColumns}, 1fr)`
    this.#galleryElement.style.gridTemplateRows = `repeat(${this.#gridRows}, auto)`

    for (let i = 0; i < numberOfPhotos; i++) {
      const gridItem = document.createElement('div')
      gridItem.appendChild(this.#images[i])
      this.#galleryElement.appendChild(gridItem)
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
