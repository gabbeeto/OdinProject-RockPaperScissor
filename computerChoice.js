let humanChoice;
let choice = ['rock', 'paper', 'scissor'];
let humanPoints = 0;
let computerPoints = 0;
let resetButton;
let difficultyResetButton;
let nameResetButton;





const setThePlayerNameButton = document.querySelector('#nameInputContainer button');
setThePlayerNameButton.addEventListener('click', getPlayerName);

let playerName;

function getPlayerName(){
playerName = document.querySelector('#nameInputContainer input').value;

//If there's no player name, than the name is going to be equal to 'human'
if(!playerName){playerName = 'Human';}

hideNameInputContainer();

showDifficultyContainer();

//it also updates the human name
updateHumanPointsOnThePage();
}

function hideNameInputContainer(){
document.querySelector('#nameInputContainer').style.display = "none";
}

function showNameInputContainer(){
document.querySelector('#nameInputContainer').style.display = "flex";
}

function showDifficultyContainer(){
document.querySelector('#difficultySystem').style.display = "flex";
}


function hideDifficultyContainer(){
document.querySelector('#difficultySystem').style.display = "none";
}

function updateHumanPointsOnThePage(){
document.querySelector('#humanPoints').innerText = `${playerName} points = ${humanPoints}`;
}

function updateComputerPointsOnThePage(){
document.querySelector('#computerPoints').innerText = `Duck points = ${computerPoints}`;
}





let difficultySystemContainer = document.querySelector('#difficultySystem');
difficultySystemContainer.addEventListener('click', setDifficulty);

const difficultyButton = document.querySelectorAll('#difficultySystem > *')

let computerDifficulty;

function setDifficulty(e) {
	switch(e.target){
	case difficultyButton[1]:
			computerDifficulty = 'easy';
			switchToTheGame();
			break;
	case difficultyButton[2]:
			computerDifficulty = 'normal';
			switchToTheGame();
			break;
	case difficultyButton[3]:
			computerDifficulty = 'hard';
			switchToTheGame();
			break;
	case difficultyButton[4]:
			computerDifficulty = 'ultraHard';
			switchToTheGame();
			break;
	case difficultyButton[5]:
			computerDifficulty = 'almostImpossible';
			switchToTheGame();
			break;
	case difficultyButton[6]:
			computerDifficulty = 'realLife';
			switchToTheGame();
			break;
}
}



function switchToTheGame(){
hideDifficultyContainer();
showTheGameContainer();
}


function showTheGameContainer(){
document.querySelector('#humanChoiceContainer').style.display = "flex";
}





let playerChoiceContainer = document.querySelector('#invisibleContainer');
playerChoiceContainer.addEventListener('click', getPlayerChoice);


