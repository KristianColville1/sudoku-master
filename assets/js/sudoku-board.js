// solved board - increased performance and quicker to implement
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

// displays the final sudoku board
function printBoard(){
    solvedBoard = createBoard(solvedBoard);
    for(let i = 0; i < gCells.length; i++){
        gCells[i].innerHTML= `<span class='system-numbers'>${solvedBoard[i]}</span>`;
    }
    return solvedBoard;
}

// creates the sudoku board
function createBoard(solvedBoard){
    randomBoard = [];
    repeatManyTimes();
    return solvedBoard;
}

// takes random values num1 and num2 and switches those values within the sudoku array
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

// repeats the above function many times and gets new num1 and num2 values
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

// repeats this process again and again to increase random board generation
function repeatManyTimes(){
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
}