/**
 * Class to sort photos alphabetically based on image alt description.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
export class PhotoSort {
  #imagesToBeSorted = []
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

    // new strategy, instead of using localeCompare-method:
    // extract the alt descriptions from each img element
    // use toSorted()-method to sort the alt descriptions 
    // map through the original array to find the img elements corresponding to the alt, then push the img elements into the sortedArray in the correct order?

    /*
    for (let i = 0; i < this.#imagesToBeSorted.length; i++) {
      const currentAlt = this.#imagesToBeSorted[i].alt

      for (let j = i + 1; j < this.#imagesToBeSorted.length; j++) {
        const altToCompare = this.#imagesToBeSorted[j].alt

        const comparisonResult = currentAlt.localeCompare(altToCompare)

        if (comparisonResult > 0) {

        }
      } 
    } */
  }
}