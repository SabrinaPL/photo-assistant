/**
 * Class to filter photos {HTMLImageElement} by adding a CSS filter.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoFilter {
  #image
  #filterMethod = ''
  #filterValue = ''
  #chosenFilters = []
  #multipleFilters = ''

  _runAddFilters (filterMethod, filterValue) { 
    if (typeof (filterMethod) !== 'string' || typeof (filterValue) !== 'string' || filterMethod === undefined || filterValue === undefined) {
      throw new Error('Invalid string')
    }

    this.#addChosenFilterMethods(filterMethod, filterValue)
  }

  _runApplyFilters (image) {
    if (image === null || image === undefined || image.src.length === 0) {
      throw new Error('Invalid image')
    }

    this.#image = image

    this.#applyFilters()

    if (this.#image.style === null) {
      throw new Error('There was an error applying filters to the image')
    }
  }

  #addChosenFilterMethods (filterMethod, filterValue) {
    const filter = {
      filterMethod,
      filterValue
    }

    this.#chosenFilters.push(filter)
  }

  #applyFilters () {
    if (this.#chosenFilters.length === 0) {
      throw new Error('No filters have been chosen')
    }

    if (this.#chosenFilters.length === 1) {
      this.#runApplySingleFilter()
    } else {
      this.#runApplyMultipleFilters()
    }
  }

  #runApplySingleFilter () {
    this.#filterMethod = this.#chosenFilters[0].filterMethod
    this.#filterValue = this.#chosenFilters[0].filterValue
    this.#singleFilterPhotoManager()
  }

  #runApplyMultipleFilters () {
    this.#chosenFilters.forEach((filter) => {
      this.#filterMethod = filter.filterMethod
      this.#filterValue = filter.filterValue
      this.#constructFilterString()
      this.#addMultipleFilters()
    })
  }

  #constructFilterString () {
    if (this.#filterMethod === 'blur') {
      this.#multipleFilters += `${this.#filterMethod}(${this.#filterValue}px) `
    } else {
      this.#multipleFilters += `${this.#filterMethod}(${this.#filterValue}%) `
    }
  }

  #singleFilterPhotoManager () {
    switch (this.#filterMethod.toLowerCase()) {
      case 'brightness':
        this.#updateBrightness()
        break
      case 'saturate':
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

  #updateBrightness () {
    this.#image.style.filter = `brightness(${this.#filterValue}%)`
  }

  #updateSaturation () {
    this.#image.style.filter = `saturate(${this.#filterValue}%)`
  }

  #updateOpacity () {
    this.#image.style.filter = `opacity(${this.#filterValue}%)`
  }

  #addSepia () {
    this.#image.style.filter = `sepia(${this.#filterValue}%)`
  }

  #updateContrast () {
    this.#image.style.filter = `contrast(${this.#filterValue}%)`
  }

  #addBlur () {
    this.#image.style.filter = `blur(${this.#filterValue}px)`
  }

  #addGrayscale () {
    this.#image.style.filter = `grayscale(${this.#filterValue}%)`
  }

  #addMultipleFilters () {
    this.#image.style.filter = this.#multipleFilters
  }
}
