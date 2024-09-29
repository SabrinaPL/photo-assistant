import { PhotoGallery } from '../lib/photoAssistant/photoGallery'

test('Tests creating a photo gallery on an empty images array expecting images array cannot be null or empty error to be thrown', () => {
  const images = []
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('Images array cannot be null or empty')
})

test('Tests creating a photo gallery with a null images array expecting images array cannot be null or empty error to be thrown', () => {
  const images = null
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('Images array cannot be null or empty')
})

// Tests empty array.

// Tests that an instance of photoGallery is successfully initialized.
