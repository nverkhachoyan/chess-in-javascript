export class ChessPiece {
    constructor(color, position, board, type) {
        this.color = color;
        this.position = position;
        this.type = type;
        this.board = board;
        this.isFirstMove = false;

    }

    initializeImage() {
        this.image = new Image();
        this.image.style.width = "40px";
        this.image.draggable = false;
        // Using the type and color to set the image source
        this.image.src = `static/img/pieces/${this.type.toLowerCase()}-${this.color}.svg`;
    }

    move(dest) {
        throw new Error("This method is abstract and should be overridden");
    }

}

export class Pawn extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'pawn');
        this.initializeImage();

        this.calculatePossibleMoves = this.calculatePossibleMoves.bind(this);

        // Event listeners
        this.image.addEventListener("mouseover", this.showPossibleMoves.bind(this));
        this.image.addEventListener("mouseout", this.hidePossibleMoves.bind(this));
    }

    showPossibleMoves() {
        const possibleMoves = this.calculatePossibleMoves();
        this.board.highlightCells(possibleMoves);
    }

    hidePossibleMoves() {
        const possibleMoves = this.calculatePossibleMoves();
        this.board.unhighlightCells(possibleMoves);
    }

    calculatePossibleMoves() {
        const posX = this.position.x;
        const posY = this.position.y;

        const possibleMovesArray = [
            { x: posX - 1, y: posY },
            { x: posX - 2, y: posY },
        ];

        return possibleMovesArray;
    }

    render() {
        return this.image;
    }
}

export class Rook extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'rook');
        this.initializeImage();
    }

    render() {
        return this.image;
    }
}

export class Knight extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'knight');
        this.initializeImage();
    }

    render() {
        return this.image;
    }
}

export class Bishop extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'bishop');
        this.initializeImage();
    }

    render() {
        return this.image;
    }
}

export class Queen extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'queen');
        this.initializeImage();
    }

    render() {
        return this.image;
    }
}

export class King extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'king');
        this.initializeImage();
    }

    render() {
        return this.image;
    }
}