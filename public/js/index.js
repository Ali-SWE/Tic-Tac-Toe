let turn = document.querySelector(".turn span");
let list = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
const restartButton = document.getElementsByClassName("restart")[0];
const cells = document.querySelectorAll(".cell");
const container = document.getElementsByClassName("col")[4];

function select(element){ // this function is called when a player plays
    if(turn.innerHTML === "X"){
        element.innerHTML += "X";
        turn.innerHTML = "O";
        list[Number(element.id)] = 0;
    }else{
        element.innerHTML += "O";
        turn.innerHTML = "X";
        list[Number(element.id)] = 1;
    }
    element.removeAttribute("onclick");
    element.classList.remove("clickable");
    

    let winner = checkWinner();
    console.log(winner);
    if(winner === "X"){ // X wins
        displayWinner("X");

    }else if(winner === "O"){ // O wins
        displayWinner("O");
    }else{
        if(isOver()){ //draw
            displayWinner("");
        }
    }
}

function checkWinner(){ // this function return who the winner is or empty string for draw
    if((list[0] == list[1]) && (list[0] == list[2])){
        if(list[0] == 0){
            return "X";
        }else if(list[0] == 1){
            return "O";
        }
    }else if((list[3] == list[4]) && (list[3] == list[5])){
        if(list[3] == 0){
            return "X";
        }else if(list[3] == 1){
            return "O";
        }

    }else if((list[6] == list[7]) && (list[6] == list[8])){
        if(list[6] == 0){
            return "X";
        }else if(list[6] == 1){
            return "O";
        }
    }else if((list[0] == list[3]) && (list[0] == list[6])){
        if(list[0] == 0){
            return "X";
        }else if(list[0] == 1){
            return "O";
        }

    }else if((list[1] == list[4]) && (list[1] == list[7])){
        if(list[1] == 0){
            return "X";
        }else if(list[1] == 1){
            return "O";
        }

    }else if((list[2] == list[5]) && (list[2] == list[8])){
        if(list[2] == 0){
            return "X";
        }else if(list[2] == 1){
            return "O";
        }

    }else if((list[0] == list[4]) && (list[0] == list[8])){
        if(list[0] == 0){
            return "X";
        }else if(list[0] == 1){
            return "O";
        }

    }else if((list[2] == list[4]) && (list[2] == list[6])){
        if(list[2] == 0){
            return "X";
        }else if(list[2] == 1){
            return "O";
        }
    }
    return "";

}

function isOver(){ // this function return true if the games ends and false whne the game is in progress
    if(list.includes(-1))
        return false;
    return true;
}

function displayWinner(winner){ // this function shows the result in a div
    // remove onclick
    for (let index = 0; index < cells.length; index++) {
        cells[index].classList.remove("clickable");
        cells[index].removeAttribute("onclick");
        
    }
    const text1 = document.createTextNode("You won ");
    const text2 = document.createTextNode(" !");

    const winnerDiv = document.createElement("div");
    const winnerP = document.createElement("p");
    const winnerSpan = document.createElement("span");
    winnerSpan.appendChild(document.createTextNode(winner));
    if(winner==""){//draw
        winnerP.appendChild(document.createTextNode("Draw !"));
        winnerP.style.color = "#EBB02D";
    }
    else{
        winnerP.appendChild(text1);
        winnerP.appendChild(winnerSpan);
        winnerP.appendChild(text2);
    }
    winnerDiv.appendChild(winnerP);
    winnerDiv.classList.add("winner");
    container.appendChild(winnerDiv);
    setTimeout(()=>{
        container.removeChild(document.getElementsByClassName("winner")[0]);
    },5000);
}

restartButton.addEventListener("click", ()=>{ // restart button handler
    for (let index = 0; index < cells.length; index++) {
        const element = cells[index]; 
        element.innerHTML = ""; 
        element.classList.add("clickable");
        element.setAttribute("onclick", "select(this)");
    }
    list = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    turn.innerHTML = "X";
});