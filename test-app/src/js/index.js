// Starting point of application.

import { PhotoHandler } from "./photoHandler"

const images = document.querySelectorAll('img')

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', (event) => {
    console.log('Image has been clicked')
    console.log(images[i].src)

    const photo = images[i]
    const editMethod = 'Contrast'
    const editValue = '130%'

    const photoHandler = new PhotoHandler()
    photoHandler.addPhoto(editMethod, photo, editValue)
  }
  )
}
