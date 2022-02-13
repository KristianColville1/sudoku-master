// global variables
let temp = document.getElementsByClassName('game-grid-cells');



function startGame(){
    
    for(let i = 0; i < temp.length; i++){
        temp[i].innerHTML = `<span> ${i+1}</span>`;
    }
}

startGame();