// Starting point of the application.

import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'

const images = document.querySelectorAll('img')
const photoAssistant = new PhotoAssistant()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoAssistant.addImage(images[i])
  }
  )
}

// Added for testing.
// Add another event listener that listens to form submit event.
// const filterMethod = 'Contrast'
// const filterValue = '150%'

// photoAssistant.filterPhotos(filterMethod, filterValue)
