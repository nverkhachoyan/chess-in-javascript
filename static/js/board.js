import { Pawn, Rook, Knight, Bishop, Queen, King } from "./ChessPiece.js"
import Cell from './Cell.js'


class Cells {
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
        // Initializes the cells in a 2D array
        for (let i = 0; i < this.gridSize; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.gridSize; j++) {
                // Choose the color of the cell based on position
                const color = (i + j) % 2 === 0 ? "white" : "black";

                // Place new cell object in the cells array
                this.cells[i][j] = new Cell(i, j, color);

                // Assign a piece to each cell
                this.assignPiece(i, j);
            }
        }
    }

    assignPiece(i, j) {
        // Depending on i, j positions, place appropriate piece
        if (i === 6) {
            this.cells[i][j].piece = new Pawn("white", { x: i, y: j }, this);
        } else if (i === 7) {
            const pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
            this.cells[i][j].piece = new pieces[j]("white", { x: i, y: j }, this);
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
            // cell.element.style.backgroundColor = "rgb(206, 189, 105)";
            cell.element.classList.add("highlight-cell");
        })
    }

    unhighlightCells(givenCells) {
        givenCells.forEach(({ x, y }) => {
            const cell = this.cells[x][y];
            cell.element.classList.remove("highlight-cell");

        })
    }

}


export default Cells;