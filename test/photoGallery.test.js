/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
import { PhotoGallery } from '../lib/photoAssistant/photoGallery'

test('Tests creating a photo gallery on an empty images array expecting no images have been selected for gallery display error to be thrown', () => {
  const images = []
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('No images have been selected for gallery display')
})

test('Tests creating a photo gallery with a null images array expecting no images have been selected for gallery display error to be thrown', () => {
  const images = null
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('No images have been selected for gallery display')
})

test('Tests creating a photo gallery with an undefined images array expecting no images have been selected for gallery display error to be thrown', () => {
  const images = undefined
  const columns = 2

  expect(() => new PhotoGallery(images, columns)).toThrow('No images have been selected for gallery display')
})


