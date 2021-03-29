// 1) Player & Computer chooses
// 2) Compare, if same choice re-choose
// 3) Declare a winner of round
// 4) 5 rounds, declare winner of game




// TO DO - nest 5 playRound() into game()? make Functions playerScore++ computerScore++ round++ msgs etc. 
// should player and computer wins variables be set from playRound() nest?
// would this be possible by returning from if statements, return player wins, then seperate funcs for msgs,score,round



// first version non nested player and computer selections, think second version might be better, 
// this version might be easier for adding more players and using them as parameters instead of inside func

// FIRST VERSION
// Player play
function playerPlay() {
    let testing = 0;
    while (testing == 0)
    
    {
       let choice = prompt('Rock, Paper, Scissors')
     if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
         return choice.toLowerCase()
       testing = 1;
     }
     else  {
         
        }
     }
    }


// Computer play
function computerPlay() {
        let choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)];
    }



// Determine winner
//this one takes playerSelection, computerSelection outside variables as input for playing the round playRound()
function playRound(playerSelection, computerSelection) {

let win_msg = ('You win! ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ' beats ' + computerSelection[0].toUpperCase() + computerSelection.substring(1))   
let lose_msg = ('You lose! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1))



    // Rock
if (playerSelection == 'rock' && computerSelection == 'paper'){
alert(lose_msg)};


if (playerSelection == 'rock' && computerSelection == 'scissors'){
    alert(win_msg)};
    // Paper
if (playerSelection == 'paper' && computerSelection == 'rock'){
     alert(win_msg)};

if (playerSelection == 'paper' && computerSelection == 'scissors'){
     alert(lose_msg)};
    
    // Scissors
if (playerSelection == 'scissors' && computerSelection == 'rock'){
      alert(lose_msg)};

if (playerSelection == 'scissors' && computerSelection == 'paper'){
     alert(win_msg)};
   // Same choice
if (playerSelection === computerSelection) {
    alert('You both picked ' + playerSelection + ' choose again!')
playerSelection = playerPlay()
computerSelection = computerPlay()
redo()
}
function redo() {
 return playRound(playerSelection,computerSelection)

}

let playerSelection = playerPlay();
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);






// 3) Declare winner of Round 

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));



///////////////////////////////////////////////////////////////////////////////////////////////////




  // SECOND VERSION

//this is a nested round version, i think its better


function playRound() {
    // Player Choice
       function playerPlay() {
        let testing = 0;
        while (testing == 0)
        
        {
           let choice = prompt('\t Round ' + round() + '\n Rock, Paper, Scissors')
         if (choice.toLowerCase() == 'rock' || choice.toLowerCase() == 'paper' || choice.toLowerCase() == 'scissors') {
             return choice.toLowerCase()
           testing = 1;
         }
         else  {
             
            }
         }
        }
    // Computer Choice   
    function computerPlay() {
            let choices = ['rock', 'paper', 'scissors']
            return choices[Math.floor(Math.random() * choices.length)];
        }
    
    // Selection Variables
        let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    // Message Variables
    let win_msg = ('You win! ' + playerSelection[0].toUpperCase() + playerSelection.substring(1) + ' beats ' + computerSelection[0].toUpperCase() + computerSelection.substring(1))   
    let lose_msg = ('You lose! ' + computerSelection[0].toUpperCase() + computerSelection.substring(1) + ' beats ' + playerSelection[0].toUpperCase() + playerSelection.substring(1))
    
    // Compare Section
    // Rock
    if (playerSelection == 'rock' && computerSelection == 'paper'){
    alert(lose_msg)};
    
    
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        alert(win_msg)};
        // Paper
    if (playerSelection == 'paper' && computerSelection == 'rock'){
         alert(win_msg)};
    
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
         alert(lose_msg)};
        
        // Scissors
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
          alert(lose_msg)};
    
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
         alert(win_msg)};
       // Same choice
    if (playerSelection === computerSelection) {
        alert('You both picked ' + playerSelection + ' choose again!')
    playRound();
    }
    
    }
    playRound()


////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 4) Create 5 round game that keeps score and reports the winner and loser




////////////////////////////// Putting it all together //////////////////////////////


// Global Variables
let playerScore = 0
let computerScore = 0 
let round = 1

function game() {
alert('Five rounds of Rock, Paper, Scissors!')

function playRound(playerSelection, computerSelection) {


    // Player Choice
       function playerPlay() {
        let testing === 0;
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
    if (playerSelection == 'rock' && computerSelection == 'paper'){
    alert(lose_msg)
computerScore++
round++};
    
    
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        alert(win_msg)
playerScore++
round++};
        // Paper
    if (playerSelection == 'paper' && computerSelection == 'rock'){
         alert(win_msg)
playerScore++
round++};
    
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
         alert(lose_msg)
computerScore++
round++};
        
        // Scissors
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
          alert(lose_msg)
computerScore++
round++};
    
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
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


