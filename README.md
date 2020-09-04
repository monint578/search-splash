# Search Splash - image search web
This application is built with React & Redux. SASS is used for styling.

Application is deployed using GitHub pages. [Click me to see demo!](https://monint578.github.io/search-splash/)

## ✨ Features
* Data is fetched from [Unsplash.com](https://unsplash.com/documentation) API
* You can search images using search input field
* You can save you favorite search (queries) and use it for searching images later. Saved queries are stored via Redux
* Infinite scroll effect is made using [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
* "Loading" and "No images found" animations are from [Lottie](https://www.lootie.com/)



## 🚀 Building and Running the App

1. ```sh
   npm install
   ```
2. To run locally: 
   ```sh
   npm start
   ```
3. To build for production:
   ```sh
   npm run build
   ```
   ### ❗ Important

   This app is using API Access Key 🔑. To get the Access Key you have to create free account in Unsplash. After that follow:
   1. Create a new  ```.env  ``` file in the project's root directory
   2. Add following line to the file: ``` REACT_APP_API_KEY="YOUR ACCESS KEY" ```

## 🎨 Color Reference

| Color      | Hex                                                                |
| ---------- | ------------------------------------------------------------------ |
| Background | ![#FAFAFA](https://via.placeholder.com/10/fafafa?text=+) `#FAFAFA` |
| Text       | ![#311358](https://via.placeholder.com/10/311358?text=+) `#311358` |
| Primary    | ![#7B36D4](https://via.placeholder.com/10/7b36d4?text=+) `#7B36D4` |
| Accent     | ![#FF9671](https://via.placeholder.com/10/FF9671?text=+) `#FF9671` |
| Delete     | ![#E41366](https://via.placeholder.com/10/e41366?text=+) `#E41366` |
