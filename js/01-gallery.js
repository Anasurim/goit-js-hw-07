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

  const modalImgMarkup = `<img
  class="gallery__image"
  src="${e.target.dataset.source}"
  />`;
  const instance = basicLightbox.create(modalImgMarkup);

  instance.show();

  if (instance.visible()) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      } else {
        window.removeEventListener("keydown", () => {
          if (e.code === "Escape") {
            instance.close();
          }
        });
      }
    });
  }
};

// {
//     onShow: (instance) =>
//       window.addEventListener("keydown", (e) => {
//         if (e.code === "Escape") {
//           instance.close();
//           console.log("onShow", instance);
//         }
//       }),
//     onClose: (instance) =>
//       window.removeEventListener("keydown", (e) => {
//         if (e.code === "Escape") {
//           instance.close();
//           console.log("onClose", instance);
//         }
//       }),
//   }
