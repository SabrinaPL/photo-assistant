/**
 * @author Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 1.0.0
 */
import { PhotoFilter } from '../lib/photoAssistant/photoFilter.js'

test('Tests filter method input of incorrect type expecting invalid string error to be thrown', () => {
  const filterMethod = 48
  const filterValue = '80%'

  expect(() => new PhotoFilter(filterMethod, filterValue)).toThrow('Invalid string')
})

test('Tests filter value input of incorrect type expecting invalid string error to be thrown', () => {
  const filterMethod = 'contrast'
  const filterValue = false

  expect(() => new PhotoFilter(filterMethod, filterValue)).toThrow('Invalid string')
})

test('Tests filter method and filter value input of correct type', () => {
  const filterMethod = 'contrast'
  const filterValue = '80%'

  const photoFilter = new PhotoFilter(filterMethod, filterValue)

  expect(photoFilter).toBeDefined()
})

test('Tests filtering an invalid image expecting invalid image error to be thrown', () => {
  const image = null
  const filterMethod = 'saturation'
  const filterValue = '50%'

  const photoFilter = new PhotoFilter(filterMethod, filterValue)

  expect(() => photoFilter._runPhotoFilter(image)).toThrow('Invalid image')
})
