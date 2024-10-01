import { PhotoAssistant } from '../../../lib/photoAssistant/photoAssistant.js'

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img')
  const filterImageForm = document.getElementById('filter-image-form')
  const galleryForm = document.getElementById('gallery-form')
  const photoAssistant = new PhotoAssistant()

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (event) => {
      photoAssistant.addImage(images[i])
      images[i].style.filter = 'opacity(40%)'
    })
  }

  filterImageForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById('choice-menu-container').setAttribute('hidden', '')
    document.getElementById('photo-container').setAttribute('hidden', '')
    document.getElementById('return-to-top').setAttribute('hidden', '')

    photoAssistant.startPhotoFilter()
    photoAssistant.choseFiltersToAdd('grayscale', '200')
    photoAssistant.choseFiltersToAdd('contrast', '120')
    photoAssistant.choseFiltersToAdd('blur', '5')
    photoAssistant.applyChosenFilters()

    const canvasContainer = document.getElementById('canvas-container')
    const canvasId = 'photoCanvas'

    photoAssistant.drawPhotosToCanvas(canvasContainer, canvasId)
  })

  galleryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById('choice-menu-container').setAttribute('hidden', '')
    document.getElementById('photo-container').setAttribute('hidden', '')
    document.getElementById('return-to-top').setAttribute('hidden', '')

    const columnBtns = document.getElementsByName('columns')

    // photoAssistant.sortPhotos()

    for (let i = 0; i < columnBtns.length; i ++) {
      if (columnBtns[i].checked) {
        const columns = Number(columnBtns[i].value)

        const galleryContainer = document.getElementById('gallery-container')
        photoAssistant.displayPhotosInGallery(columns, galleryContainer)
      }
    }
  })
})
