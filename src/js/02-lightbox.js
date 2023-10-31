import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

const forMap = galleryItems.map(
  (ImgItems) => `<li class="gallery__item">
        <a class="gallery__link"  href="large-image.jpg">
          <img
            class="gallery__image"
            src="${ImgItems.preview}"
            data-source="${ImgItems.original}"
            alt="${ImgItems.description}"
          />
        </a>
      </li>`
);

ulGallery.insertAdjacentHTML("beforeend", forMap.join(""));

ulGallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const { target } = event;

  if (!target.classList.contains("gallery__image")) {
    return;
  }
}
