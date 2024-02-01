import Board from "./board.js"

export const board = new Board();

function run() {
    board.createBoard();
    board.drawBoard();
}

run();

console.log(board);