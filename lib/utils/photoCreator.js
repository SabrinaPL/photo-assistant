/**
 * Helper class for creating new img elements.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @returns - image element.
 */
export class PhotoCreator {
  /**
   * Method to create new image element.
   *
   * @param {*} imageSrc - the image source.
   * @returns {*} image element.
   */
  createNewPhoto (imageSrc) {
    const newPhoto = document.createElement('img')
    newPhoto.src = `${imageSrc}`

    return newPhoto
  }
}

// Create method to store new images in local storage, and also replace them with new images of the same src if that image is updated (new filter added)?
