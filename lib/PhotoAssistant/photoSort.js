/**
 * Class to sort photos alphabetically based on image alt description.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoSort {
  #imagesToBeSorted = []
  #imageAlts = []
  #sortedAlts = []
  #sortedImages = []

  /** 
   * @param {Array} imagesToBeSorted - an array of HTML img elements.
   */
  constructor (imagesToBeSorted) {
    if (imagesToBeSorted === null || imagesToBeSorted.length === 0 || !Array.isArray(imagesToBeSorted)) {
      throw new Error('Invalid images array')
    }

    this.#imagesToBeSorted = imagesToBeSorted
  }

  /**
   * Entry point method.
   * 
   * @returns {Array} sortedImages
   */
  _runPhotoSorting () {
    this.#extractAltsFromPhotos()
    this.#sortPhotosByAlphabet()
    this.#matchSortedAltsToImg()

    if (this.#sortedImages === null || this.#sortedImages.length === 0) {
      throw new Error('There was an error sorting the images')
    }

    return this.#sortedImages
  }

  #extractAltsFromPhotos () {
    this.#imagesToBeSorted.forEach((image) => {
      const currentAlt = image.alt
      this.#imageAlts.push(currentAlt)
    })
  }

  #sortPhotosByAlphabet () {
    this.#sortedAlts = this.#imageAlts.toSorted()
  }

  #matchSortedAltsToImg () {
  // Find the HTML img element with a matching alt, push the img elementsinto the sortedArray in the same order as the sorted alts.
    for (let i = 0; i < this.#imagesToBeSorted.length; i++) {
      const match = this.#imagesToBeSorted.find(image => image.alt === this.#sortedAlts[i])
      this.#sortedImages.push(match)
    }
  }
}
