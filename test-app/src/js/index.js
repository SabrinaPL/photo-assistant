// Starting point of the application.

import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'

const images = document.querySelectorAll('img')
const choiceForm = document.getElementById('choice-menu')
const photoAssistant = new PhotoAssistant()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    photoAssistant.addImage(images[i])
  }
  )
}

choiceForm.addEventListener('submit', (event) => {
  console.log('In btn event listener')
  event.preventDefault()

  document.getElementById('choice-menu').setAttribute('hidden', '')
  document.getElementById('photo-container').setAttribute('hidden', '')

  // Following code is added just for manual testing purposes:
  photoAssistant.filterPhotos('contrast', '150%')
  const columns = 3
  const galleryContainer = document.getElementById('gallery-container')
  photoAssistant.displayPhotosInGallery(columns, galleryContainer)
})
