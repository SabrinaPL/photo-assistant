/**
 * Class to filter photos.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 */
export class PhotoFilter {
  constructor () {
}
  // Create another entry point function? From that function, invoke the validateInput method and applyEditMethod? To adhere to the avoid nestling principle of clean code?
  // Start function creates a new photo element and displays the original photo, this photo will be updated once the edit functions are called. 
  // Create a slider? Dynamic updating of the image while editing? 

  // CHANGE OF PLAN! Images won't be added via image url (because of CORS issue and I can't find a good workaround) -> instead I will add event listener that listens to click on img-elements -> adds each image that has been clicked to an array (with control statements to make sure that only unique images are added to the array) -> presents the option of editing, sorting of displaying the images in a gallery

  /**
   * Method that adds a specified CSS filter to an image in the document.
   *
   * @param {*} filterMethod
   * @param {HTML element} image
   * @param {*} filterValue
   */
  filterPhoto (filterMethod, image, filterValue) {
    switch (filterMethod) {
      case 'Brightness':
        this.#updateExposure(image, filterValue)
        break
      case 'Saturation':
        this.#updateSaturation(image, filterValue)
        break
      case 'Opacity':
        this.#updateOpacity(image, filterValue)
        break
      case 'Sepia':
        this.#addSepia(image, filterValue)
        break
      case 'Contrast':
        this.#updateContrast(image, filterValue)
        break
      case 'Blur':
        this.#addBlur(image, filterValue)
        break
      case 'Grayscale':
        this.#addGrayscale(image, filterValue)
        break
      default:
        throw new Error('Filter method not specified')
    }
  }

  /**
   * Method that instantiates PhotoCreator and calls upon the createNewPhoto method.
   *
   * @param {*} photoUrl
   *
   * @returns {HTML element} - new img element
   *
   */
  /* #createNewPhoto(photoUrl) {
    const photoCreator = new PhotoCreator()
    const photo = photoCreator.createNewPhoto(photoUrl)

    return photo
  } */

  /**
   * Method that updates the exposure/brightness of an image.
   *
   * @param {*} image
   * @param {*} ExposureValue
   */
  #updateExposure (image, ExposureValue) {
    const photo = image
    photo.style.filter = `brightness(${ExposureValue})`
  }

  /**
   * Method that updates the saturation of an image.
   *
   * @param {*} image
   * @param {*} saturationValue
   */
  #updateSaturation (image, saturationValue) {
    const photo = image
    photo.style.filter = `saturation(${saturationValue})`
  }

  /**
   * Method that updates the opacity of an image.
   *
   * @param {*} image
   * @param {*} opacityValue
   */
  #updateOpacity (image, opacityValue) {
    const photo = image
    photo.style.filter = `opacity(${opacityValue})`
  }

  /**
   * Method adds sepia to an image.
   *
   * @param {*} image
   * @param {*} sepiaValue
   */
  #addSepia (image, sepiaValue) {
    const photo = image
    photo.style.filter = `sepia(${sepiaValue})`
  }

  /**
   * Method that updates the contrast of an image.
   *
   * @param {*} image
   * @param {*} contrastValue
   */
  #updateContrast (image, contrastValue) {
    const photo = image
    photo.style.filter = `contrast(${contrastValue})`
  }

  /**
   * Method that adds blur to an image.
   *
   * @param {*} image
   * @param {*} blurValue
   */
  #addBlur (image, blurValue) {
    const photo = image
    photo.style.filter = `blur(${blurValue})`
  }

  /**
   * Method that adds grayscale to an image.
   *
   * @param {*} image
   * @param {*} grayscaleValue
   */
  #addGrayscale (image, grayscaleValue) {
    const photo = image
    photo.style.filter = `grayscale(${grayscaleValue})`
  }
}
