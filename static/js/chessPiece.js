export class ChessPiece {
    constructor(color, position, board, type) {
        this.color = color;
        this.position = position;
        this.type = type;
        this.board = board;
        this.isFirstMove = true;
        this.initializeImage();

        // Event listeners for showing/hiding possible moves by
        // Highlighting the corresponding cells
        this.image.addEventListener("mouseover", this.showPossibleMoves.bind(this));
        this.image.addEventListener("mouseout", this.hidePossibleMoves.bind(this));
    }

    initializeImage() {
        this.image = new Image();
        this.image.style.width = "40px";
        this.image.draggable = false;

        // Using the type and color to set the image source
        this.image.src = `static/img/pieces/${this.type.toLowerCase()}-${this.color}.svg`;
    }

    showPossibleMoves() {
        const possibleMoves = this.calculatePossibleMoves();
        this.board.highlightCells(possibleMoves);
    }

    hidePossibleMoves() {
        const possibleMoves = this.calculatePossibleMoves();
        this.board.unhighlightCells(possibleMoves);
    }

    // ABSTRACT METHODS; should be overridden in subclasses
    calculatePossibleMoves() {
        throw new Error("Method 'calculatePossibleMoves' must be implemented.");
    }

    move() {
        throw new Error("This method is abstract and should be overridden");
    }
}

export class Pawn extends ChessPiece {
    constructor(color, position, board, _) {
        super(color, position, board, 'pawn');
        this.calculatePossibleMoves = this.calculatePossibleMoves.bind(this);
    }

    calculatePossibleMoves() {
        const posX = this.position.x;
        const posY = this.position.y;
        const possibleMovesArray = [{ x: posX - 1, y: posY }];

        // Pawns move differently on their first move
        if (this.isFirstMove) {
            possibleMovesArray.push({ x: posX - 2, y: posY });
        }

        return possibleMovesArray;
    }


    render() {
        return this.image;
    }
}

export class Rook extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'rook');
    }

    render() {
        return this.image;
    }
}

export class Knight extends ChessPiece {
    constructor(color, position, board, type) {
        super(color, position, board, 'knight');
        this.calculatePossibleMoves = this.calculatePossibleMoves.bind(this);
    }

    calculatePossibleMoves() {
        const posX = this.position.x;
        const posY = this.position.y;
        const possibleMovesArray = [
            { x: posX - 2, y: posY + 1 },
            { x: posX - 2, y: posY - 1 },
        ];

        return possibleMovesArray;
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