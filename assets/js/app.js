// global variables
let gameGridCells = document.getElementsByClassName('game-grid-cells');
const isGameStarted = document.querySelector('.start-game')
let direction = 1;
const length = 9;

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

let shadedPos = [];
let playerIndex = 0;
let playerPos = [41]; // places player in the center of the board


let horizontalGrid = [
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

let verticalGrid = [
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

// emptyCells[i].innerHTML = `<span class="numbers"> ${randNum()}</span>`;

// function to start game
function startGame(){
    // reset game each click
    playerPos.forEach(index => gameGridCells[index].classList.remove('player'));
    shadedPos.forEach(index => gameGridCells[index].classList.remove('shaded'));
    a = Math.floor(Math.random() * 81);
    playerPos = [a]; // places player in the center of the board
    // alert('hey game working');
    // a = Math.floor(Math.random() * 9);
    // playerPos = [a + 1]; // places player in the center of the board
    playerPos.forEach(index => gameGridCells[index].classList.add('player'));
    gameGridCells[playerPos].innerHTML = `<span class="numbers"> ${playerPos}</span>`;
    checkGridArray();




    // solving the sudoku board
    // pick a random grid and place a number between 1 and 9 in the grid


    
    // for(let i = 0; i < gameGridCells.length; i++){

    // }


}

function createBoard(){

}

// function to search the main array to locate the player class and highlight the array with class shader horizontally
function checkGridArray(){
    for(let outerArray = 0; outerArray < horizontalGrid.length; outerArray++){
        var innerArraylength = horizontalGrid[outerArray].length;
        for(let innerArray = 0; innerArray < innerArraylength; innerArray++){
            if(gameGridCells[horizontalGrid[outerArray][innerArray]].classList.contains('player')){
                playerIndex = horizontalGrid[outerArray][innerArray];
                horizontalGrid[outerArray].forEach(index => gameGridCells[index].classList.add('shaded'));
                horizontalGrid[outerArray].forEach(index => shadedPos.push(index));
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


// startGame(); // calls the function and runs the game

isGameStarted.addEventListener('click', startGame);