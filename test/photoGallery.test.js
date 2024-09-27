import { PhotoGallery } from '../lib/photoAssistant/photoGallery'

test('Tests grid template column value of incorrect type', () => {
  const images = []
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('Invalid number')
})

test('Tests creating a photo gallery on an empty images array', () => {
  const images = []
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('Images array cannot be null or empty')
})

test('Tests creating a photo gallery with a null images array', () => {
  const images = null
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('Images array cannot be null or empty')
})

// Tests empty array.

// Tests that an instance of photoGallery is successfully initialized.
