import welcome from './welcome-template';
import artist from './artist-template';
import genre from './genre-template';
import result from './result-template';

export default function () {

  const slides = [
    welcome,
    artist,
    genre,
    result
  ];

  const selectSlide = (index) => {
    const mainElement = document.querySelector(`.main`);
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  selectSlide(0);
}

// export default selectSlide;

// export default function (string) {
//   const template = document.createElement(`div`);
//   template.innerHTML = string;
//   return template.firstChild;
// }
