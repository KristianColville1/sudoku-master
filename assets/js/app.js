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
let playerPos = [68]; // places player in the center of the board


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

    // alert('hey game working');
    playerPos.forEach(index => gameGridCells[index - 1].classList.add('player'));
    // largeGridCells[0].forEach(index => gameGridCells[index - 1].classList.add('shaded'));



    // gameGridCells[largeGridCells[0][0] - 1].classList.add('shaded');




    checkGridArray();
    playerPos.forEach(index => gameGridCells[index - 1].classList.add('player'));
}

function checkGridArray(){
    // alert(largeGridCells[0]);
    for(let outerArray = 0; outerArray < largeGridCells.length; outerArray++){
        var innerArraylength = largeGridCells[outerArray].length;
        for(let innerArray = 0; innerArray < innerArraylength; innerArray++){
            if(gameGridCells[largeGridCells[outerArray][innerArray]].classList.contains('player')){
                alert('test');
                largeGridCells[outerArray].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                // if(outerArray === 0 || outerArray === 3 || outerArray === 6){
                //     largeGridCells[outerArray + 1].forEach(index => gameGridCells[index - 1].classList.add('shaded')); // left rows
                //     largeGridCells[outerArray + 2].forEach(index => gameGridCells[index - 1].classList.add('shaded'));

                //     if(outerArray < 6){
                //         largeGridCells[outerArray + 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                //         largeGridCells[outerArray + 6].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                //     }
                    
                // }
                // if(outerArray === 2 || outerArray === 5 || outerArray === 8){
                //     largeGridCells[outerArray - 1].forEach(index => gameGridCells[index - 1].classList.add('shaded')); // right rows
                //     largeGridCells[outerArray - 2].forEach(index => gameGridCells[index - 1].classList.add('shaded'));

                //     if(outerArray < 6){
                //         largeGridCells[outerArray + 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                //         largeGridCells[outerArray + 6].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                //     }
                // }
                switch(outerArray){
                    case 1:
                        largeGridCells[outerArray - 1].forEach(index => gameGridCells[index - 1].classList.add('shaded')); // middle row one
                        largeGridCells[outerArray + 1].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray + 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray + 6].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        largeGridCells[outerArray - 1].forEach(index => gameGridCells[index - 1].classList.add('shaded')); // middle row two
                        largeGridCells[outerArray + 1].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray + 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray - 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        largeGridCells[outerArray - 1].forEach(index => gameGridCells[index - 1].classList.add('shaded')); // middle row three
                        largeGridCells[outerArray + 1].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray - 3].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        largeGridCells[outerArray - 6].forEach(index => gameGridCells[index - 1].classList.add('shaded'));
                        break;
                    case 8:
                        break;
                    default:
                        break;

                }
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