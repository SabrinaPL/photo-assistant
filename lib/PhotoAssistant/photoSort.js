import { EXIF } from 'exif-js'

export class PhotoSort {
  #imagesInOriginalOrder = []
  #imagesReadyForSorting = []
  #sortedImages = []
  #image
  #sortBy

  constructor (image, sortBy) {
    /* if (images === null || images.length === 0) {
      throw new Error('Images array cannot be null or empty')
    } if (typeof (sortBy) !== 'string' || sortBy === null) {
      throw new Error('Invalid string')
    } */

    this.#image = image
    // this.#imagesInOriginalOrder = images
    this.#sortBy = sortBy.toLowerCase
  }

  runPhotoSort () {
    // Loop through the images array and extract metadata for each image.
    // for (let i = 0; i < this.#imagesInOriginalOrder.length; i++) {
    //   this.#extractMetaData(this.#imagesInOriginalOrder[i])
    // }

    this.#extractMetaData(this.#image)

    // Once metadata has been extracted, call upon the sortPhotos method.
    // this.#sortPhotos()

    // return this.#sortedImages
  }

  #sortPhotos () {
    if (this.#sortBy === 'newest') {
      this.#sortByNewestDate()
    } else if (this.#sortBy === 'oldest') {
      this.#sortByOldestDate()
    }
  }

  #sortByNewestDate () {
    // TODO: Add sorting logic
  }

  #sortByOldestDate () {
    // TODO: Add sorting logic
  }

  #extractMetaData (image) {
    console.log('in extractMetaData')
    console.log(image)
    // Use exif-js to extract the metadata.
    const imageMetaData = EXIF.getData(image, function () {
      const imageMetaData = EXIF.getTag(image, 'DateTime')

      console.log(imageMetaData)
    })

    console.log(imageMetaData)

    // Create objects with the image url connected to the metadata, add those to an array for sorting later.

    this.#imagesReadyForSorting.push(imageReadyForSorting)
  }
}
