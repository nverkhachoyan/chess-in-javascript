const container = document.getElementById("container");
const board = [];
const chessGridSize = 8;
const cellDimensions = { x: 40, y: 40 };

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
    }
}

function createBoard() {
    for (var i = 0; i < chessGridSize; i++) {
        board[i] = [];
        for (var j = 0; j < chessGridSize; j++) {
            board[i][j] = new Cell(i, j);
        }
    }
}

function drawBoard() {
    for (var i = 0; i < chessGridSize; i++) {
        for (var j = 0; j < chessGridSize; j++) {
            container.appendChild(board[i][j].element);
        }
    }
}

// Pieces



function run() {
    createBoard();
    drawBoard();
}

run();