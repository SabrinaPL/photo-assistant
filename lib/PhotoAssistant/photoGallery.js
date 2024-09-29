/**
 * Class that handles photo gallery display logic.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoGallery {
  #images = []
  #gridColumns
  #gridRows
  #galleryContainer

  /**
   * Class constructor.
   *
   * @param {Array} images - array of HTML image elements to be rendered in the gallery.
   * @param {number} columns - the amount of columns which will be used to calculate the grid layout.
   */
  constructor (images, columns) {
    if (images === null || images.length === 0) {
      throw new Error('Images array cannot be null or empty')
    } else if (columns === null || typeof (columns) !== 'number') {
      throw new Error('Invalid number')
    }

    this.#images = images
    this.#gridColumns = columns
  }

  _setupGallery () {
    this.#createGridGallery()
  }

  /**
   * Method to render gallery after creation.
   *
   * @param {HTMLElement} appendGalleryTo - element to which the created grid gallery will be appended.
   */
  _renderGallery (appendGalleryTo) {
    if (this.#galleryContainer !== null) {
      appendGalleryTo.appendChild(this.#galleryContainer)
    } else {
      throw new Error('There is no gallery yet created to be rendered')
    }
  }

  /**
   * Creates a grid gallery layout by calculating the grid size by taking the grid columns as an argument and calculating the needed grid row size to fit the selected amount of photos.
   *
   */
  #createGridGallery () {
    const numberOfPhotos = this.#images.length
    this.#gridRows = Math.ceil(numberOfPhotos / this.#gridColumns)

    this.#galleryContainer = document.createElement('div')
    this.#galleryContainer.class = 'gallery-container'
    this.#galleryContainer.style.display = 'grid'
    this.#galleryContainer.style.gridTemplateColumns = `repeat(${this.#gridColumns}, 1fr)`
    this.#galleryContainer.style.gridTemplateRows = `repeat(${this.#gridRows}, auto)`

    for (let i = 0; i < numberOfPhotos; i++) {
      const gridItem = document.createElement('div')
      gridItem.appendChild(this.#images[i])
      this.#galleryContainer.appendChild(gridItem)
    }
  }
}
