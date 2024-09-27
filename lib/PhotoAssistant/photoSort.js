import { ExifImage } from 'exif'

export class PhotoSort {
  #sortedImages = []
  #imageSrc
  #sortBy

  constructor (image) {
    // TODO: add error handling and type validation.

    this.#imageSrc = image.src
  }

  runPhotoSorting (sortBy) {
    // TODO: add error handling and type validation.

    this.#sortBy = sortBy.toLowerCase()

    if (sortBy === 'newest') {
      this.#sortByNewestDate()
    } else if (sortBy === 'oldest') {
      this.#sortByOldestDate()
    }

    return this.#sortedImages
  }

  #extractMetadata () {

  }

  #sortByNewestDate () {
    // TODO: Add sorting logic
  }

  #sortByOldestDate () {
    // TODO: Add sorting logic
  }
}
