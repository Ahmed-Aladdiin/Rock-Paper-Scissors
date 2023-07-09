let result = '';
let score = JSON.parse(sessionStorage.getItem('score')) || [0,0,0];

window.addEventListener('load', ()=>renderScore());

document.querySelectorAll('.gestures').forEach(element => element.addEventListener('click', ()=>runGame(element.id)));
document.querySelector('#reset-button').addEventListener('click', ()=> supReset());

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
  sessionStorage.setItem('score', JSON.stringify(score));
  console.log(sessionStorage);
  renderChoices(playerChoice,pcChoice);
  renderScore();
}

function renderScore() {
  const scoreList = document.querySelectorAll('.score-points');
  scoreList.forEach((element, index) => {
    element.innerHTML = score[index];
  });
}

function renderChoices(playerChoice, pcChoice) {
  document.querySelector('#playersChoices').innerHTML = `Your choice: <img src='imgs/${playerChoice}-up-64.png' id="playerChoice"><img src="imgs/${pcChoice}-up-64.png" id="pcChoice">:PC choice`;
}

let I ;

function supReset() {
  let timer = 5;
  document.querySelector('#reset-sec').innerHTML = `Are you sure you want to reset the score ?<span id='reset-timer'>${timer--}</span> <button id='yes-button'>Yes</button>`;
  document.querySelector('#yes-button').addEventListener('click', () => reset());

  I = setInterval(() => {
    if(timer < 1)
    {
      returnResetButton();
      return;
    }
    document.querySelector('#reset-timer').innerHTML = ` ${timer} `;
    timer--;
  }, 1000);
}

function reset() {
  score = [0,0,0];
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#playersChoices').innerHTML = '';
  sessionStorage.setItem('score', JSON.stringify(score));
  renderScore();
  returnResetButton();
}

function returnResetButton () {
  document.querySelector('#reset-sec').innerHTML = `<button id="reset-button">Reset Score</button>`;
  document.querySelector('#reset-button').addEventListener('click', ()=> supReset());
  clearInterval(I);
}