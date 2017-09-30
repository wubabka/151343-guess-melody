// import welcome from './welcome-template';
// import artist from './artist-template';
// import genre from './genre-template';
// import result from './result-template';

// (function () {
//   const CODE_ARROW_LEFT = 37;
//   const CODE_ARROW_RIGHT = 39;
//   const CODE_ALT = 18;

//   const slides = [
//     welcome,
//     artist,
//     genre,
//     result
//   ];

//   let current = null;

//   const selectSlide = (index) => {
//     current = index;
//     const mainElement = document.querySelector(`.main`);
//     mainElement.parentNode.replaceChild(slides[index], mainElement);
//   };

//   document.onkeydown = (evt) => {
//     switch (evt.keyCode) {
//       case CODE_ALT && CODE_ARROW_LEFT:
//         if (current > 0) {
//           current--;
//         }
//         break;
//       case CODE_ALT && CODE_ARROW_RIGHT:
//         if (current < slides.length - 1) {
//           current++;
//         }
//         break;
//     }
//     selectSlide(current);
//   };

//   selectSlide(0);
// })();

import getSlide from './show-template';
getSlide();
