// global variables
let mainGrid = document.getElementById('grid');
let gCells = document.getElementsByClassName('game-grid-cells');

const isGameStarted = document.querySelector('.start-game');
const isDarkMode = document.querySelector('dark-mode-button');

const length = 9;
const width = 9;

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

var dontShade = [];
var shadedIndexs = [];
let playerIndex = [40]; // places player in the center of the board
var lastIndex = [];
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

function setGridUp(){
    
}
// emptyCells[i].innerHTML = `<span class="numbers"> ${randNum()}</span>`;

// function to start game
function startGame(){
    resetGame();
    setGridUp();

    randomPosition = Math.floor(Math.random() * 80); // random position for player position testing
    playerIndex = [randomPosition];
    lastIndex.push(randomPosition);
    playerIndex.forEach(index => gCells[index].classList.add('player'));
    gCells[playerIndex].innerHTML = `<span class="numbers"> ${playerIndex}</span>`;

    playerPosition();
}

function resetGame(){
    lastIndex.forEach(index => gCells[index].classList.remove('player'));
    shadedIndexs.forEach(index => gCells[index].classList.remove('shaded'));
}

function createBoard(){

}

// function to search the main array to locate the player class and highlight the array with class shader horizontally
function playerPosition(){

    // check vertically and add lighter background to those cells
    for(let oArray = 0; oArray < hGrid.length; oArray++){
        let iArrayLen = hGrid[oArray].length;
        for(let iArray = 0; iArray < iArrayLen; iArray++){
            if(gCells[hGrid[oArray][iArray]].classList.contains('player')){
                hGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                hGrid[oArray].forEach(index => shadedIndexs.push(index));
                gCells[randomPosition].classList.remove('shaded'); // shows player position................................./
            }
        }
    }

    // check horizontally and add lighter background to those cells
    for(let oArray = 0; oArray < vGrid.length; oArray++){
        let iArrayLen = vGrid[oArray].length;
        for(let iArray = 0; iArray < iArrayLen; iArray++){
            if(gCells[vGrid[oArray][iArray]].classList.contains('player')){
                gCells[randomPosition]
                vGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                vGrid[oArray].forEach(index => shadedIndexs.push(index));
                gCells[randomPosition].classList.remove('shaded'); // shows player position................................./
            }
        }
    }

    // check the surrounding area within the larger cell containing 9 smaller cells add shading
    for(let oArray = 0; oArray < lGrid.length; oArray++){
        let iArrayLen = lGrid[oArray].length;
        for(let iArray = 0; iArray < iArrayLen; iArray++){
            if(gCells[lGrid[oArray][iArray]].classList.contains('player')){
                lGrid[oArray].forEach(index => gCells[index].classList.add('shaded'));
                lGrid[oArray].forEach(index => shadedIndexs.push(index));
                gCells[randomPosition].classList.remove('shaded'); // shows player position................................./
            }
        }
    }
}

// Use functions to call when new random numbers needed
function randNum(n){
    let num = Math.floor(Math.random() * n);
    if(num === 0){
        num++;
    }
    return num;
}

// function darkMode(){
//     document.documentElement.style.setProperty('')
// }


// startGame(); // calls the function and runs the game

mainGrid.addEventListener('click', playerPosition);
isGameStarted.addEventListener('click', startGame);
isDarkMode.addEventListener('click', darkMode);