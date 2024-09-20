// Starting point of application.

import { PhotoHandler } from "./photoHandler"

const photoForm = document.getElementById('photoUrl-form')

photoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('Photo has been submitted')
  const photoUrl = document.getElementById('photoUrl-input').value
  const editMethod = 'Contrast'
  const editValue = '150%'

  

  const photoHandler = new PhotoHandler()

  photoHandler.addPhoto(editMethod, photoUrl, editValue)
})