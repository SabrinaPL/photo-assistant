// Starting point of the application.

import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'

const images = document.querySelectorAll('img')
const photoAssistant = new PhotoAssistant()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoAssistant.addImage(images[i])

    // Added for testing.
    const filterMethod = 'Contrast'
    const filterValue = '150%'

    photoAssistant.filterPhotos(filterMethod, filterValue)

    // Testing.
    // const photoFilter = new PhotoFilter(filterMethod, filterValue)
    // photoFilter.runPhotoFilter('https://upcdn.io/W142hJk/raw/demo/4kK8CPmH6V.jpg')

    // photoAssistant.filterPhotos(filterMethod, filterValue)

    // Testing.
    // photoHandler.saveImageToStorage(images[i])
    // photoHandler.getImageFromStorage(images[i])
  }
  )
}

/* const galleryForm = document.getElementById('gallery')
galleryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  photoHandler.displayInGallery()
}) */
