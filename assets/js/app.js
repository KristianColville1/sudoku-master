// global variables
const isDarkMode = document.querySelector('.dark-mode-button');
const helpUser = document.getElementsByClassName('help-menu');
const darkIconSun = document.getElementsByClassName('fa-sun');
const darkIconMoon = document.getElementsByClassName('fa-moon');
const exitRules = document.getElementsByClassName('fa-times');
const openRules = document.getElementsByClassName('fa-question');

const mainGrid = document.getElementById('grid');
const numPad = document.getElementsByClassName('player-num-choice');
const gCells = document.getElementsByClassName('game-grid-cells');
const pChoice = document.getElementsByClassName('choice');
const numChoice = document.getElementsByClassName('p-number');

const firstMenu = document.getElementsByClassName('menu-part-one');
const secondMenu = document.getElementsByClassName('menu-part-two');
const lastMenu = document.getElementsByClassName('last-menu');
const returnMenu = document.getElementsByClassName('return-menu');
const hasEnteredName = document.getElementById('next');

const displayedDiff = document.getElementsByClassName('display-diff');
const setting = document.getElementsByClassName('diff-options');
const hasWon = document.getElementsByClassName('win');
const hasLost = document.getElementsByClassName('lose');

const nameWarning = document.getElementsByClassName('name-warning');
const profile = document.getElementsByClassName('fa-user-circle');
const clock = document.getElementsByClassName('fa-clock');
const userTime = document.getElementById('user-time');

const possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var dontShade = []; // used to track shaded indexs
const shadedIndexs = []; // current shaded indexs

var playerIndex = []; // players current index
const lastIndex = []; // players last index

let boardOnScreen = []; // board to be displayed to the user
let boardBefore = []; // board to compare results when game finished
let trackPencilMarks = []; // creates 81 empty arrays for pencil marking
let userHistory = []; // array to store user game history

let enableDarkMode = false; // boolean for turning darkmode on and off.
let userNeedsHelp = false; // boolean for toggling help menu on and off.
let pencilActive = false; // boolean for turning pencil on and off.
let isGameOver = false; // checks if game is over

var isThisDecision = ''; // in playerChoice
let userInput = ''; // this is the users input
let userName = ''; // empty string for the users name

let hours = 0;
let minuteSmall = 0;
let secondsSmall = 0;
let minuteBig = 0;
let secondsBig = 0; // hourSmall, minuteSmall and secondsSmall for clock
let time; // variable assigned to function for counting

let counter = 0;
let menuTimeCounter = 0;

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


// this function is activated when user chooses a difficulty
function startGame(){
    resetVars();
    fillNumberPad();
    removeHighlighted();
    createEmptyInnerArrays();
    getInnerTextForDiff();
}

// when called it resets these variables to default values
function resetVars(){
    dontShade = []; 
    playerIndex = []; 
    boardOnScreen = []; 
    boardBefore = []; 
    trackPencilMarks = []; 
    history = []; 
    enableDarkMode = false; 
    userNeedsHelp = false; 
    pencilActive = false; 
    isGameOver = false; 
    isThisDecision = ''; 
    userInput = '';
    hours = 0;
    minuteSmall = 0;
    secondsSmall = 0;
    minuteBig = 0;
    secondsBig = 0;
    counter = 0;
    menuTimeCounter = 0;
    addClassHidden();
}

// adds the class hidden and removes end game background so the game can be played again
function addClassHidden(){
    hasWon[0].classList.add('hidden');
    hasLost[0].classList.add('hidden');
    lastMenu[0].classList.add('hidden');
    returnMenu[0].classList.add('hidden');
    profile[0].classList.add('hidden');
    clock[0].classList.add('hidden');
    displayedDiff[0].classList.add('hidden');

    // removes the backgrounds on each new game for the player
    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('loser');
        gCells[i].classList.remove('winner');

    }
    for(let i = 0; i < numChoice.length; i++){
        numChoice[i].innerHTML = '';
    }

    //resets the clock also
    userTime.innerText = '';
}

