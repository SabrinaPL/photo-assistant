import { PhotoEdit } from "../../../lib/PhotoAssistant/PhotoEdit"

export class PhotoHandler {
  /** 
   * Method to add edited photo to the DOM for display.
   * 
   */
  addPhoto(editMethod, photoUrl, editValue) {
    const photoEdit = new PhotoEdit()

    const editedPhoto = photoEdit.editPhoto(editMethod, photoUrl, editValue)

    console.log('Edited photo: ' + editedPhoto)
  }
}