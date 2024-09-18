// Class that handles photo editing logic.

// Canvas api (built in browser api)?

// Add functions to manipulate exposure, saturation, transparency etc of a photo. Use switch-statement to check which function should be called.


/** 
 * Class to edit photos.
 * 
 */
class PhotoEdit {
  #photo
  #editMethod
  #editValue

  constructor(photo, editMethod, editValue) {
    this.#photo = photo
    this.#editMethod = editMethod
    this.#editValue = editValue
  }

  #applyEditMethod () {
    try {
      switch (this.#editMethod) {
        case 'Exposure':
          this.#updateExposure()
          break
        case 'Saturation':
          this.#updateSaturation()
          break
        case 'Transparency':
          this.#updateTransparency()
          break
        default:
          throw new Error('Editing method not specified')
      }
    } catch (error) {
      console.error(error)
    }
  }

    #updateExposure () {

    }

    #updateSaturation () {

    }

    #updateTransparency () {

    }
  }

