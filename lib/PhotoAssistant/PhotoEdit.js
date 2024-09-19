import { photoCreator } from "../utils/photo.js"

/** 
 * Class to edit photos.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 */
class PhotoEdit {

  // Create another entry point function? From that function, invoke the validateInput method and applyEditMethod? To adhere to the avoid nestling principle of clean code?

  applyEditMethod (editMethod, photoUrl, editValue) {
    try {
      switch (editMethod) {
        case 'Brightness':
          this.#updateExposure(photoUrl, editValue)
          break
        case 'Saturation':
          this.#updateSaturation(photoUrl, editValue)
          break
        case 'Opacity':
          this.#updateOpacity(photoUrl, editValue)
          break
        case 'Sepia':
          this.#updateSepia(photoUrl, editValue)
          break
        case 'Contrast': 
          this.#updateContrast(photoUrl, editValue)
          break
        case 'Blur':
          this.#updateBlur(photoUrl, editValue)
          break
        case 'Grayscale':
          this.#updateGrayscale(photoUrl, editValue)
          break
        default:
          throw new Error('Editing method not specified')
      }
    } catch (error) {
      console.error(error)
    }
  }

    #updateExposure (photoUrl, ExposureValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `brightness(${ExposureValue})`

      return photo
    }

    #updateSaturation (photoUrl, saturationValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `saturation(${saturationValue})`

      return photo
    }

    #updateOpacity (photoUrl, opacityValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `opacity(${opacityValue})`

      return photo
    }

    #updateSepia (photoUrl, sepiaValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `sepia(${sepiaValue})`

      return photo
    }

    #updateContrast (photoUrl, contrastValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `contrast(${contrastValue})`

      return photo
    }

    #updateBlur (photoUrl, blurValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `blur(${blurValue})`

      return photo
    }

    #updateGrayscale (photoUrl, grayscaleValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `grayscale(${grayscaleValue})`

      return photo
    }
  }

