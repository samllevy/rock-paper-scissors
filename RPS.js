function getUserChoice () {
    let userChoice = prompt("Player's choice: ");
    userChoice = userChoice.toLowerCase();
    
    if (userChoice === "rock" || userChoice === "paper"|| userChoice === "scissors") {
        console.log("Player's choice: " + userChoice);
        return userChoice;
    } else {
        console.log("Invalid choice");
        return undefined;
    }
}

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3 + 1) ; 
    let computerChoice ;
    
    if (randomNum === 1) {
        console.log("The computer choice is rock");
        computerChoice = "rock";
        return computerChoice;
        } else if (randomNum === 2) {
            console.log("The computer choice is paper");
            computerChoice = "paper";
            return computerChoice;
        } else {
            console.log("The computer choice is scissors");
            computerChoice = "scissors";}
            return computerChoice;

    }



singleRound()

function playGame(userChoice,computerChoice) {
    for(singleRound , singleRound < 5 , singleRound++) {
        function singleRound (userChoice, computerChoice) {

            userChoice=getUserChoice ();
            computerChoice = getComputerChoice (); 
        
           if (userChoice === computerChoice) {
                    console.log("It's a tie!");
        
                } else if (userChoice === "rock") {
                    if(computerChoice === "paper") {
                        console.log("You lose! Paper beats rock");
                    } else {
                        console.log("You win! Rock beats scissors");}
        
                } else if (userChoice === "paper") {
                    if(computerChoice === "scissors") {
                        console.log("You lose! Scissors beats paper");
                    } else {
                        console.log("You win! Paper beats rock");}
        
                } else if (userChoice === "scissors") {
                if(computerChoice === "rock") {
                    console.log("You lose! Rock beats scissors");
                } else {
                    console.log("You win! Scissors beats paper");}
                }   
            }

    }
}
