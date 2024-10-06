/**
 * Class to sort photos alphabetically based on image alt description.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoSort {
  #imagesToBeSorted = []
  #imageAlts = []
  #alphabeticallySortedAlts = []
  #alphabeticallySortedImages = []

  /** 
   * @param {Array} imagesToBeSorted - an array of HTML img elements.
   */
  constructor (imagesToBeSorted) {
    if (imagesToBeSorted === null || imagesToBeSorted.length === 0 || !Array.isArray(imagesToBeSorted)) {
      throw new Error('Invalid images array')
    }

    this.#imagesToBeSorted = imagesToBeSorted
  }

  _runPhotoSorting () {
    this.#extractAltsFromPhotos()
    this.#sortPhotosByAlphabet()
    this.#matchSortedAltsToImg()

    if (this.#alphabeticallySortedImages === null || this.#alphabeticallySortedImages.length === 0) {
      throw new Error('There was an error sorting the images')
    }

    return this.#alphabeticallySortedImages
  }

  #extractAltsFromPhotos () {
    this.#imagesToBeSorted.forEach((image) => {
      const currentAlt = image.alt
      this.#imageAlts.push(currentAlt)
    })
  }

  #sortPhotosByAlphabet () {
    this.#alphabeticallySortedAlts = this.#imageAlts.toSorted()
  }

  #matchSortedAltsToImg () {
    for (let i = 0; i < this.#imagesToBeSorted.length; i++) {
      const match = this.#imagesToBeSorted.find(image => image.alt === this.#alphabeticallySortedAlts[i])
      this.#alphabeticallySortedImages.push(match)
    }
  }
}
