import { PhotoCreator } from '../utils/photo.js'

/** 
 * Class to edit photos.
 * 
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * 
 */
export class PhotoEdit {

  // Create another entry point function? From that function, invoke the validateInput method and applyEditMethod? To adhere to the avoid nestling principle of clean code?

  applyEditMethod (editMethod, photoUrl, editValue) {
    console.log('Checking photo url in applyEditMethod ' + photoUrl)

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
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `brightness(${ExposureValue})`

      return photo
    }

    #updateSaturation (photoUrl, saturationValue) {
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `saturation(${saturationValue})`

      return photo
    }

    #updateOpacity (photoUrl, opacityValue) {
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `opacity(${opacityValue})`

      return photo
    }

    #updateSepia (photoUrl, sepiaValue) {
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `sepia(${sepiaValue})`

      return photo
    }

    #updateContrast (photoUrl, contrastValue) {
      console.log('Checking photoUrl in updateContrast method ' + photoUrl)

      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)

      console.log(photo)

      photo.style.filter = `contrast(${contrastValue})`

      console.log(photo)

      return photo
    }

    #updateBlur (photoUrl, blurValue) {
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `blur(${blurValue})`

      return photo
    }

    #updateGrayscale (photoUrl, grayscaleValue) {
      const photoCreator = new PhotoCreator()
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `grayscale(${grayscaleValue})`

      return photo
    }
  }

