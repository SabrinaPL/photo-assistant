# Photo Assistant

Photo Assistant is a dependency-free library written in vanilla JavaScript that provides simple photo editing and photo gallery displaying of HTML img elements. It also stores image urls in local storage for easy access and retrieval and offers drawing of images on a canvas element.

Photo Assistant's USP (unique selling point) is that it offers all of these features within the same library, making it useful for a range of applications handling images such as photography portfolio websites, blogs, social media platforms etc. It is also lightweight and easy to use.

## Installation guide

To install Photo Assistant use the following command:

```bash
npm install photo-assistant
```

## Usage guide

To use Photo Assistant, import the library into your project:

```javascript
import { PhotoAssistant } from 'photo-assistant'
```

Then, create a new instance of the PhotoAssistant class:

```javascript
const photoAssistant = new PhotoAssistant()
```

### Edit photos by adding filters

### Draw images on a canvas element

### Display photos in a grid gallery

### Sort photos by alphabetical order based on img alt

### Store images in and retrieve images from local storage

## Test application

A test application is included in the library to demonstrate the features of Photo Assistant. To run the test application, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

## Unit tests

Unit tests (Jest) are included in the library to test the features of Photo Assistant. To run the unit tests, clone the repository and run the following commands:

```bash
npm install
npm run test
```

## Bug reports

If you find a bug in the library, please open an issue on the GitHub repository to report it.

## Contributing

If you would like to contribute to the library, please open a pull request on the GitHub repository.

## Credits

This library was created by Sabrina Prichard-Lybeck.

### Images

All images in the test application are owned by the author of this library (© Prichard Photography) and are not to be used without permission.

## License

This library is licensed under the MIT license.
