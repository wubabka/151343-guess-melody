import getTemplate from './parse-template';
import showSlide from './show-template';
import artist from './artist-template';

const welcome = getTemplate(`<section class="main main--welcome">
<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
<button class="main-play">Начать игру</button>
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
</p>
</section>`);

// const bindActions = () => {
//   let mainPlay = document.querySelector(`.main-play`);

//   mainPlay.addEventListener(`click`, () => {
//     showSlide(artist);
//   });
// };

// export {welcome, bindActions};

export default welcome;
