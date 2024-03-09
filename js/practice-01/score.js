const scoreCalculator = (win, draw, loss) => {
  return win * 3 + draw * 1 + loss * 0;
};

score = scoreCalculator(5, 0, 2);
console.log(score);
