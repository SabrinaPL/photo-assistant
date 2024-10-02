/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
import { PhotoSort } from '../lib/photoAssistant/photoSort'

test('Tests instantiating Photo Sort with an empty images array expecting invalid images array error to be thrown', () => {
  const imagesToBeSorted = []
  
  expect(() => new PhotoSort(imagesToBeSorted)).toThrow('Invalid images array')
})

test('Tests instantiating Photo Sort with null images array expecting invalid images array error to be thrown', () => {
  const imagesToBeSorted = null
  
  expect(() => new PhotoSort(imagesToBeSorted)).toThrow('Invalid images array')
})

test('Tests instantiating Photo Sort with wrong type argument expecting invalid images array error to be thrown', () => {
  const imagesToBeSorted = true
  
  expect(() => new PhotoSort(imagesToBeSorted)).toThrow('Invalid images array')
})


