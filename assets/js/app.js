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


let largeGridCells = [
    [0,1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16,17],
    [18,19,20,21,22,23,24,25,26],
    [27,28,29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42,43,44],
    [45,46,47,48,49,50,51,52,53],
    [54,55,56,57,58,59,60,61,62],
    [63,64,65,66,67,68,69,70,71],
    [72,73,74,75,76,77,78,79,80]
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

function checkGridArray(){
    // alert(largeGridCells[0]);
    for(let outerArray = 0; outerArray < largeGridCells.length; outerArray++){
        var innerArraylength = largeGridCells[outerArray].length;
        for(let innerArray = 0; innerArray < innerArraylength; innerArray++){
            if(gameGridCells[largeGridCells[outerArray][innerArray]].classList.contains('player')){
                playerIndex = largeGridCells[outerArray][innerArray];
                largeGridCells[outerArray].forEach(index => gameGridCells[index].classList.add('shaded'));
                largeGridCells[outerArray].forEach(index => shadedPos.push(index));
                // largeGridCells[outerArray].forEach(index => gameGridCells[index - 1].innerHTML = `<span class="numbers"> ${randNum(9 - innerArray)}</span>`);
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