// global variables
let mainGrid = document.getElementById('grid');
const gCells = document.getElementsByClassName('game-grid-cells');
let pChoice = document.getElementsByClassName('choice');

const isGameStarted = document.querySelector('.start-game');
const isDarkMode = document.querySelector('.dark-mode-button');

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var dontShade = []; // used to track shaded indexs
const shadedIndexs = []; // current shaded indexs

let playerIndex = []; // players current index
const lastIndex = []; // players last index

let enableDarkMode = false; // boolean for turning darkmode on and off.
let isPlayerHere = false; // is the player on the board
var isThisDecision = ''; // in playerChoice

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

// classes to these rows and columns for readability
vGrid[3].forEach(index => gCells[index].classList.add('margin-left'));
vGrid[6].forEach(index => gCells[index].classList.add('margin-left'));
hGrid[3].forEach(index => gCells[index].classList.add('margin-top'));
hGrid[6].forEach(index => gCells[index].classList.add('margin-top'));

function lightOn(){
    
}
// darkmode function 
function darkMode(){
    if(enableDarkMode === false){
        document.documentElement.style.setProperty('--shaded-cells', getComputedStyle(document.documentElement).getPropertyValue('--shaded-cells-dark'));
        document.documentElement.style.setProperty('--player-cell', getComputedStyle(document.documentElement).getPropertyValue('--player-cell-dark'));
        document.documentElement.style.setProperty('--main-bg', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-dark'));
        document.documentElement.style.setProperty('--header-bg', getComputedStyle(document.documentElement).getPropertyValue('--header-bg-dark'));
        document.documentElement.style.setProperty('--logo', getComputedStyle(document.documentElement).getPropertyValue('--logo-dark'));
        document.documentElement.style.setProperty('--game-bg', getComputedStyle(document.documentElement).getPropertyValue('--game-bg-dark'));
        document.documentElement.style.setProperty('--game-border', getComputedStyle(document.documentElement).getPropertyValue('--game-border-dark'));
        document.documentElement.style.setProperty('--numbers', getComputedStyle(document.documentElement).getPropertyValue('--numbers-dark'));
        document.documentElement.style.setProperty('--choice', getComputedStyle(document.documentElement).getPropertyValue('--choice-dark'));
        document.documentElement.style.setProperty('--choice-active', getComputedStyle(document.documentElement).getPropertyValue('--choice-active-dark'));
        document.documentElement.style.setProperty('--system-numbers', getComputedStyle(document.documentElement).getPropertyValue('--system-numbers-dark'));
        enableDarkMode = true;
    }else if(enableDarkMode === true){
        document.documentElement.style.setProperty('--shaded-cells', getComputedStyle(document.documentElement).getPropertyValue('--shaded-cells-light'));
        document.documentElement.style.setProperty('--player-cell', getComputedStyle(document.documentElement).getPropertyValue('--player-cell-light'));
        document.documentElement.style.setProperty('--main-bg', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-light'));
        document.documentElement.style.setProperty('--header-bg', getComputedStyle(document.documentElement).getPropertyValue('--header-bg-light'));
        document.documentElement.style.setProperty('--logo', getComputedStyle(document.documentElement).getPropertyValue('--logo-light'));
        document.documentElement.style.setProperty('--game-bg', getComputedStyle(document.documentElement).getPropertyValue('--game-bg-light'));
        document.documentElement.style.setProperty('--game-border', getComputedStyle(document.documentElement).getPropertyValue('--game-border-light'));
        document.documentElement.style.setProperty('--numbers', getComputedStyle(document.documentElement).getPropertyValue('--numbers-light'));
        document.documentElement.style.setProperty('--choice', getComputedStyle(document.documentElement).getPropertyValue('--choice-light'));
        document.documentElement.style.setProperty('--choice-active', getComputedStyle(document.documentElement).getPropertyValue('--choice-active-light'));
        document.documentElement.style.setProperty('--system-numbers', getComputedStyle(document.documentElement).getPropertyValue('--system-numbers-light'));
        enableDarkMode = false;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }// code sourced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }//function taken from stackoverflow, it is the Fisher-Yates Shuffle algorithm. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

// locate the player class and highlight arrays with class shader
function playerPosition(position){

    // resets the board and then adds the players position back each time when called
    lastIndex.forEach(index => gCells[index].classList.remove('player'));
    shadedIndexs.forEach(index => gCells[index].classList.remove('shaded'));

    // parameter position activates shading colors and player location on board
    playerIndex = [Number(position)];
    playerIndex.forEach(index => gCells[index].classList.add('player'));

    // Adds lighter background to those cells except player position
    for(let o = 0; o < vGrid.length; o++){
        for(let i = 0; i < 9; i++){
            if(gCells[vGrid[o][i]].classList.contains('player')){
                vGrid[o].forEach(index => gCells[index].classList.add('shaded'));
                vGrid[o].forEach(index => shadedIndexs.push(index));
                vGrid[o].forEach(index => lastIndex.push(index));
            }
            if(gCells[lGrid[o][i]].classList.contains('player')){
                lGrid[o].forEach(index => gCells[index].classList.add('shaded'));
                lGrid[o].forEach(index => shadedIndexs.push(index));
                lGrid[o].forEach(index => lastIndex.push(index));
            }
            if(gCells[hGrid[o][i]].classList.contains('player')){
                hGrid[o].forEach(index => gCells[index].classList.add('shaded'));
                hGrid[o].forEach(index => shadedIndexs.push(index));
                hGrid[o].forEach(index => lastIndex.push(index));
            }
        }
    }
    gCells[position].classList.remove('shaded'); 
}

// function activates for the players choice
function playerChoice(position){
    let playerChoiceIndex = position - 1;

    for(let i = 0; i < pChoice.length; i++){
        pChoice[i].classList.remove('choice-active');
    }
    pChoice[playerChoiceIndex].classList.add('choice-active');

    playerChoiceIndex = position;
    switch(playerChoiceIndex){
        case 1:
            isThisDecision = `<span class='numbers'>${1}</span>`;
            break;
        case 2:
            isThisDecision = `<span class='numbers'>${2}</span>`;
            break;
        case 3:
            isThisDecision = `<span class='numbers'>${3}</span>`;
            break;
        case 4:
            isThisDecision = `<span class='numbers'>${4}</span>`;
            break;
        case 5:
            isThisDecision = `<span class='numbers'>${5}</span>`;
            break;
        case 6:
            isThisDecision = `<span class='numbers'>${6}</span>`;
            break;
        case 7:
            isThisDecision = `<span class='numbers'>${7}</span>`;
            break;
        case 8:
            isThisDecision = `<span class='numbers'>${8}</span>`;
            break;
        case 9:
            isThisDecision = `<span class='numbers'>${9}</span>`;
            break;
        default:
            isThisDecision = `<span class='numbers'>${eraser}</span>`;
            break;
    }
    return isThisDecision;
}

function displayedBoard(decide){
    let boardBefore =  printBoard();
    let boardMiddleWay = boardBefore;

    let displayedBoard = [];


 
}

function howDifficultIsGame(diff){
    let decide = 0;
    // user difficulty will select different outcome
    switch(diff){
        case 1:
            // very easy, remove 28 pieces
            decide = 28;
            break;
        case 2:
            // easy, remove 37 pieces
            decide = 37;
            break;
        case 3:
            // medium, remove 45 pieces
            decide = 45;
            break;
        case 4:
            // hard, remove 51 pieces
            decide = 51;
            break;
        case 5:
            // very hard, remove 59 pieces
            decide = 59;
            break;
        default:
            // insane, remove 64 pieces
            decide = 64;
            break;
    }

    displayedBoard(decide);
}

// function to start game
function startGame(){

}



// event listeners for starting game and darkmode
isGameStarted.addEventListener('click', startGame);
isDarkMode.addEventListener('click', darkMode);