// global variables
let mainGrid = document.getElementById('grid');
const gCells = document.getElementsByClassName('game-grid-cells');
let pChoice = document.getElementsByClassName('choice');

const isGameStarted = document.querySelector('.next');
const isDarkMode = document.querySelector('.dark-mode-button');

let possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var dontShade = []; // used to track shaded indexs
const shadedIndexs = []; // current shaded indexs

var playerIndex = []; // players current index
const lastIndex = []; // players last index

let boardOnScreen = []; // board to be displayed to the user
let boardToCompare = []; // board to compare results when game finished

let trackPencilMarks = []; // creates 81 empty arrays for pencil marking

let enableDarkMode = false; // boolean for turning darkmode on and off.
let isPlayerHere = false; // is the player on the board
let isGameOver = false;
let pencilActive = false; // boolean for turning pencil on and off.

var isThisDecision = ''; // in playerChoice
let userInput = ''; // this is the users input

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
        document.documentElement.style.setProperty('--num-bg', getComputedStyle(document.documentElement).getPropertyValue('--num-bg-dark'));
        document.documentElement.style.setProperty('--num-highlight', getComputedStyle(document.documentElement).getPropertyValue('--num-highlight-dark'));
        document.documentElement.style.setProperty('--menu', getComputedStyle(document.documentElement).getPropertyValue('--menu-dark'));
        document.documentElement.style.setProperty('--log-in', getComputedStyle(document.documentElement).getPropertyValue('--log-in-dark'));
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
        document.documentElement.style.setProperty('--num-bg', getComputedStyle(document.documentElement).getPropertyValue('--num-bg-light'));
        document.documentElement.style.setProperty('--num-highlight', getComputedStyle(document.documentElement).getPropertyValue('--num-highlight-light'));
        document.documentElement.style.setProperty('--menu', getComputedStyle(document.documentElement).getPropertyValue('--menu-light'));
        document.documentElement.style.setProperty('--log-in', getComputedStyle(document.documentElement).getPropertyValue('--log-in-light'));
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


function howDifficultIsGame(diff){
    let toRemove = 0;
    // user difficulty will select different outcome
    switch(diff){
        case 1:
            // very easy, remove 28 pieces
            toRemove = 28;
            break;
        case 2:
            // easy, remove 37 pieces
            toRemove = 37;
            break;
        case 3:
            // medium, remove 45 pieces
            toRemove = 45;
            break;
        case 4:
            // hard, remove 51 pieces
            toRemove = 51;
            break;
        case 5:
            // very hard, remove 59 pieces
            toRemove = 59;
            break;
        default:
            // insane, remove 64 pieces
            toRemove = 64;
            break;
    }

    displayedBoard(toRemove); // board to display will be called here.
}

function displayedBoard(toRemove){
    let boardBefore =  printBoard(); // The full board of valid numbers
    boardOnScreen = []; // board to be displayed to the user

    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('system-numbers');
        gCells[i].classList.remove('numbers');
    }

    for(let i = 0; i <= toRemove; i++){ 
        boardOnScreen.push(''); // pushes the disired amount of blank spaces
    }

    while(boardOnScreen.length < 81){
        boardOnScreen.push('-');
    }

    boardOnScreen = shuffle(boardOnScreen); // shuffles the boards blank spaces so its random each time

    for(let i = 0; i < gCells.length; i++){
        if(boardOnScreen[i] === '-'){
            boardOnScreen[i] = boardBefore[i]; // adds the numbers to the board for the user
            gCells[i].innerHTML = `<span class='center-cell'>${boardOnScreen[i]}</span>`;
            gCells[i].classList.add('system-numbers');
        } else{
            gCells[i].innerHTML = `<span class='center-cell'>${boardOnScreen[i]}</span>`; // seperates blank spaces for user input only
            gCells[i].classList.add('numbers');
        }
    }
}

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
    isOnTheBoard(); // calls the function to place the users input on the board
    highlightThisChoiceOnBoard(); // calls when user picks a choice 
}


// function activates for the players choice
function playerChoice(position){
    let playerChoiceIndex = position - 1;

    // removes the choice if its not a pencil choice
    for(let i = 0; i < 10; i++){
        pChoice[i].classList.remove('choice-active');
    }

    pChoice[playerChoiceIndex].classList.add('choice-active');
    userInput = position;
    if(userInput === 0 || userInput === 10){
        userInput = ' ';
    }

    // decides what to do if pencil is Active
    if(userInput === 11 && pencilActive === false){
        pencilActive = true;
    } else if(userInput === 11 && pencilActive === true){
        pencilActive = false;
        pChoice[playerChoiceIndex].classList.remove('choice-active');
    }

    if(userInput === 11){ // after users input turns on pencilActive reset here, dont want 11
        userInput = '  '; // two blanks for pencil
    }

    highlightThisChoiceOnBoard(); // calls when user picks a choice
}

// adds the users input to the board based on the cell number and if it contains the numbers class
function isOnTheBoard(){
    if(gCells[playerIndex].classList.contains('numbers') && pencilActive === false){
        gCells[playerIndex].innerHTML = `<span class='center-cell'>${userInput}</span>`;
        boardOnScreen.splice(playerIndex, 1, userInput);
    }
    if(gCells[playerIndex].classList.contains('numbers') && pencilActive === true){
        createPencilMark();
    }
}

function createEmptyInnerArrays(){
    // creates an empty array and fills it with 81 empty arrays to track marks
    trackPencilMarks = [];
    for(let i = 0; i < 81; i++){
        trackPencilMarks.push([]);
    }
}

// adds a pencil mark or removes a pencil mark
function createPencilMark(){

    if(trackPencilMarks[playerIndex].includes(userInput)){
        let index = trackPencilMarks[playerIndex].indexOf(userInput);
        trackPencilMarks[playerIndex].splice(index, 1, '');
    } else{
        trackPencilMarks[playerIndex].push(userInput);
    }

    let newArray = [];
    for(let i = 0; i < trackPencilMarks[playerIndex].length; i++){
        if(trackPencilMarks[playerIndex][i] !== ''){
            let num = trackPencilMarks[playerIndex][i];
            newArray.push(num);
        }
    }

    trackPencilMarks[playerIndex] = [];
    for(let i = 0; i < newArray.length; i++){
        trackPencilMarks[playerIndex].push(newArray[i]);
    }

    trackPencilMarks[playerIndex].sort();

    printNewPencilMarks(trackPencilMarks[playerIndex]);
}

// if called upon takes array and creates a string to make a code block for pencil markings
function printNewPencilMarks(innerPencilArray){
    let incrementalString = '';
    for(let i = 0; i < innerPencilArray.length; i++){
        incrementalString+=`<span class='pencil-mark'>${innerPencilArray[i]}</span>`;
    }

    gCells[playerIndex].innerHTML = incrementalString;
}


function highlightThisChoiceOnBoard(){

    removeHighlighted();
    // adds the new highlighted cells for the user to see and if eraser do not highlight or same again except pencil
    for(let i = 0; i < gCells.length; i++){
        if(boardOnScreen[i] === userInput && userInput !== ' ' || boardOnScreen[i] === userInput && userInput !== '  '){
            gCells[i].classList.add('num-highlight');
        }
    }
}

function removeHighlighted(){
    // removes the highlighted cells from the last cells
    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('num-highlight');
    }
}

// function to start game
function newGame(){
    removeHighlighted();
    createEmptyInnerArrays();
    displayedBoard(45);
}

// event listeners for starting game and darkmode
isGameStarted.addEventListener('click', newGame);
isDarkMode.addEventListener('click', darkMode);