// initial fill for the number pad
function fillNumberPad(){
    for(let i = 0; i < numChoice.length; i++){
        numChoice[i].innerText = i + 1;
    }
}

// when user selects cell or puts value into cell it checks here and will decrease amountLeft if that value is on board
function checkNumPad(){
    let amountLeft = 9;
    for(let i = 0; i < numChoice.length; i++){
        let counter = i + 1;
        amountLeft = 9;
        for(let j = 0; j < gCells.length; j++){
            if(boardOnScreen[j] === counter){
                amountLeft--;
            }
        }
        numChoice[i].innerHTML = `${counter}<span class="n-counter">${amountLeft}</span>`;
    }
}

// creates a new board and removes random pieces from the board to display on screen
function displayedBoard(toRemove){
    boardBefore =  printBoard(); // The full board of valid numbers
    boardOnScreen = []; // board to be displayed to the user

    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('system-numbers');
        gCells[i].classList.remove('numbers');
    }

    for(let i = 0; i < toRemove; i++){ 
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
    checkNumPad(); // adds amounts of nums left on start of game
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
    checkNumPad();
    checkIfAllCorrect(); // checks if the board is correct
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

    if(pencilActive === false){
        for(let i = 0; i < gCells.length; i++){ // when user selects a new choice remove the shaded cells/ player index for readability
            gCells[i].classList.remove('shaded');
            gCells[i].classList.remove('player');
        }
    }
}

// adds the users input to the board based on the cell number and if it contains the numbers class
function isOnTheBoard(){
    let miniSwitch = false; // boolean to stop user accidently erasing cell if no user input at all

    for(let i = 0; i < pChoice.length; i++){
        if(pChoice[i].classList.contains('choice-active') || userInput === ' '){
            miniSwitch = true;
        }
    }

    if(miniSwitch === true){
        if(gCells[playerIndex].classList.contains('numbers') && pencilActive === false){
                    trackPencilMarks[playerIndex] = [];
                    gCells[playerIndex].innerHTML = `<span class='center-cell'>${userInput}</span>`;
                    recordHistory(playerIndex, boardOnScreen[playerIndex], userInput);
                    boardOnScreen.splice(playerIndex, 1, userInput);
        }
        if(gCells[playerIndex].classList.contains('numbers') && pencilActive === true){
            createPencilMark();
        }
    }
    miniSwitch = false; // turned back off after checking for choice active
}

// adds a pencil mark or removes a pencil mark
function createPencilMark(){
    // if user input is empty string, eraser or pencil do not mark the cell otherwise do
    if(userInput === '' || userInput === ' ' || userInput === '  '){
        // dont do anything as we dont want these values on the board in pencil markings
    }else {
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
    
        // place pencil marks in accending order from 1 - 9 within cells
        trackPencilMarks[playerIndex].sort();

        // calls the print function when decision made
        printNewPencilMarks(trackPencilMarks[playerIndex]);
    }
}

// if called upon takes array and creates an empty string to make a code block for pencil markings
function printNewPencilMarks(innerPencilArray){
    // each time called it rewrites the values in the cell according to the innerPencil array values
    let incrementalString = '';
    for(let i = 0; i < innerPencilArray.length; i++){
        incrementalString+=`<span class='pencil-mark'>${innerPencilArray[i]}</span>\n`;
    }

    gCells[playerIndex].innerHTML = incrementalString;
}

// adds a different background to numbers user selects on the sudoku board, highlighting their positions
function highlightThisChoiceOnBoard(){

    removeHighlighted();
    // adds the new highlighted cells for the user to see and if eraser do not highlight or same again except pencil
    if(userInput === ' ' || userInput === '  ' || userInput === ''){

    } else{
        for(let i = 0; i < gCells.length; i++){
            if(boardOnScreen[i] === userInput){
                gCells[i].classList.add('num-highlight');
            }
            if(boardOnScreen[i] === ' ' || boardOnScreen[i] === '  ' || boardOnScreen[i] === '   '){
                trackPencilMarks[i] = []; // makes sure to empty the inner array incase eraser, pencil or undo move
            }
            // if there are pencil marks with user input and the board does not contain empty strings or blank spaces, highlight cells.
            if(trackPencilMarks[i].includes(userInput)){
                gCells[i].classList.add('num-highlight');
            }
        }
    }
}

