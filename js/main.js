(function () {
  const CODE_ARROW_LEFT = 37;
  const CODE_ARROW_RIGHT = 39;
  const CODE_ALT = 18;

  const template = document.getElementById(`templates`);

  const loadTemplate = (templateName) => {
    const content = template.content ? template.content : template;
    return content.querySelector(templateName).cloneNode(true);
  };

  const slides = [
    loadTemplate(`.main--welcome`),
    loadTemplate(`.main--level-artist`),
    loadTemplate(`.main--level-genre`),
    loadTemplate(`.main--result`)
  ];

  let current = null;

  const selectSlide = (index) => {
    current = index;
    const mainElement = document.querySelector(`.main`);
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    switch (evt.keyCode) {
      case CODE_ALT && CODE_ARROW_LEFT:
        if (current > 0) {
          current--;
        }
        break;
      case CODE_ALT && CODE_ARROW_RIGHT:
        if (current < slides.length - 1) {
          current++;
        }
        break;
    }
    selectSlide(current);
  };

  selectSlide(0);
})();
