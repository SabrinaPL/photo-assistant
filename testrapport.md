# Test report

The PhotoAssistant library has been tested with several automatic unit tests (Jest) and also in a simple test application (found in the test-app folder).

## System version

v 1.0.0

## System test

Manual testing (expected result) and automatic unit testing.

## Testing environment

Manual testing done in the test-app (run in the browser with vite) and automatic testing done with Jest.

## Test cases and result

Manual test in test-app by adding contrast of 150% to images and displaying them in a grid gallery of 3 columns. Test passed with expected result: images are displayed with the correct contrast and in the correct number of columns.

![Gallery display and contrast test](./test/test-images/gallery-contrast-test.png)

![Gallery display and contrast test](./test/test-images/gallery-contrast-test2.png)

--------------------------------------------

### Test

Manual testing of extracting image metadata in the photoSorting class.

### Expected result

The metadata of the image is extracted and displayed in the console.

### Test result

Failed.

### Test comments

At first metadata was attempted to be extracted using the exif npm package, but the package was not compatible with the browser environment so the metadata couldn't be extracted as expected. For the second attempt the exif-js package (designed for a browser environment) was used to attempt to extract the metadata, which also failed. The first issue was that the metadata I was trying to extract (date and time of image creation) did not exist in the image itself (I tested this by uploading the image to an external site for image metadata extraction). After testing the extract metadata function with a different image (that I knew had the metadata I was after) it turned out that there was an unresolved bug in the exif-js package (a variable that hasn't been properly defined). I then decided on scrapping the PhotoSorting class from the library all together. It's a feature that isn't essential for the library and can be added later on.

--------------------------------------------

Manual testing of the photoCanvasCreator. Test failed: the canvas was not created and the image was not drawn on the canvas as expected.

After debugging the code and solving the issue, the test passed with the expected result: the image was drawn on the canvas with the same filter effect applied to it as the CSS filtered image (150% added contrast).

### Before

![Original image without filter effect](./test-app/src/images/nara.jpg)

Original image without filter effect.

### After

![Canvas drawn image with filter effect](./test/test-images/nara-filtered.png)

Canvas drawn image with filter effect.

--------------------------------------------

Unit testing of photoFilter and photoGallery. Tests all passed with expected result:

![Unit testing of photoFilter and photoGallery](./test/test-images/filter-gallery-unit-tests.png)

## Points of improvement

## Test analysis
