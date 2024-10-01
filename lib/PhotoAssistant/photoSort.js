/**
 * Class to sort photos alphabetically based on image alt description.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoSort {
  #imagesToBeSorted = []
  #imageAlts = []
  #sortedImages = []

  /** 
   * @param {Array} imagesToBeSorted
   */
  constructor (imagesToBeSorted) {
    if (imagesToBeSorted === null || imagesToBeSorted.length === 0 || !Array.isArray(imagesToBeSorted)) {
      throw new Error('Invalid images array')
    }

    this.#imagesToBeSorted = imagesToBeSorted
  }

  /**
   * Entry point method.
   */
  _runPhotoSorting () {
    this.#sortPhotosByAlphabet()

    if (this.#sortedImages === null || this.#sortedImages.length === 0) {
      throw new Error('There was an error sorting the images')
    }

    return this.#sortedImages
  }

  #sortPhotosByAlphabet () {
    this.#imagesToBeSorted.forEach((image) => {
      const currentAlt = image.alt
      this.#imageAlts.push(currentAlt)
    })

    const sortedAlts = this.#imageAlts.toSorted()

    // Find the HTML img element with a matching alt, push the img elements into the sortedArray in the same order as the sorted alts.
      for (let i = 0; i < this.#imagesToBeSorted.length; i++) {
        const match = this.#imagesToBeSorted.find(image => image.alt === sortedAlts[i])

        this.#sortedImages.push(match)
      }
    }
  }
