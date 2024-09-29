/**
 * Class that handles photos by storing in, retrieving and deleting images from local storage.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoStorage {
  /**
   * Save an image to and retrieve an image (new image element) from local storage.
   *
   * @param {HTMLImageElement} image
   */
  _saveImage (image) {
    if (image.alt === null || image.alt.length === 0) {
      throw new Error('Image alt cannot be null or empty. Alt description is required.')
    } if (image === null || image.src.length === 0) {
      throw new Error('Invalid image')
    }

    this.#saveImageToStorage(image)
  }

  /**
   * Fetch an image from local storage.
   *
   * @param {string} imageDescription - image alt text.
   * @returns {HTMLImageElement} newImage - new image created with original image's source which has been stored and retrieved from local storage.
   */
  _getImage (imageDescription) {
    if (typeof (imageDescription) !== 'string' || imageDescription === null || imageDescription.length === 0) {
      throw new Error('Invalid string')
    }

    const newImage = this.#getImageFromStorage(imageDescription)

    return newImage
  }

  /**
   * Method to clear all images from storage.
   */
  _clearStorage () {
    localStorage.clear()
  }

  /**
   * Takes the reference to the original image element and extracts the url from it for storage, which will later be used to construct a new image element that can be used for manipulation.
   *
   * @param {HTMLImageElement} image - image to be stored.
   */
  #saveImageToStorage (image) {
    const name = image.alt
    const imageUrl = image.src

    // Image element is deconstructed and only the extracted image src stored to "break reference" to the original image element and simplify data storaging.
    localStorage.setItem(name, imageUrl)
  }

  /**
   * Retrieves an image from storage by its url and constructs a new image element from it.
   *
   * @param {string} imageDescription - the alt text of the image to be retrieved which also corresponds to the image key saved in storage.
   * @returns {HTMLImageElement} newImage - new image which has been created from original image's source.
   */
  #getImageFromStorage (imageDescription) {
    const fetchedImageUrl = localStorage.getItem(imageDescription)

    // New image element is constructed for later manipulation, to create an independence from the original image element.
    const newImage = new Image()
    newImage.src = fetchedImageUrl
    newImage.alt = imageDescription

    return newImage
  }
}
