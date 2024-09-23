// Starting point of the application.

import { PhotoHandler } from './photoHandler.js'

const images = document.querySelectorAll('img')

const photoHandler = new PhotoHandler()

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')

    photoHandler.addClickedImagesToArray(images[i])

    const photo = images[i]
    const filterMethod = 'Contrast'
    const filterValue = '150%'

    photoHandler.addFilter(filterMethod, photo, filterValue)
  }
  )
}
