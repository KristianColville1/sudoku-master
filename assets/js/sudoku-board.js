// solved board - increased performance and quicker to implement
// generates up to 362880 different game boards.
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
];

// displays the final sudoku board
function printBoard(){
    solvedBoard = createBoard(solvedBoard);
    return solvedBoard;
}

// creates the sudoku board
function createBoard(solvedBoard){
    repeatManyTimes();
    return solvedBoard;
}

// takes random values num1 and num2 and switches those values within the sudoku array
function randomTheBoard(num1, num2){
    // checks solved board and then swaps the '?' with a number and replaces that with a '+' inside the solved board
    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === num2){
            solvedBoard[i] = '+';
        }
    }

    // repeats the above with the opposite for num 1 and a '-' symbol
    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === num1){
            solvedBoard[i] = '-';
        }
    }

    // finds the '+' symbol and replaces it with num1
    for(let i = 0; i < 81; i++){
        if(solvedBoard[i] === '+'){
            solvedBoard.splice(i, 1, num1);
        }
    }

    // finds the '-' symbol and replaces it with num2
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
    
    for(let i = 0; i < 81; i++){
        num1 = getRandomIntInclusive(1, 9);
        num2 = getRandomIntInclusive(1, 9);
        randomTheBoard(num1, num2);
    }
}

// repeats this process again and again to increase random board generation
function repeatManyTimes(){
    for(let i = 0; i < 81; i++){
        repeat();
    }
}
