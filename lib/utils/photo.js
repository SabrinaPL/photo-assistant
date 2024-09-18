/**
 * Helper class for creating new img elements.
 * 
 * @returns - image element.
 */
export class photoCreator {
  createNewPhoto (photoUrl) {
    const newPhoto = document.createElement('img')
    newPhoto.src = `${photoUrl}`

    return newPhoto
  }
}