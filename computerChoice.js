let humanChoice;

let choice = ['rock', 'paper', 'scissor'];
humanPoints = 0;
computerPoints = 0;

let playerName = prompt(`what's your name`);

let computerChoice;

function getRandomChoice() {
computerChoice = choice[Math.round(Math.random() * 2)];
}



function rules() {

if(humanChoice == 'rock' && computerChoice == 'rock'){
alert(`it's a tie because both of you chose rock`);
}

else if(humanChoice == 'rock' && computerChoice == 'paper'){
computerPoints += 1;
alert(`computer wins because ${playerName} chose rock and computer chose 'paper'`);
}

else if(humanChoice == 'rock' && computerChoice == 'scissor'){
humanPoints += 1;
alert(`${playerName} wins because computer chose scissor and ${playerName} chose rock`);
}



else if(humanChoice == 'paper' && computerChoice == 'rock'){
humanPoints += 1;
alert(`${playerName} wins because computer chose 'rock' and ${playerName} chose paper`);
}

else if(humanChoice == 'paper' && computerChoice == 'paper'){
alert(`it's a tie because both of you chose paper`);
}

else if(humanChoice == 'paper' && computerChoice == 'scissor'){
computerPoints += 1;
alert(`computer wins because ${playerName} chose paper and computer chose 'rock'`);
}



else if(humanChoice == 'scissor' && computerChoice == 'rock'){
computerPoints += 1;
alert(`computer wins because ${playerName} chose scissor and computer choose rock`);
}

else if(humanChoice == 'scissor' && computerChoice == 'paper'){
humanPoints += 1;
alert(`${playerName} wins because computer chose paper and ${playerName} chose scissor`);
}

else if(humanChoice == 'scissor' && computerChoice == 'scissor'){
alert(`it's a tie because both of you chose scissor`);
}

}

let round = 1;

while(humanPoints < 5 && computerPoints < 5){
humanChoice = prompt(`rock, paper or scissor?`);
getRandomChoice();
rules();
alert(`Round ${round} \nHuman Points: ${humanPoints}. \nComputer Points: ${computerPoints}`)
round += 1;
}

if(humanPoints > computerPoints){
alert(`${playerName} won`);
}
else{
alert(`computer won`);
}


