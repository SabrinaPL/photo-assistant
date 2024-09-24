/**
 * Class to filter photos {HTMLImageElement}.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoFilter {
  #image
  #filterMethod
  #filterValue

  /**
   * Class constructor.
   *
   * @param {string} filterMethod - the method of which to filter the image.
   * @param {string} filterValue - the filter value.
   */
  constructor (filterMethod, filterValue) {
    if (typeof (filterMethod) !== 'string' || typeof (filterValue) !== 'string' || filterMethod === null || filterValue === null || filterMethod.length === 0 || filterValue.length === 0) {
      throw new Error('Invalid string')
    }

    this.#filterMethod = filterMethod
    this.#filterValue = filterValue
  }

  /**
   * Entry point method which invokes the filterPhoto method.
   *
   * @param {HTMLImageElement} image - the image to be filtered.
   */
  runPhotoFilter (image) {
    if (image === null) {
      throw new Error('Invalid image')
    }

    this.#image = image
    this.#filterPhotoManager()
  }

  /**
   * Method that delegates image filtering to the correct filter method.
   *
   */
  #filterPhotoManager () {
    switch (this.#filterMethod.toLowerCase()) {
      case 'brightness':
        this.#updateExposure()
        break
      case 'saturation':
        this.#updateSaturation()
        break
      case 'opacity':
        this.#updateOpacity()
        break
      case 'sepia':
        this.#addSepia()
        break
      case 'contrast':
        this.#updateContrast()
        break
      case 'blur':
        this.#addBlur()
        break
      case 'grayscale':
        this.#addGrayscale()
        break
      default:
        throw new Error('Filter method invalid or not specified')
    }
  }

  /**
   * Method that updates the exposure/brightness of an image.
   *
   */
  #updateExposure () {
    this.#image.style.filter = `brightness(${this.#filterValue})`
  }

  /**
   * Method that updates the saturation of an image.
   *
   */
  #updateSaturation () {
    this.#image.style.filter = `saturation(${this.#filterValue})`
  }

  /**
   * Method that updates the opacity of an image.
   *
   */
  #updateOpacity () {
    this.#image.style.filter = `opacity(${this.#filterValue})`
  }

  /**
   * Method adds sepia to an image.
   *
   */
  #addSepia () {
    this.#image.style.filter = `sepia(${this.#filterValue})`
  }

  /**
   * Method that updates the contrast of an image.
   *
   */
  #updateContrast () {
    this.#image.style.filter = `contrast(${this.#filterValue})`
  }

  /**
   * Method that adds blur to an image.
   *
   */
  #addBlur () {
    this.#image.style.filter = `blur(${this.#filterValue})`
  }

  /**
   * Method that adds grayscale to an image.
   *
   */
  #addGrayscale () {
    this.#image.style.filter = `grayscale(${this.#filterValue})`
  }
}
