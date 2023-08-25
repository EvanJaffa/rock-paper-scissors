//initialize DOM references
const messageZone = document.querySelector(".message-zone");    // area where messages will be displayed
const playerNum = document.querySelector(".player-num");        // area where player score is displayed
const cpuNum = document.querySelector(".cpu-num");              // area where cpu score is displayed

const rockBtn = document.querySelector("#rock-button");         // input button for rock
const paperBtn = document.querySelector("#paper-button");       // input button for paper
const scissorsBtn = document.querySelector("#scissors-button"); // input button for scissors

let playerScore, cpuScore, turnsElapsed = 0;

rockBtn.addEventListener('click', function(){
    runRound(0)
});
paperBtn.addEventListener('click', function(){
    runRound(1)
});
scissorsBtn.addEventListener('click', function(){
    runRound(2)
});

function runRound(playerChoice){
    
    let cpuChoice = getCpuChoice();

    let playerChoiceText = choiceToText(playerChoice);
    let cpuChoiceText = choiceToText(cpuChoice);

    let roundWinner = determineWinner(playerChoice, cpuChoice);

    console.log(`Playerchoice: ${playerChoiceText}, cpuChoice: ${cpuChoiceText}, result: ${roundWinner}`);

    turnsElapsed++;

    if(roundWinner == 2){ drawProcedure()};
    if(roundWinner == 1){ playerWinProcedure()};
    if(roundWinner == 0){ cpuWinProcedure()};


}

function getCpuChoice(){
    return Math.floor(Math.random()*3);
}

function choiceToText(input){
    switch(input){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "error";
    }
}

function determineWinner(playerChoice, cpuChoice){
    let computation = playerChoice - cpuChoice;
    // Because Rock is represented as 0, Paper as 1, and Scissors as 2,
    // we can determine the winner of any game from the results of the
    // above subtraction computation.
    // If the result is +1 or -2, the player wins
    // If the result is -1 or +2, the cpu wins

    if(computation == 0) return 2;        // on return, 2 will signal a draw.
    if(computation == 1 || computation == -2) return 1; // return 1 signals player win
    if(computation == 2 || computation == -1) return 0; // return 0 signals cpu win
}  

function drawProcedure(){
    messageZone.innerHTML = `A draw! You and the computer both chose ${playerChoice}.<br><br>Ready for Round ${turnsElapsed + 1}? Choose your next throw below to move on!`;
}

function playerWinProcedure(){
    messageZone.innerHTML = `You won! You chose ${playerChoiceText} and the cpu chose ${cpuChoiceText}.`
}