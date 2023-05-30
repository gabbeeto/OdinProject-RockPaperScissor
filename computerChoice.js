let humanChoice;

let choice = ['rock', 'paper', 'scissor'];
let humanPoints = 0;
let computerPoints = 0;


let playerName;
function getPlayerName(){

playerName = document.querySelector('#nameInputContainer input').value;
document.querySelector('#nameInputContainer').style.display = "none";

document.querySelector('#humanChoiceContainer').style.display = "flex";
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
message.innerText = `it's a tie because both of you chose rock`;
}

else if(computerChoice == 'paper'){
computerPoints += 1;
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerHTML = `duck wins because ${playerName} chose rock and duck chose 'paper'`;
}

else if(computerChoice == 'scissor'){
humanPoints += 1;
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose scissor and ${playerName} chose rock`;
}

		break;



  case 'paper':



if(computerChoice == 'rock'){
humanPoints += 1;
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose 'rock' and ${playerName} chose paper`;
}

else if(computerChoice == 'paper'){
message.innerText = `it's a tie because both of you chose paper`;
}

else if(computerChoice == 'scissor'){
computerPoints += 1;
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose paper and duck chose 'rock'`;
}
		
		break;


  case 'scissor':



if(computerChoice == 'rock'){
computerPoints += 1;
computerPointText.innerHTML = `Duck points = ${computerPoints}`;
message.innerText = `Duck wins because ${playerName} chose scissor and duck choose rock`;
}

else if(computerChoice == 'paper'){
humanPoints += 1;
humanPointText.innerHTML = `human points = ${humanPoints}`;
message.innerText = `${playerName} wins because duck chose paper and ${playerName} chose scissor`;
}

else if(computerChoice == 'scissor'){
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

let invisibleContainer = document.querySelector('#invisibleContainer');
invisibleContainer.addEventListener('click', playerChoice);



PlayerNameDoneButton = document.querySelector('#nameInputContainer button');
PlayerNameDoneButton.addEventListener('click', getPlayerName);
