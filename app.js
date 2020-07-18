var scores, roundScore, activePlayer;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  var diceValue = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = "dice-" + diceValue + ".png";

  if (diceValue !== 1) {
    roundScore += diceValue;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  } else {
    nextPlayer();
  }
});

document.querySelector('.btn-new').addEventListener('click', function() {
  init();
});

function nextPlayer() {
  document.querySelector('#current-' + activePlayer).textContent = 0;
  activePlayer = (activePlayer === 0 ? 1 : 0);
  roundScore = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
