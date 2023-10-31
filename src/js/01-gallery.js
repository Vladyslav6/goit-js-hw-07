import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

  //   console.log(target.getAttribute("data-source"));
  const instance = basicLightbox.create(`
  <img src="${target.getAttribute("data-source")}" width="800" height="600"> `);
  instance.show();

  //   console.log(event.target);
}

// const instance = basicLightbox.create(`
//     <img src="${forMap.original}" width="800" height="600">
// `);

// instance.show();

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const ImagesGalary = document.querySelector(".gallery");
// // console.log(ImagesGalary);

// const forMap = images
//   .map(
//     (Number) =>
//       `<li><img class="list-ul" src="${Number.url}" alt="${Number.alt}"></li>`
//   )
//   .join("");
// ImagesGalary.insertAdjacentHTML("beforeend", forMap);
