import showSlide from './show-template';

export default (selector, screen) => {
  let mainPlay = document.querySelector(selector);

  mainPlay.addEventListener(`click`, () => {
    showSlide(screen);
  });
};
