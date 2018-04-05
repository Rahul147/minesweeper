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

    for (let i = 0; i < cols; i++) {
        grid.push([]);
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBees();
        }
    }

    console.log(grid)
}


function gameOver() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].reveal();
        }
    }
}

function mousePressed() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
                if (grid[i][j].bee) {
                    gameOver();
                    console.log("GAME OVER");
                }
            }
        }
    }
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