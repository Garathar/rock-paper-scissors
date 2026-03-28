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
const finalPara = document.createElement("p")
const para = document.createElement("p")
let humanScore = 0
let computerScore = 0
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        let computerChoice = getComputerChoice();
        playRound(button.id,computerChoice);
    });
});
let container = document.querySelector("#container")
function playRound(human,computer){ // A function that checks who wins the the round and writes it out into the container
    if (human === computer) {
        para.textContent = "It's a tie! You selected: "+human+" and the computer selected: "+computer
        container.appendChild(para);
    }
    else{
        switch(human){
            case "rock":
                if (computer === "paper"){
                    computerScore += 1
                    para.textContent = "You lose! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
                else {
                    humanScore += 1
                    para.textContent = "You win! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
            case "paper":
                if (computer === "scissors"){
                    computerScore += 1
                    para.textContent = "You lose! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
                else {
                    humanScore += 1
                    para.textContent = "You win! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
            case "scissors":
                if (computer === "rock"){
                    computerScore += 1
                    para.textContent = "You lose! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
                else {
                    humanScore += 1
                    para.textContent = "You win! You selected: "+human+" and the computer selected: "+computer
                    container.appendChild(para);
                    break;
                }
        }
    }
    if (humanScore >= 5 || computerScore >= 5)
        {if (humanScore > computerScore){
            finalPara.textContent = `You won the game! Score Player: ${humanScore}\nComputer: ${computerScore}`
            container.appendChild(finalPara); 
        }
        else {
            finalPara.textContent = `You lost the game! Score\nPlayer: ${humanScore}\nComputer: ${computerScore}`
            container.appendChild(finalPara); 
        }
    }
    else{
    finalPara.textContent = `Current score: Player: ${humanScore} Computer: ${computerScore}`
    container.appendChild(finalPara); 
    }

}