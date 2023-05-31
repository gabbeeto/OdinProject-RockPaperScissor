let humanChoice;

let choice = ['rock', 'paper', 'scissor'];
let humanPoints = 0;
let computerPoints = 0;


let playerName;
function getPlayerName(){

playerName = document.querySelector('#nameInputContainer input').value;
document.querySelector('#nameInputContainer').style.display = "none";

document.querySelector('#difficultySystem').style.display = "flex";


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
}

else if(computerChoice == 'paper'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerHTML = `duck wins because ${playerName} chose rock and duck chose 'paper'`;
}

else if(computerChoice == 'scissor'){
addPointsToHuman();
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose scissor and ${playerName} chose rock`;
}

		break;



  case 'paper':



if(computerChoice == 'rock'){
addPointsToHuman();
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose 'rock' and ${playerName} chose paper`;
}

else if(computerChoice == 'paper'){
addUnfairPointsWhenHardDifficulty();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `it's a tie because both of you chose paper`;
}

else if(computerChoice == 'scissor'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose paper and duck chose 'scissor'`;
}
		
		break;


  case 'scissor':



if(computerChoice == 'rock'){
addPointsToComputer();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose scissor and duck choose rock`;
}

else if(computerChoice == 'paper'){
addPointsToHuman();
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose paper and ${playerName} chose scissor`;
}

else if(computerChoice == 'scissor'){
addUnfairPointsWhenHardDifficulty();
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `it's a tie because both of you chose scissor`;
}

		break;

}
}

else {
document.querySelector('#humanChoiceContainer').parentElement.removeChild(document.querySelector('#humanChoiceContainer'));
let finalText = document.createElement('h1');
if(humanPoints > computerPoints){
finalText.innerText = 'human won!!!!!.. you saved this planet agaisnt this evil duck...';
}
else{
finalText.innerText = 'you got defeated by the evil duck';
}
document.body.appendChild(finalText);


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
	case 'ultrahard':
		humanPoints += 0.50;
		break;
	case 'almostImpossible':
		humanPoints += 0.25;
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
	case 'ultrahard':
		computerPoints += 2.5;
		break;
	case 'almostImpossible':
		computerPoints += 5;
		break;
}
}

function addUnfairPointsWhenHardDifficulty(){
switch (computerDifficulty) {
	case 'ultrahard':
		computerPoints += 0.5;
		break;
	case 'almostImpossible':
		computerPoints += 1;
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
