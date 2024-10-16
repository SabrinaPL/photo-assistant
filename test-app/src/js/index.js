import { PhotoAssistantOrchestrator } from '../../../lib/photoAssistant/photoAssistantOrchestrator.js'

// Add comments to explain the demo code:

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img')
  const filterImageForm = document.getElementById('filter-image-form')
  const galleryForm = document.getElementById('gallery-form')
  const photoAssistant = new PhotoAssistantOrchestrator()

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (event) => {
      photoAssistant.saveImage(images[i])
      images[i].style.filter = 'opacity(40%)'
    })
  }

  filterImageForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById('choice-menu-container').setAttribute('hidden', '')
    document.getElementById('photo-container').setAttribute('hidden', '')
    document.getElementById('return-to-top').setAttribute('hidden', '')
    document.querySelector('h2').setAttribute('hidden', '')

    const filterBtns = document.getElementsByName('filter')
    const filterValueInput = document.getElementById('filterValue')
    
    let filterMethod = ''

    for (let i = 0; i < filterBtns.length; i ++) {
      if (filterBtns[i].checked) {
        filterMethod = filterBtns[i].value.toString()
      }
    }

    const imgAlt = 'Glico man billboard in Dotonbori in Osaka, Japan'
    photoAssistant.getStoredPhoto(imgAlt)

    const filterValue = filterValueInput.value.toString()

    photoAssistant.chosenFiltersToAdd(filterMethod, filterValue)
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
    document.querySelector('h2').setAttribute('hidden', '')

    const columnBtns = document.getElementsByName('columns')

    photoAssistant.sortPhotos()

    for (let i = 0; i < columnBtns.length; i ++) {
      if (columnBtns[i].checked) {
        const columns = Number(columnBtns[i].value)

        const galleryContainer = document.getElementById('gallery-container')
        photoAssistant.displayPhotosInGallery(columns, galleryContainer)
      }
    }
  })
})
