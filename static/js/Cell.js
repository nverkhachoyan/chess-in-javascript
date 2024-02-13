class Cell {
    constructor(x, y, cellBgColor) {
        this.pos = { x, y };
        this.element = document.createElement("div");
        this.element.setAttribute("id", "cell-" + this.pos.x + "-" + this.pos.y);
        this.element.setAttribute("class", "cell");

        if (cellBgColor === "white") {
            this.element.classList.add("white-cell");
        } else if (cellBgColor === "black") {
            this.element.classList.add("black-cell");
        }

        this.piece = null;
    }
}

export default Cell;