/**
 * Class that handles photos by storing them in and retrieving them from local storage.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 2.0.0
 */
export class PhotoStorage {
  _saveImage (image) {
    if (image.alt === undefined || image.alt.length === 0) {
      throw new Error('Alt description is required for all images')
    } if (image === null || image === undefined || image.src.length === 0) {
      throw new Error('Invalid image')
    }

    this.#saveImageToStorage(image)
  }

  #saveImageToStorage (image) {
    const imageAlt = image.alt
    const imageUrl = image.src

    localStorage.setItem(imageAlt, imageUrl)
  }

  _getImage (imageDescription) {
    if (typeof (imageDescription) !== 'string' || imageDescription === undefined || imageDescription.length === 0) {
      throw new Error('Invalid string')
    }

    const newImage = this.#getImageFromStorage(imageDescription)

    return newImage
  }

  #getImageFromStorage (imageDescription) {
    const fetchedImageUrl = localStorage.getItem(imageDescription)
    const newImage = this.#createNewImage(fetchedImageUrl, imageDescription)

    return newImage
  }

  #createNewImage (imageUrl, imageDescription) {
    const newImage = new Image()
    newImage.src = imageUrl
    newImage.alt = imageDescription

    return newImage
  }

  _clearAllPhotosFromStorage () {
    localStorage.clear()
  }
}
