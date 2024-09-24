/**
 * Class that handles photos by storing images in, retrieving and deleting images from local storage.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoStorage {
  #images = []
  #image

  /**
   * Entry point method.
   *
   * @param {HTMLImageElement} image - most recent image.
   */
  runPhotoStorage (image) {
    this.#saveImageToStorage(image)
  }

  /**
   * Getter method for retrieving the images array.
   *
   * @returns {Array} images.
   */
  getImages () {
    console.log('In getImages: ' + this.#images)
    return this.#images
  }

  /**
   * Getter method for retrieving a single image.
   *
   * @returns {HTMLImageElement} image.
   */
  getImage () {
    console.log('In getImage: ' + this.#image)
    return this.#image
  }

  #saveImageToStorage (image) {
    const name = image.alt
    const url = image.src
    const style = image.style

    const imageData = {
      name,
      url,
      style
    }

    console.log(imageData)

    // localStorage.setItem(url, JSON.stringify(imageData))
  }

  #getImageFromStorage (image) {
    // Add control statement and error handling (such as if image is null).

    const name = image.alt
    // Fetch a single item from local storage.
    const fetchedImage = localStorage.getItem(name)
    console.log(JSON.parse(fetchedImage))
  }

  #getAllImagesFromStorage () {
    // Loop through the items in local storage.
    // Push them to the #images array.
    localStorage.getItem()
  }

  #removeImageFromStorage () {
    localStorage.removeItem()
  }

  #clearStorage () {
    localStorage.clear()
  }
}
