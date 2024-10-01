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

  constructor (imagesToBeSorted) {
    if (imagesToBeSorted === null || imagesToBeSorted.length === 0 || !Array.isArray(imagesToBeSorted)) {
      throw new Error('Invalid images array')
    }

    this.#imagesToBeSorted = imagesToBeSorted
  }

  _runPhotoSorting () {
    this.#sortPhotosByAlphabet()
  }

  #sortPhotosByAlphabet() {
    this.#imagesToBeSorted.forEach((image) => {
      const currentAlt = image.alt
      this.#imageAlts.push(currentAlt)
    })

    // Sort the alts.
    const sortedAlts = this.#imageAlts.toSorted()

    // Find the HTML img element with a matching alt, push the img elements into the sortedArray in the same order as the sorted alts.
      for (let i = 0; i < this.#imagesToBeSorted.length; i++) {
        const match = this.#imagesToBeSorted.find(image => image.alt === sortedAlts[i])

        this.#sortedImages.push(match)
      }
    }
  }
