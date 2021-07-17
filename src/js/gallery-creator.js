const createGallery = (items) => {
  return items
    .map(({ preview, original, description }) => {
        
      const liEl = document.createElement('li')
      const imgEl = document.createElement('img');
      const aEl = document.createElement('a');

      aEl.append(imgEl);
      liEl.append(aEl);

      liEl.classList.add("gallery__item");
      imgEl.classList.add("gallery__image");
      aEl.classList.add("gallery__link");
      aEl.href = `${original}`;
      imgEl.src = `${preview}`;
      imgEl.alt = `${description}`;
      imgEl.dataset.source = `${original}`;
      imgEl.loading = "lazy";

      return liEl;
  });
};

/* вариант под innerHTML*/
// export const createGallery = (items) => {
//   return items
//     .map(({ preview, original, description }) => {
//         return  `
//           <li class="gallery__item">
//             <a
//               class="gallery__link"
//               href="${original}"
//               >
//               <img
//                 class="gallery__image"
//                 loading="lazy"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//               />
//             </a>
//           </li>
//         `;
//       })
//     .join('');
// };

const createGalleryTitle = ({ galleryTitle, titleColor }) => {
  const titleEl = document.createElement('h2');
  titleEl.textContent = galleryTitle;
  titleEl.style.color = titleColor;
  return titleEl;
};

const finalGalleryCreator = (refs, items) => {
  refs.gallerySection.prepend(createGalleryTitle(refs));
  refs.gallery.append(...createGallery(items));
  // list.innerHTML = createGallery(galleryItems);
};

export default finalGalleryCreator;