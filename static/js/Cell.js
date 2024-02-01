class Cell {
    constructor(x, y) {
        this.pos = { x, y };
        this.element = document.createElement("div");
        this.element.setAttribute("id", "cell-" + this.pos.x + "-" + this.pos.y);
        this.element.setAttribute("class", "cell");

        // Event listeners
        this.element.addEventListener("mouseover", (event) => {
            this.element.style.backgroundColor = "rgb(206, 189, 105)";
        });
        this.element.addEventListener("mouseout", (event) => {
            this.element.style.backgroundColor = "rgb(222, 203, 112)";
        });

        this.piece = null;
    }
}

export default Cell;