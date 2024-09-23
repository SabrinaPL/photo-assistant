// Class that handles photo gallery display logic.
export class PhotoGallery {
  #images = []

  constructor (images) {
    this.#images = images
  }

  #createGridGallery () {
    for (let i = 0; i < this.#images; i++) {
    
    }
  }
}

// Grid gallery.
// Flexbox display.
// Animations? Dynamic galleries?
// If-statements or switch to check which kind of gallery should be created.

// Takes an array of photos as argument.

// Loop through the images (urls) in the photo array and create as many image elements (with the helper method from photo.js) as items in the array.
// Based on this info, set up the grid or flexbox layout.
