const LEVEL_COUNT = 10;
const LIVES_COUNT = 3;

const ANSWER_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
};

const BONUSES_COST = {
  [ANSWER_VALUES.correct]: 1,
  [ANSWER_VALUES.wrong]: -2,
  [ANSWER_VALUES.fast]: 2,
  [ANSWER_VALUES.normal]: 1,
};

const getAnswerValue = (isCorrectAnswer, levelTime) => {
  if (!isCorrectAnswer) {
    return ANSWER_VALUES.wrong;
  }
  if (levelTime < 30) {
    return ANSWER_VALUES.fast;
  }
  return levelTime > 30 ? ANSWER_VALUES.normal : ANSWER_VALUES.correct;
};

const calculateStatistic = (state, answers) => {
  if (answers.length < LEVEL_COUNT) {
    return -1;
  }
  if (LEVEL_COUNT && LIVES_COUNT) {
    return 10;
  }

  return 1;
};

export {
  ANSWER_VALUES,
  BONUSES_COST,
  getAnswerValue,
  calculateStatistic,
  LEVEL_COUNT,
  LIVES_COUNT
};
