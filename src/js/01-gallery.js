import { galleryItems } from "./gallery-items.js";
// Change code below this line

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);
const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`);
instance.show();

console.log(galleryItems);
