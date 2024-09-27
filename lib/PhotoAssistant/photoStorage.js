/**
 * Class that handles photos by storing in, retrieving and deleting images from local storage.
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
   * @returns {HTMLImageElement} newImage - new image created with original image's source which has been stored and retrieved from local storage.
   */
  runPhotoStorage (image) {
    if (image.alt === null || image.alt.length === 0) {
      throw new Error('Image alt cannot be null or empty. Alt description is required.')
    }

    const imageDescription = image.alt

    // Image data is stored to local storage for image persistance.
    this.#saveImageToStorage(image)

    const newImage = this.#getImageFromStorage(imageDescription)

    return newImage
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

    // Get image from storage.
    return this.#image
  }

  /**
   * Takes the reference to the original image element and extracts the url from it for storage, which will later be used to construct a new image element that can be used for manipulation.
   *
   * @param {HTMLImageElement} image - image to be stored.
   */
  #saveImageToStorage (image) {
    const name = image.alt
    const imageUrl = image.src

    console.log(name)
    console.log(imageUrl)

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
    // Add control statement and error handling (such as if image is null).
    const fetchedImageUrl = localStorage.getItem(imageDescription)

    // New image element is constructed for later manipulation, to create an independence from the original image element.
    const newImage = new Image()
    newImage.src = fetchedImageUrl

    console.log(newImage)

    return newImage
  }

  /*
  #removeImageFromStorage () {
    localStorage.removeItem()
  } */

  #clearStorage () {
    localStorage.clear()
  }
}
