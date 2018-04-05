let cols;
let rows;
let grid = [];
let w = 40;


function setup() {
    createCanvas(401, 4001);

    cols = floor(width / w);
    rows = floor(width / w);

    for (let i = 0; i < cols; i++) {
        grid.push([]);
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    console.log(grid)
}


function draw() {
    background(255);

    for (let i = 0; i < cols; i++) {
        grid.push([]);
        for (let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
}