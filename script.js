console.log("Welome to Rock-Paper-Scissors: console edition! \n\nReady to play? Just enter 'rock', 'paper', or 'scissors'.");

let userThrow = prompt("Welome to Rock-Paper-Scissors: console edition! \n\nReady to play? Just enter 'rock', 'paper', or 'scissors'.");

let userScore = cpuScore = 0;
let turnCount = 1;

while(turnCount <= 5){
    if(turnCount > 1){
        userThrow = prompt(`Welcome to round ${turnCount}! Enter your throw:`);
    }
    runRound();
}


function userChoice(userThrow){
    userThrow = userThrow.trim().toLowerCase();
    switch(userThrow){
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
        default:
            return "other";
    }
}

function rollToText(input){
    switch(input){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "other";
    }
}

function cpuChoice(){
    let choice = Math.floor(Math.random()*3);
    return choice;
}

// this function will compare the user's and CPU's inputs. it will return 0 if the user won, 1 if the cpu won, and 2 if there is a draw
function calculateWinner(userNum, cpuNum){
    let userMinusCPU = userNum - cpuNum;  //we will compute this by looking at the value of the user's guess minus the value of a cpu guess, because they are both represented as ints from 0 to 2

    //based on the value of userMinusCPU, we know the outcome of the round.
    switch(userMinusCPU) {
        case 0:         // if the value is 0, there was a draw. Return 2.
            return 2;
        case 1:         // if the value is 1, the user won. return 0.
            return 0;
        case 2:         // if the value is 2, the CPU won. return 1.
            return 1;
        case -1:        // if the value is -1, the CPU won. return 1.
            return 1;
        case -2:        // if the value is -2, the user won. return 0.
            return 0;
        default:        // if something else happens, that's an error
            return "error";
    }
}


function runRound(){

    let cpuThrow = cpuChoice();                 //store a CPU roll to a var
    let cpuThrowText = rollToText(cpuThrow);    //store a corresponding string to the CPU's roll

    let userMinusCPU = calculateWinner(userChoice(userThrow), cpuThrow);   //we will compute this by looking at the value of the user's guess minus the value of a cpu guess, because they are both represented as ints from 0 to 2
    constructLog(userThrow, cpuThrowText, userMinusCPU);
    turnCount++;
 
}

function constructLog(userTxt, cpuTxt, calc){
    string1 = `Your throw was ${userTxt}, the CPU's throw was ${cpuTxt}.`
    if(calc === 0){
        string2 = `You won round ${turnCount}!`;
        userScore++;
    }
    else if(calc === 1){
        string2 = `The computer won round ${turnCount}!`;
        cpuScore++;
    }
    else if(calc === 2){
        string2 = `Round ${turnCount} is a draw!`;
    }
    string3 = `Your score is ${userScore}, the computer's score is ${cpuScore}`;

    console.log(`${string1}\n${string2}\n${string3}`);
}