function getPlayerChoice(PlayerchoiceContainer){

RockPaperScissorImages = document.querySelectorAll('#invisibleContainer > *')
switch(PlayerchoiceContainer.target){
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

  getRandomChoiceForComputer();
	applyGameRules();
}






let message = document.getElementById('message');

const maximumPointsBeforeTheGameEnds = 5;

function applyGameRules() {
// if the game reaches that amount of points, the game doesn't actually innitiate
if(humanPoints < maximumPointsBeforeTheGameEnds && computerPoints < maximumPointsBeforeTheGameEnds)
{
initiateTheGame();
}

else
{
endTheGame()
}

}






function initiateTheGame(){
switch (humanChoice) {
	case 'rock':
if(computerChoice == 'rock'){
addUnfairPointsWhenHardDifficulty();
updateComputerPointsOnThePage();
message.innerText = `it's a tie because both of you chose rock`;
message.style.color = '#ACAD81';
}

else if(computerChoice == 'paper'){
addPointsToComputer();
updateComputerPointsOnThePage()
message.innerHTML = `duck wins because ${playerName} chose rock and duck chose 'paper'`;
message.style.color = '#AD7979';
}

else if(computerChoice == 'scissor'){
addPointsToHuman();
updateHumanPointsOnThePage();
message.innerText = `${playerName} wins because duck chose scissor and ${playerName} chose rock`;
message.style.color = '#7BA8A8';
}
		break;



case 'paper':

if(computerChoice == 'rock'){
addPointsToHuman();
updateHumanPointsOnThePage();
message.innerText = `${playerName} wins because duck chose 'rock' and ${playerName} chose paper`;
message.style.color = '#7BA8A8';
}

else if(computerChoice == 'paper'){
addUnfairPointsWhenHardDifficulty();
updateComputerPointsOnThePage();
message.innerText = `it's a tie because both of you chose paper`;
message.style.color = '#ACAD81';
}

else if(computerChoice == 'scissor'){
addPointsToComputer();
updateComputerPointsOnThePage();
message.innerText = `Duck wins because ${playerName} chose paper and duck chose 'scissor'`;
	
message.style.color = '#AD7979';
}
		break;



case 'scissor':

if(computerChoice == 'rock'){
addPointsToComputer();
updateComputerPointsOnThePage();
message.innerText = `Duck wins because ${playerName} chose scissor and duck choose rock`;
message.style.color = '#AD7979';
}

else if(computerChoice == 'paper'){
addPointsToHuman();
updateHumanPointsOnThePage();
message.innerText = `${playerName} wins because duck chose paper and ${playerName} chose scissor`;
message.style.color = '#7BA8A8';
}

else if(computerChoice == 'scissor'){
addUnfairPointsWhenHardDifficulty();
updateComputerPointsOnThePage();
message.innerText = `it's a tie because both of you chose scissor`;
message.style.color = '#ACAD81';
}

		break;

}

}


let computerChoice;
function getRandomChoiceForComputer() {
computerChoice = choice[Math.round(Math.random() * 2)];
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








function endTheGame(){

document.querySelector('#humanChoiceContainer').style.display = 'none';


const finalTextContainer = document.createElement('div');
finalTextContainer.id = 'finalTextContainer';

const finalText = document.createElement('h1');
finalText.id = 'finalText';

const endingImage = document.createElement('img');
endingImage.id = 'endingImage';

buttonsDiv = document.createElement('div');
buttonsDiv.id = 'buttonsDiv';


nameResetButton = document.createElement('button');
nameResetButton.innerText = 'Change name';
nameResetButton.addEventListener('click', ResetEverythingAndOpenNameContainer)

difficultyResetButton = document.createElement('button');
difficultyResetButton.innerText = 'Change Difficulty';
difficultyResetButton.addEventListener('click', ResetEverythingAndOpenDifficultyContainer)


resetButton = document.createElement('button');
resetButton.innerText = 'play Again';
resetButton.addEventListener('click', resetEverythingAndDeleteButton);

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
finalTextContainer.appendChild(buttonsDiv);

buttonsDiv.appendChild(resetButton);
buttonsDiv.appendChild(difficultyResetButton);
buttonsDiv.appendChild(nameResetButton);


}





function ResetEverythingAndOpenDifficultyContainer(){
computerDifficulty = undefined;
resetEverything();
showDifficultyContainer();
deleteAllButtons();
};

function ResetEverythingAndOpenNameContainer(){
computerDifficulty = undefined;
playerName = '';
resetEverything();
showNameInputContainer();
deleteAllButtons();
};


function resetEverythingAndDeleteButton(){
resetEverything();
deleteAllButtons();
showTheGameContainer();
};

function resetEverything(){
humanPoints = 0;
computerPoints =0;
message.innerText = '';
updateHumanPointsOnThePage();
updateComputerPointsOnThePage();
finalText.parentElement.removeChild(finalText);
endingImage.parentElement.removeChild(endingImage);
};

function deleteAllButtons(){
difficultyResetButton.parentElement.removeChild(difficultyResetButton);
resetButton.parentElement.removeChild(resetButton);
nameResetButton.parentElement.removeChild(nameResetButton);

}
