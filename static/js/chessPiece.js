import { board } from "./board.js";

export class ChessPiece {
    constructor(color, position) {
        this.color = color;
        this.position = position;
        this.isFirstMove = false;
    }

    move(dest) {
        throw new Error("This method is abstract and should be overridden");
    }

}

export class Pawn extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = "40px";
        this.image.draggable = false;
        this.image.src = "static/img/pieces/pawn-" + color + ".svg";

        // Event listeners
        this.showPossibleMoves = this.showPossibleMoves.bind(this);
        this.image.addEventListener("mouseover", this.showPossibleMoves);
        this.hidePossibleMoves = this.hidePossibleMoves.bind(this);
        this.image.addEventListener("mouseout", this.hidePossibleMoves);
    }

    showPossibleMoves() {
        let posX = this.position.x;
        let posY = this.position.y;
        let possibleMoveCount = 3;

        if (!this.isFirstMove) {
            possibleMoveCount = 2;
        }

        for (let i = 0; i < 3; i++) {
            board[posX - i][posY].element.style.backgroundColor = "rgb(206, 189, 105)";
        }
    }

    hidePossibleMoves() {
        let posX = this.position.x;
        let posY = this.position.y;

        for (let i = 0; i < 3; i++) {
            board[posX - i][posY].element.style.backgroundColor = "rgb(222, 203, 112)";
        }

    }

    render() {
        return this.image;
    }
}

export class Rook extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = 40;
        this.image.draggable = false;
        this.image.src = "static/img/pieces/rook-" + color + ".svg";
    }

    render() {
        return this.image;
    }
}

export class Knight extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = 40;
        this.image.draggable = false;
        this.image.src = "static/img/pieces/knight-" + color + ".svg";
    }

    render() {
        return this.image;
    }
}

export class Bishop extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = 40;
        this.image.draggable = false;
        this.image.src = "static/img/pieces/bishop-" + color + ".svg";
    }

    render() {
        return this.image;
    }
}

export class Queen extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = 40;
        this.image.draggable = false;
        this.image.src = "static/img/pieces/queen-" + color + ".svg";
    }

    render() {
        return this.image;
    }
}

export class King extends ChessPiece {
    constructor(color, position) {
        super(color, position);
        this.image = new Image();
        this.image.style.width = 40;
        this.image.draggable = false;
        this.image.src = "static/img/pieces/king-" + color + ".svg";
    }

    render() {
        return this.image;
    }
}