// removes highlighted background from the cells when called
function removeHighlighted(){
    // removes the highlighted cells from the last cells
    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('num-highlight');
    }
}

// function to get user name and assigning it to variable userName, checks if name is greater  2 characters
function getUserName(){
    let name = document.getElementById('name');
    userName = name.value; // assign the users name to this variable

    if(name.value.length > 1){
        pullUpDiffMenu(); // call a function to display the next screen
    } else{
        nameWarning[0].classList.remove('hidden');
    }
}

// pulls up the difficulty menu for the user and hides the first menu after user selects next
function pullUpDiffMenu(){
    for(let i = 0; i < firstMenu.length; i++){
        firstMenu[i].classList.add('hidden');
    }
    secondMenu[0].classList.remove('hidden');
}

// displays difficulty setting to user and navigates left or right when user clicks arrows and hides the other settings
function nextDifficulty(direction){
    let index = 0;
    if(direction === 'left'){
        for(let i = 0; i < setting.length; i++){
            if(!setting[i].classList.contains('hidden')){
                setting[i].classList.add('hidden');

                if(i < 1){
                    index = setting.length - 1;
                    setting[index].classList.remove('hidden');
                } else{
                    setting[i - 1].classList.remove('hidden');
                }
                break;
            }
        }
    }

    if(direction === 'right'){
        for(let i = 0; i < setting.length; i++){
            if(!setting[i].classList.contains('hidden')){
                setting[i].classList.add('hidden');

                if(i < setting.length - 1){
                    setting[i + 1].classList.remove('hidden');

                } else{
                    index = 0;
                    setting[index].classList.remove('hidden');
                }
                break;
            }
        }
    }
}

// gets the inner text within the html for diff-options and converts it to a value for removing certain amounts of cells,
// it enables different difficulities.
function getInnerTextForDiff(){
    let diff = '';
    let displayDiffText = document.getElementsByClassName('displayed-diff');

    for(let i = 0; i < setting.length; i++){
        if(!setting[i].classList.contains('hidden')){
            diff = setting[i].innerHTML;
            displayDiffText[0].innerHTML = diff;
        }
    }
    
    switch(diff){
        case 'Very Easy':
            diff = 1;
            break;
        case 'Easy':
            diff = 2;
            break;
        case 'Medium':
            diff = 3;
            break;
        case 'Hard':
            diff = 4;
            break;
        case 'Very Hard':
            diff = 5;
            break;
        default:
            diff = 6;
            break;
    }
    hideDiffMenu(); // hides the menu straight away when called
    howDifficultIsGame(diff); // calls the function here to decide how many pieces to remove
}

// when called it decides how many numbers to remove from the board depending on the difficulty setting
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
            // medium, remove 42 pieces
            toRemove = 42;
            break;
        case 4:
            // hard, remove 48 pieces
            toRemove = 48;
            break;
        case 5:
            // very hard, remove 50 pieces
            toRemove = 50;
            break;
        default:
            // insane, remove 55 pieces
            toRemove = 55;
            break;
    }
    displayedBoard(toRemove); // board to display will be called here.
}

// hides the difficulty menu straight away when called
function hideDiffMenu(){
    secondMenu[0].classList.add('hidden');
    mainGrid.classList.remove('hidden');
    numPad[0].classList.remove('hidden');
    displayedDiff[0].classList.remove('hidden');
    showNameAndTime();
}

