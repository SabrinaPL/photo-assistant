import { PhotoAssistantOrchestrator } from '../../../lib/photoAssistant/photoAssistantOrchestrator.js'

// The following code is a simple example of how PhotoAssistant can be used and has also been created for testing purposes.

document.addEventListener('DOMContentLoaded', () => {
  // HTML img elements can be sent to PhotoAssistant by selecting img elements already in the document.
  const images = document.querySelectorAll('img')
  const filterImageForm = document.getElementById('filter-image-form')
  const galleryForm = document.getElementById('gallery-form')

  // Instantiate PhotoAssistant.
  const photoAssistant = new PhotoAssistantOrchestrator()

  // Add event listener to listen to click events on images already in the document to add them to PhotoAssistant.
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', (event) => {
      photoAssistant.saveImage(images[i])
      images[i].style.filter = 'opacity(40%)'
    })
  }

  // Use a submit form to trigger filtering of photos.
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

    // Test code to fetch an image that has been stored in local storage via PhotoAssistant.
    const imgAlt = 'Glico man billboard in Dotonbori in Osaka, Japan'
    photoAssistant.getStoredPhoto(imgAlt)

    const filterValue = filterValueInput.value.toString()

    // Add and apply the filters that have been submitted via the form.
    photoAssistant.chosenFiltersToAdd(filterMethod, filterValue)
    photoAssistant.applyChosenFilters()

    const canvasContainer = document.getElementById('canvas-container')
    const canvasId = 'photoCanvas'

    // Draw the filtered image to a canvas element (to enable saving of the filtered image).
    photoAssistant.drawPhotosToCanvas(canvasContainer, canvasId)
  })

  // Example code of how a grid gallery can be created using PhotoAssistant and how the sorting function can be used.
  galleryForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById('choice-menu-container').setAttribute('hidden', '')
    document.getElementById('photo-container').setAttribute('hidden', '')
    document.getElementById('return-to-top').setAttribute('hidden', '')
    document.querySelector('h2').setAttribute('hidden', '')

    const columnBtns = document.getElementsByName('columns')

    // This is optional, call this method first if you wish for the images to be displayed in the grid gallery in alphabetical order (based on the img alt descriptions).
    photoAssistant.sortPhotos()

    // Display the images in a grid gallery format.
    for (let i = 0; i < columnBtns.length; i ++) {
      if (columnBtns[i].checked) {
        const columns = Number(columnBtns[i].value)

        const galleryContainer = document.getElementById('gallery-container')
        photoAssistant.displayPhotosInGallery(columns, galleryContainer)
      }
    }
  })
})
