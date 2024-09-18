import { photoCreator } from "../utils/photo"

// Class that handles photo editing logic.

// Canvas api (built in browser api)? Or apply css filters?

/** 
 * Class to edit photos.
 * 
 */
class PhotoEdit {
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

    #updateExposure (photoUrl, newExposureValue) {
      const photo = photoCreator.createNewPhoto(photoUrl)
      photo.style.filter = `brightness(${newExposureValue})`

      return photo
    }

    #updateSaturation (photoUrl, saturationValue) {

    }

    #updateOpacity (photoUrl, opacityValue) {

    }

    #updateSepia (photoUrl, sepiaValue) {

    }

    #updateContrast (photoUrl, contrastValue) {

    }

    #updateBlur (photoUrl, blurValue) {

    }

    #updateGrayscale (photoUrl, grayscaleValue) {

    }
  }