// displays the users name and the time user takes to solve board
function showNameAndTime(){
    profile[0].classList.remove('hidden');
    profile[0].innerHTML = `<span class="users-name">${userName}</span>`;
    clock[0].classList.remove('hidden');

    hours = 0;
    minuteSmall = 0;
    secondsSmall = 1; // negates the delay when loading board
    minuteBig = 0;
    secondsBig = 0;

    time = setInterval(countUserTime, 1000); // counts users time and displays time on board 
}

// starts counting the time for user completing the game
function countUserTime(){
    if(secondsSmall === 10){
        secondsBig++;
        secondsSmall = 0;
    }
    if(secondsBig === 6){
        minuteSmall++;
        secondsBig = 0;
    }
    if(minuteSmall === 10){
        minuteBig++;
        minuteSmall = 0;
    }
    if(minuteBig === 6){
        hours++;
        minuteBig = 0;
    }
    if(isGameOver === true){
        clearInterval(time);
    }

    userTime.innerText = `${hours} : ${minuteBig}${minuteSmall} : ${secondsBig}${secondsSmall++}`;
}

// checks if there is empty cells or eraser markings and if so decides when game is over
function checkIfAllCorrect(){
    let hasLost = false;

    if(!boardOnScreen.includes('') && !boardOnScreen.includes(' ')){
        for(let i = 0; i < gCells.length; i++){
            if(boardOnScreen[i] !== boardBefore[i]){
                hasLost = true;
            }
        }
        if(hasLost === false){
            wonGame();
        } else{
            lostGame();
        }
    }
}

// when user wins game this is called and the winning message appears
function wonGame(){
    // remove classes and fill grid with green background and display winning message
    for(let i = 0; i < gCells.length; i++){
        gCells[i].classList.remove('numbers');
        gCells[i].classList.remove('player');
        gCells[i].classList.remove('shaded'); 

        // add winning background to cells when game is over and make the cell a system number to match style
        gCells[i].classList.add('system-numbers');
        gCells[i].classList.add('winner');
    }
    for(let i = 0; i < pChoice.length; i++){
        pChoice[i].classList.remove('choice-active');
    }
    hasWon[0].classList.add('ani-small-big');
    hasWon[0].classList.add('layer-four');
    hasWon[0].classList.remove('hidden');
    lastMenu[0].classList.remove('hidden');

    isGameOver = true;
    openReturnMenu();
}

// when user wins game this is called and the lost message appears
function lostGame(){
        // remove classes and fill grid with purple background and display losing message
        for(let i = 0; i < gCells.length; i++){
            gCells[i].classList.remove('numbers');
            gCells[i].classList.remove('player');
            gCells[i].classList.remove('shaded'); 
    
            // add loosing background to cells when game is over and make the cell a system number to match style
            gCells[i].classList.add('system-numbers');
            gCells[i].classList.add('loser');
        }
        for(let i = 0; i < pChoice.length; i++){
            pChoice[i].classList.remove('choice-active');
        }

        hasWon[0].classList.add('hidden');
        hasLost[0].classList.remove('hidden');
        hasLost[0].classList.add('ani-small-big');
        hasLost[0].classList.add('layer-four');
        lastMenu[0].classList.remove('hidden');

        isGameOver = true;
        openReturnMenu();
}

// help menu button toggles on and off showing sudoku rules
function helpInfo(){
    if(userNeedsHelp === false){
        helpUser[0].classList.remove('hidden');
        displayedDiff[0].classList.add('hidden');
        openRules[0].classList.add('hidden');
        exitRules[0].classList.remove('hidden');
        userNeedsHelp = true;
    } else if(userNeedsHelp === true){
        helpUser[0].classList.add('hidden');
        displayedDiff[0].classList.remove('hidden');
        openRules[0].classList.remove('hidden');
        exitRules[0].classList.add('hidden');
        userNeedsHelp = false;
    }
}

// when game is finished the return menu will pop up after a few seconds
function openReturnMenu(){
    counter = setInterval(passTime, 1000);
}

