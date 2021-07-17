import './sass/main.scss';

import { throttle } from 'throttle-debounce';

import {
    galleryItems,
    refs
    }
    from './js/source-refs';

import finalGalleryCreator from './js/gallery-creator';

import {
    onOpenLightbox,
    onCloseLightbox,
    lightboxImageRight,
    lightboxImageLeft,
    onLightboxImageTurn,
    }
    from './js/callbacks';

window.addEventListener('DOMContentLoaded', () => finalGalleryCreator(refs, galleryItems)); //событие при загрузке DOM-дерева
refs.gallery.addEventListener('click',
  (evt) => {
  evt.preventDefault();
  onOpenLightbox(refs);
  }
);
refs.closeLightbox.addEventListener('click',() => onCloseLightbox(refs));
refs.lightboxOverlay.addEventListener('click', onCloseLightboxOverlay);
refs.lightboxImage.addEventListener('mousemove', throttle(500, (evt) => refs.xMousePosition = evt.clientX));
refs.lightboxImage.addEventListener('click', () =>  onLightboxImageTurn(refs, galleryItems));
window.addEventListener('keydown', onKeyPress);

function onCloseLightboxOverlay(evt) {
  if (evt.target !== evt.currentTarget) {
    return;
  };
  onCloseLightbox(refs);
};

function onKeyPress(evt) {
  if(evt.code === "Enter") {
    onOpenLightbox(refs);
  };

  let modalIsOpen = refs.lightbox.classList.contains('is-open');
  
  if (modalIsOpen) {
  //  if (evt.code === "Escape") {
  //   onCloseLightbox(refs);
  // };
  
  // if (evt.code === "ArrowRight") {
  //   lightboxImageRight(refs, galleryItems);
  // };

  // if (evt.code === "ArrowLeft") {
  //   lightboxImageLeft(refs, galleryItems);
  // }; 
    switch (evt.code) {
      case "Escape": 
       onCloseLightbox(refs);
       break;

      case "ArrowRight":
       lightboxImageRight(refs, galleryItems);
       break;

      case "ArrowLeft":
       lightboxImageLeft(refs, galleryItems);
       break;

      default:
       break;
    }
  };
};


console.log("Привіт, світ! Життя брутальне!");
