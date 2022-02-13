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
    cell1:[
        1, 2, 3,
        10, 11, 12,
        19, 20, 21
    ],
    cell2:[
        4, 5, 6,
        13, 14, 15,
        22, 23, 24
    ],
    cell3:[
        7, 8, 9,
        16, 17, 18,
        25, 26, 27
    ],
    cell4:[
        28, 29, 30,
        37, 38, 39,
        46, 47, 48
    ],
    cell5:[
        31, 32, 33,
        40, 41, 42,
        49, 50, 51
    ],
    cell6:[
        34, 35, 36,
        43, 44, 45,
        52, 53, 54
    ],
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