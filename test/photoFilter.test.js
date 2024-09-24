import { PhotoFilter } from '../lib/photoAssistant/photoFilter.js'

test('Tests filter method input of incorrect type', () => {
  const filterMethod = 48
  const filterValue = '80%'

  expect(() => new PhotoFilter(filterMethod, filterValue)).toThrow('Invalid string')
})

test('Tests filter value input of incorrect type', () => {
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

test('Tests filtering an invalid image', () => {
  const image = null
  const filterMethod = 'saturation'
  const filterValue = '50%'

  const photoFilter = new PhotoFilter(filterMethod, filterValue)

  expect(() => photoFilter.runPhotoFilter(image)).toThrow('Invalid image')
})
