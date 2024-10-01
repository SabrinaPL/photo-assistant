import { PhotoFilter } from './photoFilter.js'
import { PhotoStorage } from './photoStorage.js'
import { PhotoGallery } from './photoGallery.js'
import { PhotoCanvasCreator } from './photoCanvasCreator.js'
import { PhotoSort } from './photoSort.js'

/**
 * Class that works as an orchestrator and entry point of the library.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoAssistant {
  #images = []
  #sortedImages = []
  // Added to maintain PhotoFilter() state, to enable multiple filters to be applied to single instance using multiple function calls.
  #photoFilterInstance

  /**
   * Method to add an image to PhotoAssistant for storage and manipulation.
   *
   * @param {HTMLImageElement} image - selected image to be added.
   */
  addImage (imageToAdd) {
    try {
      const photoStorage = new PhotoStorage()
      photoStorage._saveImage(imageToAdd)
      const photoDescription = imageToAdd.alt
      const newPhoto = photoStorage._getImage(photoDescription)
      this.#addImageToArray(newPhoto)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Method to instantiate a new instance of PhotoFilter.
   */
  startPhotoFilter () {
    this.#photoFilterInstance = new PhotoFilter()
  }

  /**
   * 
   * @param {string} filterMethod 
   * @param {string} filterValue 
   */
  choseFiltersToAdd (filterMethod, filterValue) {
    try {
      this.#addFilters(filterMethod, filterValue)
    } catch (error) {
      console.error(error)
    }
  }

  applyChosenFilters () {
    try {
      this.#applyFilter()
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * 
   * @param {HTMLElement} appendCanvasTo 
   * @param {string} canvasId
   */
  drawPhotosToCanvas (appendCanvasTo, canvasId) {
    try {
      this.#createPhotoCanvas(appendCanvasTo, canvasId)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * 
   * @param {number} columns 
   * @param {HTMLElement} galleryContainer 
   */
  displayPhotosInGallery (columns, galleryContainer) {
    try {
      // Will display images in alphabetical order, if images have been sorted.
      if (this.#sortedImages.length !== 0) {
        const images = this.#sortedImages
        this.#createNewGallery(images, columns, galleryContainer)

        return
      } 

      const images = this.#images
      this.#createNewGallery(images, columns, galleryContainer)
    } catch (error) {
      console.error(error)
    }
  }

  sortPhotos () {
    this.#sortPhotosByAlphabet()
  }

  /**
   * 
   * @param {HTMLImageElement} imageToStore 
   */
  storePhoto (imageToStore) {
    try {
      const photoStorage = new PhotoStorage()
      photoStorage._saveImage(imageToStore)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * 
   * @param {string} imageDescription 
   */
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
   * 
   * @param {string} filterMethod 
   * @param {string} filterValue 
   */
  #addFilters (filterMethod, filterValue) {
    if (typeof (filterMethod) !== 'string' || filterMethod === null || typeof (filterValue) !== 'string' || filterValue === null) {
      throw new Error('Invalid string')
    }

    this.#photoFilterInstance._runAddFilters(filterMethod, filterValue)
  }

  /**
   * Method to add filter to image.
   *
   * @param {string} filterMethod - method to filter image.
   * @param {string} filterValue - value of which to filter image.
   */
  #applyFilter () {
    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        this.#photoFilterInstance._runApplyFilters(image)
      })
    } else {
      throw new Error('No images have been selected for editing')
    }
  }

  /**
   * 
   * @param {Array} images 
   * @param {number} columns 
   * @param {HTMLElement} galleryContainer 
   */
  #createNewGallery (images, columns, galleryContainer) {
    const photoGallery = new PhotoGallery(images, columns)
    photoGallery._setupGallery()
    photoGallery._renderGallery(galleryContainer)
  }

  /** 
   * @param {HTMLImageElement} appendCanvasTo
   * @param {string} canvasId
   */
  #createPhotoCanvas (appendCanvasTo, canvasId) {
    const photoCanvasCreator = new PhotoCanvasCreator(appendCanvasTo)

    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        photoCanvasCreator._runPhotoCanvasCreator(image, canvasId)
      })
    }
  }

  #sortPhotosByAlphabet () {
    if (this.#images === null || this.#images.length === 0) {
      throw new Error('No images have been selected for comparison')
    }

    const photoSort = new PhotoSort(this.#images)
    this.#sortedImages = photoSort._runPhotoSorting()
  }
}
