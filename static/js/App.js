import Board from "./Board.js"

export const board = new Board();

function run() {
    board.createBoard();
    board.drawBoard();
}

run();

console.log(board); 