// first test
export function onOpenLightbox({lightbox, lightboxImage}) {
  const activeGalleryImgEl = document.activeElement.firstElementChild;

  if (!activeGalleryImgEl.classList.contains("gallery__image")) {
    return;
  };

  lightbox.classList.add('is-open');
  lightboxImage.src = `${activeGalleryImgEl.dataset.source}`;
  lightboxImage.alt = `${activeGalleryImgEl.alt}`;
  
  document.body.style.overflow = "hidden"; // остановка скролла под модальным окном
  document.body.style.height = "100wh"; // остановка скролла под модальным окном
};

export function onCloseLightbox({ lightboxImage, lightbox}) {
  lightboxImage.src = "";
  lightboxImage.alt = "";

  lightbox.classList.remove('is-open');

  document.body.style.overflow = "auto"; // запуск скролла после закрытия модального окна
  document.body.style.height = "auto"; // запуск скролла после закрытия модального окна
};

export function lightboxImageRight({lightboxImage}, items) {
  const currentImgElIndex = items.indexOf(items.find(item => item.original === lightboxImage.src));

  let nextImgEl = {};

  currentImgElIndex === items.length - 1 ?
    nextImgEl = items[0] :
    nextImgEl = items[currentImgElIndex + 1];

  lightboxImage.src = `${nextImgEl.original}`;
  lightboxImage.alt = `${nextImgEl.description}`;
};

export function lightboxImageLeft({lightboxImage}, items) {
const currentImgElIndex = items.indexOf(items.find(item => item.original === lightboxImage.src));
  let previousImgEl = {};

  currentImgElIndex === 0 ?
    previousImgEl = items[items.length - 1] :
    previousImgEl = items[currentImgElIndex - 1];

  lightboxImage.src = `${previousImgEl.original}`;
  lightboxImage.alt = `${previousImgEl.description}`;
};

export function onLightboxImageTurn(refs, items) {
  if (refs.xMousePosition > (window.innerWidth / 2)) {
    lightboxImageRight(refs, items);
  } else {
    lightboxImageLeft(refs, items);
  };
};