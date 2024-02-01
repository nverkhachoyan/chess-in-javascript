import { Pawn, Rook, Knight, Bishop, Queen, King } from "./chessPiece.js"
import Cell from './Cell.js'


class cells {
    constructor() {
        this.container = document.getElementById("container");
        this.cells = [];
        this.gridSize = 8;
        this.createBoard = this.createBoard.bind(this);
        this.drawBoard = this.drawBoard.bind(this);
        this.highlightCells = this.highlightCells.bind(this);
        this.unhighlightCells = this.unhighlightCells.bind(this);
    };


    createBoard() {
        for (let i = 0; i < this.gridSize; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.gridSize; j++) {
                this.cells[i][j] = new Cell(i, j);
                if (i === 6) {
                    this.cells[i][j].piece = new Pawn("white", { x: i, y: j }, this);
                } else if (i === 7 && (j === 0 || j === 7)) {
                    this.cells[i][j].piece = new Rook("white", { x: i, y: j }, this);
                } else if (i === 7 && (j === 1 || j === 6)) {
                    this.cells[i][j].piece = new Knight("white", { x: i, y: j }, this);
                } else if (i === 7 && (j === 2 || j === 5)) {
                    this.cells[i][j].piece = new Bishop("white", { x: i, y: j }, this);
                } else if (i === 7 && j === 3) {
                    this.cells[i][j].piece = new Queen("white", { x: i, y: j }, this);
                } else if (i === 7 && j === 4) {
                    this.cells[i][j].piece = new King("white", { x: i, y: j }, this);
                }

            }
        }
    }

    drawBoard() {
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                this.container.appendChild(this.cells[i][j].element);
                if (this.cells[i][j].piece != null) {
                    let piece = this.cells[i][j].piece;
                    this.cells[i][j].element.appendChild(piece.render());
                }
            }
        }
    }

    highlightCells(givenCells) {
        givenCells.forEach(({ x, y }) => {
            const cell = this.cells[x][y];
            cell.element.style.backgroundColor = "rgb(206, 189, 105)";
        })
    }

    unhighlightCells(givenCells) {
        givenCells.forEach(({ x, y }) => {
            const cell = this.cells[x][y];
            cell.element.style.backgroundColor = "rgb(222, 203, 112)";
        })
    }

}


export default cells;