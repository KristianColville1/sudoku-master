// global variables
let emptyGridCells = document.getElementsByClassName('game-grid-cells');

const vertically = 9;
const horizontally = 9;

let filledGridCells = []; 
let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

// function to start game
function startGame(){
    emptyGridCells[newPosition].innerHTML = `<div class="numbers"> ${newValue}</div>`;

    // let counter = 1;
    // enters the numbers 1 - 9 every 9 numbers
    // for(let i = 0; i < emptyGridCells.length; i++){
    //     emptyArray.push(counter);
    //     emptyGridCells[i].innerHTML = `<div class="numbers"> ${newValue}</div>`;
    //     if(counter > 9){
    //         counter = 1;
    //     }
        
    // }
    
    // alert(emptyArray);

}

// Use functions to call when new random numbers needed
function newValue(){
    let num = Math.floor(Math.random() * 9);
    if(num === 0){
        num++;
    }
    return num;
}

function newPosition(){
    let num = Math.floor(Math.random() * 81);
    if(num === 0){
        num++;
    }
    return num;
}

startGame(); // calls the function and runs the game
