
// Sudoku Rules:
// the grid contains 81 cells made of 9 x 9 cells
// horizontal cell numbers need to include 1 to 9 
// vertical cell numbers need to include 1 to 9
// each 3 x 3 must also contain the numbers 1 to 9

// 17 valid sudoku numbers are needed to generate a single unique solution.

// solved board
let solvedBoard =[
    4, 3, 5, 2, 6, 9, 7, 8, 1,
    6, 8, 2, 5, 7, 1, 4, 9, 3,
    1, 9, 7, 8, 3, 4, 5, 6, 2,
    8, 2, 6, 1, 9, 5, 3, 4, 7,
    3, 7, 4, 6, 8, 2, 9, 1, 5,
    9, 5, 1, 7, 4, 3, 6, 2, 8,
    5, 1, 9, 3, 2, 6, 8, 7, 4,
    2, 4, 8, 9, 5, 7, 1, 3, 6,
    7, 6, 3, 4, 1, 8, 2, 5, 9
]

let randomBoard = [];

// Approach four:
// using this solved board going to try swapping values randomly with other values.

function printBoard(){
    solvedBoard = createBoard(solvedBoard);
    for(let i = 0; i < gCells.length; i++){
        gCells[i].innerHTML= `<span class='numbers'>${solvedBoard[i]}</span>`;
    }
}

function createBoard(solvedBoard){
    randomBoard = [];
    repeat();
    return solvedBoard;
}

function randomTheBoard(num1, num2){
    for(let i = 0; i < 81; i++){
        randomBoard.push("?");
    }

    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === num2){
            randomBoard.splice(i, 1, num1);
            solvedBoard[i] = '+';
        }
    }

    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === num1){
            randomBoard.splice(i, 1, num2);
            solvedBoard[i] = '-';
        }
    }

    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === '+'){
            solvedBoard.splice(i, 1, num1);
        }
    }

    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === '-'){
            solvedBoard.splice(i, 1, num2);
        }
    }

    return solvedBoard;
}

function repeat(){
    let num1 = getRandomIntInclusive(1, 9);
    let num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
    num1 = getRandomIntInclusive(1, 9);
    num2 = getRandomIntInclusive(1, 9);
    randomTheBoard(num1, num2);
}