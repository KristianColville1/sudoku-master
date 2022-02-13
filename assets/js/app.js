// global variables
let emptyGridCells = document.getElementsByClassName('game-grid-cells');

const vertically = 9;
const horizontally = 9;

let filledGridCells = []; 
let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

let largeGridCells = {
    cell1:[],
    cell2:[],
    cell3:[],
    cell4:[],
    cell5:[],
    cell6:[],
    cell7:[],
    cell8:[],
    cell9:[]
}
    

// function to start game
function startGame(){
    for(let i = 0; i < emptyGridCells.length; i++){
        emptyGridCells[i].innerHTML = `<span class="numbers"> ${newValue()}</span>`;
    }
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