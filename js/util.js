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

const PLAYER_ANSWERS = [10, 12, 11, 13];
const STAT = {
  score: 10,
  note: 3,
  time: 200
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

const getResult = (playerAnswers, stat) => {
  const compareNumeric = (b, a) => {
    return a - b;
  };

  playerAnswers.sort(compareNumeric);

  let REVERSE__ANSWERS = playerAnswers.reverse();

  const i = REVERSE__ANSWERS.indexOf(10) + 1;
  const t = playerAnswers.length;
  const n = (i / t) * 100;

  if (ANSWER_VALUES.wrong) {
    playerAnswers.push(0);
  }

  if (LEVEL_COUNT) {
    return `Вы заняли ${i}-ое место из ${t} игроков. Это лучше чем у ${n}% игроков`;
  }

  if (LEVEL_COUNT && stat > 300) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (LIVES_COUNT < 1) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  return 1;
};

// let timer = 5;

// let interval = setInterval(() => {
//   timer--;
//   if (timer === 0) {
//     clearInterval(interval);
//     return `Вы проиграли`;
//   }
// }, 1000);

export {
  ANSWER_VALUES,
  BONUSES_COST,
  getAnswerValue,
  calculateStatistic,
  LEVEL_COUNT,
  LIVES_COUNT,
  PLAYER_ANSWERS,
  STAT,
  getResult
};
