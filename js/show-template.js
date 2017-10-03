export default (screen) => {
  const mainElement = document.querySelector(`.main`);
  mainElement.parentNode.replaceChild(screen, mainElement);
};
