// global variables
let emptyGridCells = document.getElementsByClassName('game-grid-cells');
let vertical = 9;
let width = 9;
let filledGridCells = []; 
let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

// function to start game
function startGame(){
    let firstValue = Math.floor(Math.random() * 9);
    let firstPosition = Math.floor(Math.random() * 81);
    if(firstValue === 0 || firstPosition === 0){
        firstValue++;
        firstPosition++;
    }

    



    // let counter = 1;
    // enters the numbers 1 - 9 every 9 numbers
    // for(let i = 0; i < emptyGridCells.length; i++){
    //     emptyArray.push(counter);
    //     emptyGridCells[i].innerHTML = `<div class="numbers"> ${firstValue}</div>`;
    //     if(counter > 9){
    //         counter = 1;
    //     }
        
    // }
    
    // alert(emptyArray);

}

startGame(); // calls the function and runs the game