// checks if a few seconds have passed and displays the return menu for the user
function passTime(){
    menuTimeCounter++;
    if(menuTimeCounter >= 5){
        clearInterval(counter);
        returnMenu[0].classList.remove('hidden');
    }
}

// creates an empty array and fills it with 81 empty arrays to track marks
function createEmptyInnerArrays(){
    trackPencilMarks = [];
    for(let i = 0; i < 81; i++){
        trackPencilMarks.push([]);
    }
}

// function to recored the history of user choices, the cell index, the value already in the cell and the new choice
function recordHistory(cellIndex, insideCell, newChoice){
    let cellString = String(cellIndex);
    userHistory.push([cellString, insideCell, newChoice]);

}

// when called it reverses the last move
function undoLastMove(){
    if(userHistory.length > 0){
        let index = Number(userHistory[userHistory.length -1][0]);
        let lastMove = userHistory[userHistory.length -1][1];
        if(lastMove === ''){
            lastMove = '   '; // makes last move 3 blank spaces to make sure pencil doesn't highlight
        }
        gCells[index].innerHTML = `<span class='center-cell'>${lastMove}</span>`;
        boardOnScreen.splice(index, 1, lastMove);
        userHistory.pop();
    }
    checkNumPad(); // checks num pad amounts on undo move
}

// called if user wants to play same settings again
function playAgain(){
    startGame();
}

// called if user wants to change difficulty
function displayDiffMenu(){
    addClassHidden();
    pullUpDiffMenu();
}

// code sourced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

//function taken from stackoverflow, it is the Fisher-Yates Shuffle algorithm. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
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
  }

// darkmode function 
function darkMode(){
    if(enableDarkMode === false){
        document.documentElement.style.setProperty('--shaded-cells', getComputedStyle(document.documentElement).getPropertyValue('--shaded-cells-dark'));
        document.documentElement.style.setProperty('--player-cell', getComputedStyle(document.documentElement).getPropertyValue('--player-cell-dark'));
        document.documentElement.style.setProperty('--main-bg-1', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-1-dark'));
        document.documentElement.style.setProperty('--main-bg-2', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-2-dark'));
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
        document.documentElement.style.setProperty('--menu-text', getComputedStyle(document.documentElement).getPropertyValue('--menu-text-dark'));
        document.documentElement.style.setProperty('--footer-text', getComputedStyle(document.documentElement).getPropertyValue('--footer-text-dark'));
        document.documentElement.style.setProperty('--footer-bg', getComputedStyle(document.documentElement).getPropertyValue('--footer-bg-dark'));
        enableDarkMode = true;

        darkIconMoon[0].classList.add('hidden');
        darkIconSun[0].classList.remove('hidden');
    }else if(enableDarkMode === true){
        document.documentElement.style.setProperty('--shaded-cells', getComputedStyle(document.documentElement).getPropertyValue('--shaded-cells-light'));
        document.documentElement.style.setProperty('--player-cell', getComputedStyle(document.documentElement).getPropertyValue('--player-cell-light'));
        document.documentElement.style.setProperty('--main-bg-1', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-1-light'));
        document.documentElement.style.setProperty('--main-bg-2', getComputedStyle(document.documentElement).getPropertyValue('--main-bg-2-light'));
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
        document.documentElement.style.setProperty('--menu-text', getComputedStyle(document.documentElement).getPropertyValue('--menu-text-light'));
        document.documentElement.style.setProperty('--footer-text', getComputedStyle(document.documentElement).getPropertyValue('--footer-text-light'));
        document.documentElement.style.setProperty('--footer-bg', getComputedStyle(document.documentElement).getPropertyValue('--footer-bg-light'));
        enableDarkMode = false;

        darkIconMoon[0].classList.remove('hidden');
        darkIconSun[0].classList.add('hidden');
    }
}

// event listeners for starting game and darkmode
hasEnteredName.addEventListener('click', getUserName);
isDarkMode.addEventListener('click', darkMode);