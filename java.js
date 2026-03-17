function getComputerChoice(){
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

console.log(getComputerChoice())