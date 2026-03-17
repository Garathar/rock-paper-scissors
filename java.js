function getComputerChoice(){ //this function will randomly select a number, and according to that number, picks one of the three choices//
    let randomNumber = Math.floor(Math.random()*100) + 1
    if (randomNumber < 33){
        return "rock"
    }
    else if (randomNumber > 33 && randomNumber < 66){
        return "paper"
    }
    else{
        return "scissors"
    }
}
//This function will prompt the player into deciding a choice, changes so it will be all lowercase and returns its value
function getHumanChoice(){
    let choice = prompt("Please select rock,paper or scissors!")
    choice = choice.toLowerCase()
    return choice
}

let humanScore = 0
let computerScore = 0

function playRound(human,computer){ // A function that checks if 
    if (human === computer) {
       return console.log("It's a tie! You selected: "+human+" and the computer selected: "+computer)
    }
    else{
        switch(human){
            case "rock":
                if (computer === "paper"){
                    computerScore += 1
                    return console.log("You lose! You selected: "+human+" and the computer selected: "+computer)
                }
                else {
                    humanScore += 1
                    return console.log("You win! You selected: "+human+" and the computer selected: "+computer)
                }
            case "paper":
                if (computer === "scissors"){
                    computerScore += 1
                    return console.log("You lose! You selected: "+human+" and the computer selected: "+computer)
                }
                else {
                    humanScore += 1
                    return console.log("You win! You selected: "+human+" and the computer selected: "+computer)
                }
            case "scissors":
                if (computer === "rock"){
                    computerScore += 1
                    return console.log("You lose! You selected: "+human+" and the computer selected: "+computer)
                }
                else {
                    humanScore += 1
                    return console.log("You win! You selected: "+human+" and the computer selected: "+computer)
                }
        }
    }
}
function playGame(){
    for (let i = 0; i < 5;i++){
    const humanSelect = getHumanChoice();
    const  computerSelect = getComputerChoice();
    playRound(humanSelect,computerSelect)
    }
    if (humanScore > computerScore){
       return console.log("Congratulation you won!\nYour score: "+humanScore+" Computer score: "+computerScore)
    }
    else if (humanScore < computerScore){
        return console.log("Sadly you have lost!\nYour score: "+humanScore+" Computer score: "+computerScore)
    }
    else {
        return console.log("It's a tie?!\nYour score: "+humanScore+" Computer score: "+computerScore)
    }
}
playGame();