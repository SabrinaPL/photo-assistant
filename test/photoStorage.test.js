/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
import { PhotoStorage } from '../lib/photoAssistant/photoStorage'

test('Tests getting image from storage with an empty image description expecting invalid string error to be thrown', () => {
  const imageDescription = ''

  const photoStorage = new PhotoStorage()

  expect(() => photoStorage._getImage(imageDescription)).toThrow('Invalid string')
})

test('Tests getting image from storage with a null image description expecting invalid string error to be thrown', () => {
  const imageDescription = null

  const photoStorage = new PhotoStorage()

  expect(() => photoStorage._getImage(imageDescription)).toThrow('Invalid string')
})

test('Tests getting image from storage with a undefined image description expecting invalid string error to be thrown', () => {
  const imageDescription = undefined

  const photoStorage = new PhotoStorage()

  expect(() => photoStorage._getImage(imageDescription)).toThrow('Invalid string')
})

test('Tests getting image from storage with an image description of incorrect type expecting invalid string error to be thrown', () => {
  const imageDescription = 200

  const photoStorage = new PhotoStorage()

  expect(() => photoStorage._getImage(imageDescription)).toThrow('Invalid string')
})