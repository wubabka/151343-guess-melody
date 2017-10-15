import assert from 'assert';
import {
  ANSWER_VALUES,
  getAnswerValue,
  calculateStatistic,
  LEVEL_COUNT,
  LIVES_COUNT,
  PLAYER_ANSWERS,
  getResult
} from './util';

describe(`Game`, () => {
  describe(`Answers`, () => {
    it(`Wrong answer`, () => {
      assert.equal(ANSWER_VALUES.wrong, getAnswerValue(false, 10));
    });

    it(`Correct 10 answers`, () => {
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 31));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 32));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 33));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 34));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 35));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 36));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 37));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 38));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 39));
      assert.equal(ANSWER_VALUES.normal, getAnswerValue(true, 40));
    });

    it(`-1`, () => {
      assert.equal(-1, calculateStatistic(LIVES_COUNT, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

    it(`10`, () => {
      assert.equal(10, calculateStatistic(LIVES_COUNT, LEVEL_COUNT));
    });
  });

  describe(`Statistics`, () => {
    it(`Stat`, () => {
      assert.equal(`Вы заняли 1-ое место из 4 игроков. Это лучше чем у 25% игроков`, getResult(PLAYER_ANSWERS));
    });
  });

  // describe(`Timer`, () => {
  //   it(`Timer down`, () => {
  //     assert.equal(`Вы проиграли`, interval;
  //   });
  // });
});
