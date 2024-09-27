// Starting point of the application.

import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'

const images = document.querySelectorAll('img')
const photoAssistant = new PhotoAssistant()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoAssistant.addImage(images[i])

    // Following code is added just for manual testing purposes:
    photoAssistant.filterPhotos('contrast', '150%')

    const columns = 2
    const galleryContainer = document.getElementById('photo-container')

    photoAssistant.displayPhotosInGallery(columns, galleryContainer)
  }
  )
}

const columns = 2
const galleryContainer = document.getElementById('photo-container')

photoAssistant.displayPhotosInGallery(columns, galleryContainer)

// Add another event listener that listens to form submit event.
