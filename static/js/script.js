import { board, createBoard, drawBoard } from "./board.js"

function run() {
    createBoard();
    drawBoard();
}

run();

console.log(board);