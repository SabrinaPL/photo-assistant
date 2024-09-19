import { PhotoEdit } from "../../../lib/PhotoAssistant/PhotoEdit"

export class PhotoHandler {
  /** 
   * Method to add edited photo to the DOM for display.
   * 
   */
  addPhoto(editMethod, photoUrl, editValue) {
    const photoEdit = new PhotoEdit()

    const photo = photoEdit.applyEditMethod(editMethod, photoUrl, editValue)

    console.log('Photo in addPhoto method ' + photo)

    const photoContainer = document.getElementById('photo')
    photoContainer.appendChild(photo)
  }
}