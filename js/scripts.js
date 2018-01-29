// Przycisk NOWA GRA
var newGameBtn = document.getElementById('js-newGameButton');


// Funkcja otwierająca modal
var promptModal = document.querySelector('.promptModal');

function openModal() {
  newGameBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    promptModal.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
      
    setTimeout(function(){
      promptModal.classList.add('show');
     }, 1);
  });
};
openModal()

// Funkcja zamykająca modal
function closeModal() {
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();

      promptModal.classList.remove('show');
      promptModal.style.display = 'none';
      document.querySelector('body').style.overflow = 'hidden';

    });
};
closeModal()
// Przekazywanie wartości z inputa
function inputVal() {
        let name = document.querySelector('.inputName').value;
        return name;
};
function subBtn() {
    const subInput = document.querySelector('.subInput');
    subInput.addEventListener('click', function(e) {
        e.preventDefault();

        promptModal.classList.remove('show');
        promptModal.style.display = 'none';
        newGame();
    });
};
subBtn()

// Przyciski Kamień, Papier, Nożyce 
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
// Wartości początkowe 
var gameState = 'notStarted',
    player = { name: '', score: 0 },
    computer = { score: 0 };
// Wyświetlanie elementów gry
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
// Funckja stanu gry 
function setGameElements() {
	switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
setGameElements();

// Rozpoczęcie gry
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
// Funkcja po uruchomieniu New Game
function newGame() {
    player.name = inputVal();
	if (player.name) {
    	player.score = computer.score = 0;
    	gameState = 'started';
    	setGameElements();

    	playerNameElem.innerHTML = player.name;
		setGamePoints(); 
    }
}
// Wybory gracza (kamien, papier, nozyce)
function playerPick(playerPick) {
	console.log(playerPick);
}
// Losowanie wyboru komputera i wyświetlanie wyniku
var x = Math.random();
Math.floor(Math.random() * 3);

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
    
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}
// Sprawdzanie wygranej i przyznawanie punktów 
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  var winnerIs = 'player';
    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    
    setGamePoints();
    finishedGame(); 
}


function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}  
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
// Zakończenie gry
function finishedGame() {
	if (player.score == 10) {
		gameState = 'ended';
		alert(player.name + ' won the game!');
	} else if (computer.score == 10) {
		gameState = 'ended';
		alert('Computer won!');
	}
	setGameElements();
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

