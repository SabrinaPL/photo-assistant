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
  #alphabeticallySortedImages = []
  #photoFilterInstance
  #photoStorageInstance
  #photoGalleryInstance

  constructor () {
    this.#photoFilterInstance = new PhotoFilter()
    this.#photoStorageInstance = new PhotoStorage()
  }

  /**
   * Method to add an image to PhotoAssistant for storage and manipulation.
   *
   * @param {HTMLImageElement} image - selected image to be added.
   */
  addImage (imageToAdd) {
    try {
      this.#photoStorageInstance._saveImage(imageToAdd)
      const photoDescription = imageToAdd.alt
      const newPhoto = this.#photoStorageInstance._getImage(photoDescription)
      this.#addImageToArray(newPhoto)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * 
   * @param {string} filterMethod 
   * @param {string} filterValue 
   */
  chosenFiltersToAdd (filterMethod, filterValue) {
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
      if (this.#alphabeticallySortedImages.length !== 0) {
        const images = this.#alphabeticallySortedImages
        this.#setupNewGallery(images, columns)
        this.#renderNewGallery(galleryContainer)

        return
      } 

      const images = this.#images
      this.#setupNewGallery(images, columns, galleryContainer)
      this.#renderNewGallery(galleryContainer)
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
      this.#photoStorageInstance._saveImage(imageToStore)
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
      const retrievedPhoto = this.#photoStorageInstance._getImage(imageDescription)

      return retrievedPhoto
    } catch (error) {
      console.error(error)
    }
  }

  clearAllPhotosFromStorage () {
    this.#photoStorageInstance._clearAllPhotosFromStorage()
  }

  #addImageToArray (image) {
    this.#images.push(image)
  }

  #addFilters (filterMethod, filterValue) {
    if (typeof (filterMethod) !== 'string' || filterMethod === undefined || typeof (filterValue) !== 'string' || filterValue === undefined) {
      throw new Error('Invalid string')
    }

    if (this.#photoFilterInstance === null || this.#photoFilterInstance === undefined) {
      throw new Error('Photo Filter needs to be started')
    }

    this.#photoFilterInstance._runAddFilters(filterMethod, filterValue)
  }

  #applyFilter () {
    if (this.#photoFilterInstance === null || this.#photoFilterInstance === undefined) {
      throw new Error('Photo Filter needs to be started')
    }

    if (this.#images.length !== 0) {
      this.#images.forEach((image) => {
        this.#photoFilterInstance._runApplyFilters(image)
      })
    } else {
      throw new Error('No images have been selected for editing')
    }
  }

  #setupNewGallery (images, columns) {
    this.#photoGalleryInstance = new PhotoGallery(images, columns)
    this.#photoGalleryInstance._setupGallery()
  }

  #renderNewGallery (galleryContainer) {
    this.#photoGalleryInstance._renderGallery(galleryContainer)
  }

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
    this.#alphabeticallySortedImages = photoSort._runPhotoSorting()
  }
}
