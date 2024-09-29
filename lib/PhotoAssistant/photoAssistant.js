import { PhotoFilter } from './photoFilter.js'
import { PhotoStorage } from './photoStorage.js'
import { PhotoGallery } from './photoGallery.js'
import { PhotoCanvasCreator } from './photoCanvasCreator.js'

/**
 * Class that works as an orchestrator and entry point of the library.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoAssistant {
  #images = []

  /**
   * Method to add an image to PhotoAssistant for storage and manipulation.
   *
   * @param {HTMLImageElement} image - selected image to be added.
   */
  addImage (image) {
    try {
      const photoStorage = new PhotoStorage()
      photoStorage._saveImage(image)
      const photoDescription = image.alt
      const newPhoto = photoStorage._getImage(photoDescription)
      this.#addImageToArray(newPhoto)

      console.log(this.#images)
    } catch (error) {
      console.log(error)
    }
  }

  filterPhotos (filterMethod, filterValue) {
    try {
      this.#addFilter(filterMethod, filterValue)
    } catch (error) {
      console.error(error)
    }
  }

  drawPhotosToCanvas (appendCanvasTo) {
    try {
      this.#createPhotoCanvas(appendCanvasTo)
    } catch (error) {
      console.error(error)
    }
  }

  displayPhotosInGallery (columns, galleryContainer) {
    try {
      const images = this.#images
      this.#createNewGallery(images, columns, galleryContainer)
    } catch (error) {
      console.error(error)
    }
  }

  storePhoto (image) {
    try {
      const photoStorage = new PhotoStorage()
      photoStorage._saveImage(image)
    } catch (error) {
      console.error(error)
    }
  }

  getStoredPhoto (imageDescription) {
    try {
      const photoStorage = new PhotoStorage()
      photoStorage._getImage(imageDescription)
    } catch (error) {
      console.error(error)
    }
  }

  clearPhotosFromStorage () {
    const photoStorage = new PhotoStorage()
    photoStorage._clearStorage()
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
  }

  /**
   * Method to add filter to image.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  #addFilter (filterMethod, filterValue) {
    const photoFilter = new PhotoFilter(filterMethod, filterValue)

    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        photoFilter._runPhotoFilter(image)
      })
    } else {
      throw new Error('No images have been selected for editing')
    }
  }

  #createNewGallery (images, columns, galleryContainer) {
    const photoGallery = new PhotoGallery(images, columns)
    photoGallery._setupGallery()
    photoGallery._renderGallery(galleryContainer)
  }

  #createPhotoCanvas (appendCanvasTo) {
    const photoCanvasCreator = new PhotoCanvasCreator(appendCanvasTo)

    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        photoCanvasCreator._runPhotoCanvasCreator(image, 'photoCanvas', '250', '250')
      })
    }
  }
}
