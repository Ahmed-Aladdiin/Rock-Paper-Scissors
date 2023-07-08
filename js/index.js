let result = '';
const score = [0,0,0];

window.addEventListener('load', ()=>renderScore());

document.querySelectorAll('.gestures').forEach(element => element.addEventListener('click', ()=>runGame(element.id)));

function genChoice() {
  const randNum = Math.random();
  const choice = (randNum >= 0 && randNum < 1/3) ? 'rock' : (randNum >= 1/3 && randNum < 2/3 ) ? 'paper' : 'scissors';
  return choice;
}

function runGame (playerChoice) {
  const scoreStatus = ['Win', 'Loss', 'Tie'];
  const pcChoice = genChoice();
  console.log(pcChoice);
  if(playerChoice == 'rock')
  {
    if(pcChoice == 'rock')
    {
      score[2]++;
      result = scoreStatus[2];
    }
    else if (pcChoice === 'paper')
    {
      score[1]++;
      result = scoreStatus[1];
    }
    else {
      score[0]++;
      result = scoreStatus[0];
    }
  }
  else if(playerChoice == 'paper')
  {
    if(pcChoice == 'rock')
    {
      score[0]++;
      result = scoreStatus[0];
    }
    else if (pcChoice === 'paper')
    {
      score[2]++;
      result = scoreStatus[2];
    }
    else {
      score[1]++;
      result = scoreStatus[1];
    }
  }
  else if (playerChoice === 'scissors')
  {
    if(pcChoice == 'rock')
    {
      score[1]++;
      result = scoreStatus[1];
    }
    else if (pcChoice === 'paper')
    {
      score[0]++;
      result = scoreStatus[0];
    }
    else {
      score[2]++;
      result = scoreStatus[2];
    }
  }

  document.querySelector('#result').innerHTML = result;
  renderScore();
}

function renderScore() {
  const scoreList = document.querySelectorAll('.score-points');
  scoreList.forEach((element, index) => {
    element.innerHTML = score[index];
  });
}