/**
 * Helper class for creating new img elements.
 *
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 *
 * @returns - image element.
 */
export class PhotoCreator {
  /**
   * Method to create new image element.
   *
   * @param {*} photoUrl
   *
   * @returns - image element.
   */
  createNewPhoto (photoUrl) {
    const newPhoto = document.createElement('img')
    newPhoto.src = `${photoUrl}`

    return newPhoto
  }
}
