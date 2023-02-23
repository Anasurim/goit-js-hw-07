import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item"><a class="gallery__link" href="${original}" "><img
            class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
             style="cursor: pointer"
      />
</a></div>`
);

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup.join(""));

galleryRef.onclick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  basicLightbox
    .create(
      `<img
            class="gallery__image"
            src="${e.target.dataset.source}"
        />`
    )
    .show();
};
