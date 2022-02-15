// global variables
let mainGrid = document.getElementById('grid');
let gCells = document.getElementsByClassName('game-grid-cells');

const isGameStarted = document.querySelector('.start-game');
const isDarkMode = document.querySelector('dark-mode-button');

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

var dontShade = []; // used to track shaded indexs
var shadedIndexs = []; // current shaded indexs
let playerIndex = []; // players current index
var lastIndex = []; // players last index

let enableDarkMode = false;
let isPlayerHere = false; // is the player on the board

let randomPosition = Math.floor(Math.random() * 80); // random position for player position testing

// horizontal indexs
let hGrid = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80]
];

// vertical indexs
let vGrid = [
    [0, 9, 18, 27, 36, 45, 54, 63, 72],
    [1, 10, 19, 28, 37, 46, 55, 64, 73],
    [2, 11, 20, 29, 38, 47, 56, 65, 74],
    [3, 12, 21, 30, 39, 48, 57, 66, 75],
    [4, 13, 22, 31, 40, 49, 58, 67, 76],
    [5, 14, 23, 32, 41, 50, 59, 68, 77],
    [6, 15, 24, 33, 42, 51, 60, 69, 78],
    [7, 16, 25, 34, 43, 52, 61, 70, 79],
    [8, 17, 26, 35, 44, 53, 62, 71, 80]
];

// Larger grid indexs 1 - 9
let lGrid = [
    [0, 1, 2, 9, 10, 11, 18, 19, 20],
    [3, 4, 5, 12, 13, 14, 21, 22, 23],
    [6, 7, 8, 15, 16, 17, 24, 25, 26],
    [27, 28, 29, 36, 37, 38, 45, 46, 47],
    [30, 31, 32, 39, 40, 41, 48, 49, 50],
    [33, 34, 35, 42, 43, 44, 51, 52, 53],
    [54, 55, 56, 63, 64, 65, 72, 73, 74],
    [57, 58, 59, 66, 67, 68, 75, 76, 77],
    [60, 61, 62, 69, 70, 71, 78, 79, 80]
];

let dummyFill = [
    9,5,4,2,3,1,7,8,6,
    5,9,2,1,4,7,6,3,8,
    9,1,8,6,2,3,5,7,4,
    8,2,5,9,1,7,4,6,3,
    9,5,4,2,3,1,7,8,6,
    5,9,2,1,4,7,6,3,8,
    9,1,8,6,2,3,5,7,4,
    8,2,5,9,1,7,4,6,3,
    2,9,8,3,6,7,4,5,1
]

// classes to these rows and columns for readability
vGrid[3].forEach(index => gCells[index].classList.add('margin-left'));
vGrid[6].forEach(index => gCells[index].classList.add('margin-left'));
hGrid[3].forEach(index => gCells[index].classList.add('margin-top'));
hGrid[6].forEach(index => gCells[index].classList.add('margin-top'));


function setGridUp(){
    for(let i = 0; i < gCells.length; i++){
        gCells[i].innerHTML= `<span class='numbers'>${randNum()}</span>`;
    }
}

// function to start game
function startGame(){
    resetPosition();
    setGridUp();
}

function resetPosition(){
    lastIndex.forEach(index => gCells[index].classList.remove('player'));
    shadedIndexs.forEach(index => gCells[index].classList.remove('shaded'));
}

// function to search the main array to locate the player class and highlight the array with class shader horizontally
function playerPosition(position){
    resetPosition();

    // parameter position activates shading colors and player location on board
    playerIndex = [Number(position)];
    playerIndex.forEach(index => gCells[index].classList.add('player'));

    // check every index in all arrays and add lighter background to those cells except player position
    for(let oArray = 0; oArray < vGrid.length; oArray++){
        let iArrayLen = vGrid[oArray].length;
        for(let iArray = 0; iArray < iArrayLen; iArray++){
            if(gCells[vGrid[oArray][iArray]].classList.contains('player')){
                gCells[randomPosition]
                vGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                vGrid[oArray].forEach(index => shadedIndexs.push(index));
                vGrid[oArray].forEach(index => lastIndex.push(index));
                gCells[position].classList.remove('shaded'); // shows player position................................./
            }
            if(gCells[lGrid[oArray][iArray]].classList.contains('player')){
                lGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                lGrid[oArray].forEach(index => shadedIndexs.push(index));
                lGrid[oArray].forEach(index => lastIndex.push(index));
                gCells[position].classList.remove('shaded'); // shows player position................................./
            }
            if(gCells[hGrid[oArray][iArray]].classList.contains('player')){
                hGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                hGrid[oArray].forEach(index => shadedIndexs.push(index));
                hGrid[oArray].forEach(index => lastIndex.push(index));
                gCells[position].classList.remove('shaded'); // shows player position................................./
            }
        }
    }
}

// Use functions to call when new random numbers needed
function randNum(){
    let num = Math.floor(Math.random() * 9);
    if(num === 0){
        num++;
    }
    return num;
}

// darkmode function 
function darkMode(){

    if(enableDarkMode){// if dark mode is on do this
        enableDarkMode = false;


        


    }else if(!enableDarkMode){ // if dark mode is off do this
        enableDarkMode = true;



    }
}

// event listeners for starting game and darkmode
isGameStarted.addEventListener('click', startGame);
isDarkMode.addEventListener('click', darkMode);