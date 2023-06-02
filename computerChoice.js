let humanChoice;
let choice = ['rock', 'paper', 'scissor'];
let humanPoints = 0;
let computerPoints = 0;


let playerName;
function getPlayerName(){

playerName = document.querySelector('#nameInputContainer input').value;

if(!playerName){
playerName = 'Human';

	}
document.querySelector('#nameInputContainer').style.display = "none";

document.querySelector('#difficultySystem').style.display = "flex";
document.querySelector('#humanPoints').innerText = `${playerName} points = 0`;
}







let computerChoice;
function getRandomChoice() {
computerChoice = choice[Math.round(Math.random() * 2)];
}





let message = document.getElementById('message');
let humanPointText = document.getElementById('humanPoints');
let computerPointText = document.getElementById('computerPoints');
function gameRules() {
if(humanPoints < 5 && computerPoints < 5){

switch (humanChoice) {

	case 'rock':




if(computerChoice == 'rock'){
addUnfairPointsWhenHardDifficulty();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `it's a tie because both of you chose rock`;
message.style.color = '#ACAD81';
}

else if(computerChoice == 'paper'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerHTML = `duck wins because ${playerName} chose rock and duck chose 'paper'`;
message.style.color = '#AD7979';
}

else if(computerChoice == 'scissor'){
addPointsToHuman();
humanPointText.innerHTML = `${playerName} points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose scissor and ${playerName} chose rock`;
message.style.color = '#7BA8A8';
}

		break;



  case 'paper':



if(computerChoice == 'rock'){
addPointsToHuman();
humanPointText.innerHTML = `${playerName} points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose 'rock' and ${playerName} chose paper`;
message.style.color = '#7BA8A8';
}

else if(computerChoice == 'paper'){
addUnfairPointsWhenHardDifficulty();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `it's a tie because both of you chose paper`;
message.style.color = '#ACAD81';
}

else if(computerChoice == 'scissor'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose paper and duck chose 'scissor'`;
	
message.style.color = '#AD7979';
}

		
		break;


  case 'scissor':



if(computerChoice == 'rock'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose scissor and duck choose rock`;

message.style.color = '#AD7979';
}

else if(computerChoice == 'paper'){
addPointsToHuman();
humanPointText.innerHTML = `${playerName} points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose paper and ${playerName} chose scissor`;
message.style.color = '#7BA8A8';
}

else if(computerChoice == 'scissor'){
addUnfairPointsWhenHardDifficulty();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `it's a tie because both of you chose scissor`;
message.style.color = '#ACAD81';
}

		break;

}
}

else {
document.querySelector('#humanChoiceContainer').style.display = 'none';


const finalTextContainer = document.createElement('div');
finalTextContainer.id = 'finalTextContainer';

const finalText = document.createElement('h1');
finalText.id = 'finalText';

const endingImage = document.createElement('img');
endingImage.id = 'endingImage';

const resetButton = document.createElement('button');
resetButton.innerText = 'Play again';
resetButton.addEventListener('click', () => 
	{
		humanPoints = 0;
		computerPoints =0;
    computerDifficulty = undefined;
		message.innerText = '';
    humanPointText.innerHTML = `${playerName} points = ${computerPoints}`;
    computerPointText.innerHTML = `Duck points = ${computerPoints}`;
    finalText.parentElement.removeChild(finalText);
    endingImage.parentElement.removeChild(endingImage);
		document.querySelector('#difficultySystem').style.display = "flex";
    resetButton.parentElement.removeChild(resetButton);
	}

)


if(humanPoints > computerPoints){
finalText.innerText = 'human won!!!!!.. you saved this planet agaisnt this evil duck...';
endingImage.src = 'images/goodEnding.png';

}
else{
finalText.innerText = 'you got defeated by the evil duck';
endingImage.src = 'images/badEnding.png';
}
document.body.appendChild(finalTextContainer);
finalTextContainer.appendChild(finalText);
finalTextContainer.appendChild(endingImage);
finalTextContainer.appendChild(resetButton);

}

}


function addPointsToHuman(){
switch (computerDifficulty) {
	case 'easy':
		humanPoints += 2;
		break;
	case 'normal':
		humanPoints += 1;
		break;
	case 'hard':
		humanPoints += 0.75;
		break;
	case 'ultraHard':
		humanPoints += 0.50;
		break;
	case 'almostImpossible':
		humanPoints += 0.25;
		break;
	case 'realLife':
		humanPoints += 0.10;
		break;
}
}


function addPointsToComputer(){
switch (computerDifficulty) {
	case 'easy':
		computerPoints += 0.75;
		break;
	case 'normal':
		computerPoints += 1;
		break;
	case 'hard':
		computerPoints += 1.5;
		break;
	case 'ultraHard':
		computerPoints += 2.5;
		break;
	case 'almostImpossible':
		computerPoints += 5;
		break;
	case 'realLife':
		computerPoints += 6;
		break;
}
}

function addUnfairPointsWhenHardDifficulty(){
switch (computerDifficulty) {
	case 'ultraHard':
		computerPoints += 0.5;
		break;
	case 'almostImpossible':
		computerPoints += 1;
		break;
	case 'realLife':
		computerPoints += 2.5;
		break;
}
}



function playerChoice(e){
console.log(e.target)
RockPaperScissorImages = document.querySelectorAll('#invisibleContainer > *')
switch(e.target){
  case  RockPaperScissorImages[0]:
	humanChoice = 'rock';
	break;


  case  RockPaperScissorImages[1]:
	humanChoice = 'paper';
	break;


  case  RockPaperScissorImages[2]:
	humanChoice = 'scissor';
	break;

	}

  getRandomChoice();
	gameRules();
}


let computerDifficulty;
const difficulty = document.querySelectorAll('#difficultySystem > *')



function getDifficulty(e) {
	console.log(e.target);
	switch(e.target){
	case difficulty[1]:
			computerDifficulty = 'easy';
			switchToTheGame();
			break;
	case difficulty[2]:
			computerDifficulty = 'normal';
			switchToTheGame();
			break;
	case difficulty[3]:
			computerDifficulty = 'hard';
			switchToTheGame();
			break;
	case difficulty[4]:
			computerDifficulty = 'ultraHard';
			switchToTheGame();
			break;
	case difficulty[5]:
			computerDifficulty = 'almostImpossible';
			switchToTheGame();
			break;
	case difficulty[6]:
			computerDifficulty = 'realLife';
			switchToTheGame();
			break;

}
}

function switchToTheGame(){
      document.querySelector('#difficultySystem').style.display = "none";
      document.querySelector('#humanChoiceContainer').style.display = "flex";
}







let difficultySystem = document.querySelector('#difficultySystem');
difficultySystem.addEventListener('click', getDifficulty)

let invisibleContainer = document.querySelector('#invisibleContainer');
invisibleContainer.addEventListener('click', playerChoice);

PlayerNameDoneButton = document.querySelector('#nameInputContainer button');
PlayerNameDoneButton.addEventListener('click', getPlayerName);
