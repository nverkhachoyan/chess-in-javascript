import { Pawn, Rook, Knight, Bishop, Queen, King } from "./chessPiece.js"

const container = document.getElementById("container");
const board = [];
const gridSize = 8;

class Cell {
    constructor(x, y) {
        this.pos = { x, y };

        this.element = document.createElement("div");
        this.element.setAttribute("id", "cell-" + this.pos.x + "-" + this.pos.y);
        this.element.setAttribute("class", "cell");
        this.element.addEventListener("mouseover", (event) => {
            this.element.style.backgroundColor = "rgb(206, 189, 105)";
        });
        this.element.addEventListener("mouseout", (event) => {
            this.element.style.backgroundColor = "rgb(222, 203, 112)";
        });

        this.piece = null;
    }
}

function createBoard() {
    for (let i = 0; i < gridSize; i++) {
        board[i] = [];
        for (let j = 0; j < gridSize; j++) {
            board[i][j] = new Cell(i, j);
            if (i === 6) {
                board[i][j].piece = new Pawn("white", { x: i, y: j });
            } else if (i === 7 && (j === 0 || j === 7)) {
                board[i][j].piece = new Rook("white", { x: i, y: j });
            } else if (i === 7 && (j === 1 || j === 6)) {
                board[i][j].piece = new Knight("white", { x: i, y: j });
            } else if (i === 7 && (j === 2 || j === 5)) {
                board[i][j].piece = new Bishop("white", { x: i, y: j });
            } else if (i === 7 && j === 3) {
                board[i][j].piece = new Queen("white", { x: i, y: j });
            } else if (i === 7 && j === 4) {
                board[i][j].piece = new King("white", { x: i, y: j });
            }

        }
    }
}

function drawBoard() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            container.appendChild(board[i][j].element);
            if (board[i][j].piece != null) {
                let piece = board[i][j].piece;
                board[i][j].element.appendChild(piece.render());
            }
        }
    }
}

export { board, createBoard, drawBoard };