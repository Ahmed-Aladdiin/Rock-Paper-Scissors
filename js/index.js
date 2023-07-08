function genChoice() {
  const randNum = Math.random();
  const choice = (randNum >= 0 && randNum < 1/3) ? 'rock' : (randNum >= 1/3 && randNum < 2/3 ) ? 'paper' : 'scissors';
  return genChoice;
}
