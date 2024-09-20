import { PhotoCreator } from '../utils/photoCreator.js'

/**
 * Class to edit photos.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 */
export class PhotoEdit {
  #editedPhoto

  // Create another entry point function? From that function, invoke the validateInput method and applyEditMethod? To adhere to the avoid nestling principle of clean code?
  // Start function creates a new photo element and displays the original photo, this photo will be updated once the edit functions are called. 
  // Create a slider? Dynamic updating of the image while editing? 

  // CHANGE OF PLAN! Images won't be added via image url (because of CORS issue and I can't find a good workaround) -> instead I will add event listener that listens to click on img-elements -> adds each image that has been clicked to an array (with control statements to make sure that only unique images are added to the array) -> presents the option of editing, sorting of displaying the images in a gallery

  /**
   * Method that returns edited photo after invoking the specified editing method.
   * 
   * @param {*} editMethod 
   *
   * @param {*} photoUrl 
   *
   * @param {*} editValue 
   *
   * @returns {HTML element} - edited photo
   *
   */
  editPhoto(editMethod, photoUrl, editValue) {
    console.log('Checking photo url in applyEditMethod ' + photoUrl)

    switch (editMethod) {
      case 'Brightness':
        this.#editedPhoto = this.#updateExposure(photoUrl, editValue)
        break
      case 'Saturation':
        this.#editedPhoto = this.#updateSaturation(photoUrl, editValue)
        break
      case 'Opacity':
        this.#editedPhoto = this.#updateOpacity(photoUrl, editValue)
        break
      case 'Sepia':
        this.#editedPhoto = this.#addSepia(photoUrl, editValue)
        break
      case 'Contrast':
        this.#editedPhoto = this.#updateContrast(photoUrl, editValue)
        break
      case 'Blur':
        this.#editedPhoto = this.#addBlur(photoUrl, editValue)
        break
      case 'Grayscale':
        this.#editedPhoto = this.#addGrayscale(photoUrl, editValue)
        break
      default:
        throw new Error('Editing method not specified')
    }

    return this.#editedPhoto
  }

  /**
   * Method that instantiates PhotoCreator and calls upon the createNewPhoto method.
   *
   * @param {*} photoUrl 
   *
   * @returns {HTML element} - new img element
   *
   */
  #createNewPhoto(photoUrl) {
    const photoCreator = new PhotoCreator()
    const photo = photoCreator.createNewPhoto(photoUrl)

    return photo
  }

  #updateExposure(photoUrl, ExposureValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `brightness(${ExposureValue})`

    return photo
  }

  #updateSaturation(photoUrl, saturationValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `saturation(${saturationValue})`

    return photo
  }

  #updateOpacity(photoUrl, opacityValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `opacity(${opacityValue})`

    return photo
  }

  #addSepia(photoUrl, sepiaValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `sepia(${sepiaValue})`

    return photo
  }

  #updateContrast(photoUrl, contrastValue) {
    console.log('Checking photoUrl in updateContrast method ' + photoUrl)

    const photo = this.#createNewPhoto(photoUrl)

    console.log(photo)

    photo.style.filter = `contrast(${contrastValue})`

    console.log(photo)

    return photo
  }

  #addBlur(photoUrl, blurValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `blur(${blurValue})`

    return photo
  }

  #addGrayscale(photoUrl, grayscaleValue) {
    const photo = this.#createNewPhoto(photoUrl)
    photo.style.filter = `grayscale(${grayscaleValue})`

    return photo
  }
}

