let rounds = 0;
let playerHand = "Rock";
let computerHand = 0;
let playerWins = 0;
let computerWins = 0;

//begins the game and sets the round count
function playGame(){

	console.log("Welcome to the game")
	console.log("To play the game, enter the number of rounds you want to play, then enter the hand you want to play.")

	rounds = prompt();
	console.log("Alright, let's play " + rounds + " rounds")

	gameLoop();
}

//loops the game for as many rounds as requested
function gameLoop() {
	for (i = 0; i < rounds; i++){
		playerHand = prompt("Enter the hand you'd like to play.", "Rock").toLowerCase()
		console.log(playerHand);	

		let computerHand = Math.floor(Math.random() * 3);

		if (computerHand == 0){
			computerHand = "rock";
		} 
		else if (computerHand == 1){
			computerHand = "paper";
		} 
		else {
			computerHand = "scissors";
		}

		console.log(computerHand);

		if (playerHand == computerHand) {
			console.log("Draw! Nobody wins.");
		} 
		else if (playerHand == "rock" && computerHand == "scissors") {
			console.log("Rock crushes scissors, you win!");
			playerWins++;
			printWins();
		} 
		else if (playerHand == "rock" && computerHand == "paper"){
			console.log("Paper covers rock, you lose.");
			computerWins++;
			printWins();
		}
		else if (playerHand == "paper" && computerHand == "rock"){
			console.log("Paper covers rock, you win!");
			playerWins++;
			printWins();
		} 
		else if (playerHand == "paper" && computerHand == "scissors"){
			console.log("Scissors cut paper, you lose.");
			computerWins++;
			printWins();
		} 
		else if (playerHand == "scissors" && computerHand == "paper"){
			console.log("Scissors cut paper, you win!");
			playerWins++;
			printWins();
		} 
		else if (playerHand == "scissors" && computerHand == "rock"){
			console.log("Rock crushes scissors, you lose.");
			computerWins++;
			printWins();
		}
		else {
			console.log("Error, something went terribly amiss");
		}

	}

	if (computerWins > playerWins){
		console.log("The Computer won!");
	}
	else if (playerWins < computerWins){
		console.log("You won!");
	}
	else{
        console.log("The match ended in a draw!");
	}

	playerWins = 0;
	computerWins = 0;
}

//prints the number of times the player or computer has won
function printWins(){
	console.log("You've won " + playerWins + " time(s).");
	console.log("The computer won " + computerWins + " time(s).");
}