// 1) Player & Computer chooses
// 2) Compare, if same choice re-choose
// 3) Declare a winner of round
// 4) 5 rounds, declare winner of game




// Global Variables
let playerScore = 0
let computerScore = 0 
let round = 1

function game() {
alert('Five rounds of Rock, Paper, Scissors!')

function playRound(playerSelection, computerSelection) {


    // Player Choice
       function playerPlay() {
        let testing = 0;
        while (testing === 0)
        
        {
           let choice = prompt('\t Round ' + round + '\n Rock, Paper, Scissors')
         if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
             return choice.toLowerCase()
           testing = 1;
         }
         else  {
             alert('You must choose either Rock, Paper, or Scissors')
            }
         }
        }
    // Computer Choice   
    function computerPlay() {
            let choices = ['rock', 'paper', 'scissors']
            return choices[Math.floor(Math.random() * choices.length)];
        }
    
    // Selection Variables
        playerSelection = playerPlay();
        computerSelection = computerPlay();

    // Message Variables
    let win_msg = ('You win! ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ' beats ' + computerSelection[0].toUpperCase() + computerSelection.substring(1))   
    let lose_msg = ('You lose! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1))
    
    // Comparison Section
    // Rock
    if (playerSelection === 'rock' && computerSelection === 'paper'){
    alert(lose_msg)
computerScore++
round++};
    
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        alert(win_msg)
playerScore++
round++};
        // Paper
    if (playerSelection === 'paper' && computerSelection === 'rock'){
         alert(win_msg)
playerScore++
round++};
    
    if (playerSelection === 'paper' && computerSelection === 'scissors'){
         alert(lose_msg)
computerScore++
round++};
        
        // Scissors
    if (playerSelection === 'scissors' && computerSelection === 'rock'){
          alert(lose_msg)
computerScore++
round++};
    
    if (playerSelection === 'scissors' && computerSelection === 'paper'){
         alert(win_msg)
playerScore++
round++};
       // Same choice aka replay
    if (playerSelection === computerSelection) {
        alert('You both picked ' + playerSelection + ' choose again!')
    playRound();
    }
    
    }
    playRound() 
    playRound()
    playRound()
    playRound()
    playRound()

// Game conclusion
function conclusion() {
if (playerScore > computerScore) {
alert('Congrats you won the game!')
}
else {
alert("Computer defeated you")
}
}
conclusion()
}
// Game execution
game()


