// Starting point of the application.

import { PhotoHandler } from './photoHandler.js'

const images = document.querySelectorAll('img')

const photoHandler = new PhotoHandler()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoHandler.runPhotoHandler(images[i])

    // Added for testing.
    const filterMethod = 'Contrast'
    const filterValue = '150%'

    photoHandler.addFilter(filterMethod, filterValue)
  }
  )
}

/* const galleryForm = document.getElementById('gallery')
galleryForm.addEventListener('submit', (event) => {
  event.preventDefault()
  photoHandler.displayInGallery()
}) */
