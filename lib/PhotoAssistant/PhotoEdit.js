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

  applyEditMethod(editMethod, photoUrl, editValue) {
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

    // const photo = this.#createNewPhoto(photoUrl)

    const photo = document.getElementById('testPhoto')

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

