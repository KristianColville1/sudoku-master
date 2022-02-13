// global variables
let temp = document.getElementsByClassName('game-grid-cells');
let counter = 1;
let emptyArray = [];


function startGame(){
    
    for(let i = 0; i < temp.length; i++){
        emptyArray.push(counter);
        temp[i].innerHTML = `<div class="numbers"> ${counter++}</div>`;
        if(counter > 9){
            counter = 1;
        }
        
    }
    alert(emptyArray);
}

startGame();
