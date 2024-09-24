// Starting point of the application.

import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'
import { PhotoHandler } from '../../../lib/photoAssistant/photoHandler.js'

const images = document.querySelectorAll('img')

const photoHandler = new PhotoHandler()
const photoAssistant = new PhotoAssistant()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoHandler.runPhotoHandler(images[i])

    // Added for testing.
    const filterMethod = 'Contrast'
    const filterValue = '150%'

    // photoAssistant.filterPhotos(filterMethod, filterValue)

    // Testing.
    photoHandler.saveImageToStorage(images[i])
    photoHandler.getImageFromStorage(images[i])
  }
  )
}

/* const galleryForm = document.getElementById('gallery')
galleryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  photoHandler.displayInGallery()
}) */
