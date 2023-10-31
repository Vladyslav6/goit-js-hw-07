import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
ulGallery.insertAdjacentHTML("beforeend", itemsMarkup);

// rendered items
function createGalleryItemsMarkup(items) {
  return items

    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// const ulGallery = document.querySelector(".gallery");

// const forMap = galleryItems.map(
//   (ImgItems) => `<li class="gallery__item">
//    <a class="gallery__link" href="${ImgItems.original}>
//       <img class="gallery__image" src="${ImgItems.preview}"  alt="${ImgItems.description}" />
//    </a>
// </li>`
// );

// ulGallery.insertAdjacentHTML("beforeend", forMap.join(""));

// ulGallery.addEventListener("click", onClick);

// function onClick(event) {
//   //   event.preventDefault();
//   const { target } = event;

//   if (!target.classList.contains("gallery__image")) {
//     return;
//   }
// }

// const ModalBox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
