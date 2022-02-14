// global variables
let emptyGridCells = document.getElementsByClassName('game-grid-cells');

const vertically = 9;
const horizontally = 9;

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let localZone = []; // 9 positions
let conflictZone = []; // 19 positions
let emptyArray = [];

let largeGridCells = [ [
    1, 2, 3,    // cell 1
    10, 11, 12,
    19, 20, 21
], [
    4, 5, 6,    // cell 2
    13, 14, 15,
    22, 23, 24
], [
    7, 8, 9,    // cell 3
    16, 17, 18,
    25, 26, 27
], [
    28, 29, 30,    // cell 4
    37, 38, 39,
    46, 47, 48
], [
    31, 32, 33,    // cell 5
    40, 41, 42,
    49, 50, 51
],[
    34, 35, 36,    // cell 6
    43, 44, 45,
    52, 53, 54
], [
    55, 56, 57,    // cell 7
    64, 65, 66,
    73, 74, 75
], [
    58, 59, 60,    // cell 8
    67, 68, 69,
    76, 77, 78
], [
    61, 62, 63,    // cell 9
    70, 71, 72,
    79, 80, 81
]];

// emptyCells[i].innerHTML = `<span class="numbers"> ${randNum()}</span>`;

// function to start game
function startGame(){

    // I want to test iterating through the large cell array and adding the values to the empty array to check it works

    // emptyGridCells[largeGridCells[0][0]-1].innerHTML = `<span class="numbers"> ${randNum()}</span>`;

    // iterating through the array is successful.
    // for(let outside = 0; outside < possibleChoices.length; outside++){
    //     for(let inside = 0; inside < possibleChoices.length; inside++){
    //         emptyGridCells[largeGridCells[outside][inside]-1].innerHTML = `<span class="numbers"> ${randNum()}</span>`;
    //     }
    // }

    // test iterating through 1 grid and placing values
    // for(let i = 0; i < possibleChoices.length; i++){
    //     emptyGridCells[largeGridCells[0][i]- 1].innerHTML = `<span class="numbers"> ${randNum()}</span>`;
    // }
    // testing iterating through one grid at a time successful



    // Now we want to place a random value in a random grid and random position
    // emptyGridCells[largeGridCells[randNum()][randNum()]- 1].innerHTML = `<span class="numbers"> ${randNum()}</span>`;
    // for(let i = 0; i < possibleChoices.length; i++){
    //     emptyGridCells[largeGridCells[9 - 1][i]- 1].innerHTML = `<span class="numbers"> ${randNum()}</span>`;
    // }

    // adding 81 positions to the empty array from 0 - 81
    for(let i = 0; i < emptyGridCells.length; i++){
        emptyArray.push('null');
    }

    // solve the board and save it the the empty array and the final array.




}

// Use functions to call when new random numbers needed
function randNum(){
    let num = Math.floor(Math.random() * 9);
    if(num === 0){
        num++;
    }
    return num;
}

startGame(); // calls the function and runs the game