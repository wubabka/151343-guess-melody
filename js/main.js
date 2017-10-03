import showSlide from './show-template';
import welcome from './welcome-template';
import artist from './artist-template';
import genre from './genre-template';

import bindActions from './bindActions';

showSlide(welcome);
bindActions(`.main-play`, artist);
bindActions(`.main-answer`, genre);
