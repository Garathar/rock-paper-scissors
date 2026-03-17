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