# Test report

The PhotoAssistant library has been tested with several automatic unit tests (Jest) and also in a simple test application (found in the test-app folder).

## System version

v 1.0.0

## System test

Manual testing (expected result) and automatic unit testing.

## Testing environment

Manual testing done in the test-app (run in the browser with vite) and automatic testing done with Jest.

## Test cases and result

Date:

19th of September 2024

Test:

Manual testing of PhotoFilter class in test-app testing environment by adding contrast of 150% to a newly created img element and attempting to display it in the browser.

Expected result:

The filter effect is added to the img element and the image is displayed in the browser.

Test result:

Partly failed: the filter effect was added to the img element but the image was not displayed in the browser.

Test comments:

Need to update the logic to append the img element to the DOM in order to display the image in the browser.

--------------------------------------------

Date:

20th of September 2024

Test:

Manual testing of PhotoFilter class in test-app testing environment by adding contrast of 150% to image (local image accessed by local image source) and displaying it in the browser.

Expected result:

The filter effect is added to the image and the image is displayed in the browser.

Test result:

Passed with expected result.

Test:

Manual testing of PhotoFilter class in test-app testing environment by adding contrast of 150% to image (external image accessed by external image url) and displaying it in the browser.

Expected result:

The filter effect is added to the image and the image is displayed in the browser.

Test result:

Failed.

Test comments:

The external image was blocked due to CORS policy. Considered the options to either setup a proxy server or find an image hosting service that allows CORS requests, if the library is to be used with external images. The first option of setting up a proxy server was scrapped due to the time limit of this project and complexity. The second option was explored by testing image urls from different image hosting services, all with the same result. Finally decided on redesigning the library to handle image elements instead of image urls, as this would allow editing and displaying of images already in the DOM (which would not be blocked by CORS policy).

--------------------------------------------

Date:

20th of September 2024

Test:

Manual testing of PhotoFilter class in test-app testing environment by adding contrast of 150% to image (added event listener in test-app that listens to click on img elements which triggers the addImage method in the orchestrating PhotoAssistant class of the library and sends the img element to the method as an argument) and displaying it in the browser.

Expected result:

The filter effect is added to the image and the image is displayed in the browser.

Test result:

Passed with expected result.

--------------------------------------------

Date:

27th of September 2024

Test:

Testing in the test-app environment of photo storage and retrieval via the orchestrating PhotoAssistant class.

Expected result:

Images are successfully stored in local storage and new img element (constructed with original img src) is returned.

Test result:

Passed with expected result.

--------------------------------------------

Date:

27th of September 2024

Test:

Manual test in test-app testing environment by first adding contrast of 150% to images and displaying them in a grid gallery of 3 columns.

Expected result:

Images are displayed with the correct contrast and in the correct number of columns.

Test result:

Passed with expected result.

![Gallery display and contrast test](./test/test-images/gallery-contrast-test.png)

![Gallery display and contrast test](./test/test-images/gallery-contrast-test2.png)

--------------------------------------------

Date:

28th of September 2024

Test:

Manual testing of extracting image metadata in the photoSorting class.

Expected result:

The metadata of the image is extracted and displayed in the console.

Test result:

Failed.

Test comments:

At first metadata was attempted to be extracted using the exif npm package, but the package was not compatible with the browser environment so the metadata couldn't be extracted as expected. For the second attempt the exif-js package (designed for a browser environment) was used to attempt to extract the metadata, which also failed. The first issue was that the metadata I was trying to extract (date and time of image creation) did not exist in the image itself (I tested this by uploading the image to an external site for image metadata extraction). After testing the extract metadata function with a different image (that I knew had the metadata I was after) it turned out that there was an unresolved bug in the exif-js package (a variable that hasn't been properly defined). I then decided on scrapping the PhotoSorting class from the library all together. It's a feature that isn't essential for the library and can be added later on.

--------------------------------------------

Date:

29th of September 2024

Test:

Manual testing of the photoCanvasCreator. The test was to create a canvas and draw an image on it with a filter effect applied to it (150% added contrast).

Test result:

Failed: the canvas was not created and the image was not drawn on the canvas as expected.

Test comments and result of new tests after debugging:

After debugging the code and solving the issue, the test passed with the expected result: the image was drawn on the canvas with the same filter effect applied to it as the CSS filtered image (150% added contrast).

### Before

![Original image without filter effect](./test-app/src/images/nara.jpg)

Original image without filter effect.

### After

![Canvas drawn image with filter effect](./test/test-images/nara-filtered.png)

Canvas drawn image with filter effect.

Test:

Manual testing of adding remaining filter effects (brightness, grayscale, blur, sepia, saturation, opacity) to image drawn on canvas:

![Canvas drawn images with filter effect](./test/test-images/photoAssistantFilters.jpg)

Expected result:

All filter effects are applied to the image drawn on the canvas.

Test results:

Nearly all tests passed, two tests failed: opacity and saturation.

Brightness, grayscale, blur, sepia and contrast all passed with expected results. Opacity effect didn't show at first render of the canvas, but after viewing the drawn image in another tab it was visible. Saturation effect didn't show at all.

Test comments:

Need to investigate why the saturation effect didn't show at all and why the opacity effect didn't show at first render of the canvas.

--------------------------------------------

Date:

29th of September 2024

Test:

Unit testing of photoFilter and photoGallery.

Expected result:

For all tests to pass with expected result.

Test result:

All tests passed with expected result:

![Unit testing of photoFilter and photoGallery](./test/test-images/filter-gallery-unit-tests.png)

## Points of improvement

## Test analysis
