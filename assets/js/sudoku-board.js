// Approach four:

// Sudoku Rules:
// the grid contains 81 cells made of 9 x 9 cells
// horizontal cell numbers need to include 1 to 9 
// vertical cell numbers need to include 1 to 9
// each 3 x 3 must also contain the numbers 1 to 9

// 17 valid sudoku numbers are needed to generate a single unique solution.

// 2D solved board, with 9 arrays inside for the rows
let solvedBoard =
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
]