class Cell {
    constructor(i, j, w) {
        this.i = i;
        this.j = j;
        this.x = i * w;
        this.y = j * w;
        this.w = w;
        // 30% chance of being a bee
        this.bee = (Math.random() < 0.3);
        this.revealed = false;
        this.neighborCount = 0;
    }

    show() {
        stroke(0);
        noFill();
        rect(this.x, this.y, this.w, this.w);
        if (this.revealed) {
            if (this.bee) {
                fill(127);
                ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
            } else {
                fill(200);
                rect(this.x, this.y, this.w, this.w);
                if (this.neighborCount > 0) {
                    textAlign(CENTER);
                    fill(0);
                    text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w - 6);
                }
            }
        }
    }

    countBees() {
        if (this.bee) {
            this.neighborCount = -1;
            return
        }
        let total = 0;
        for (let offX = -1; offX <= 1; offX++) {
            let i = this.i + offX;
            if (i < 0 || i >= rows)
                continue;
            for (let offY = -1; offY <= 1; offY++) {
                let j = this.j + offY;
                if (j < 0 || j >= rows)
                    continue;
                var neighbor = grid[i][j];
                if (neighbor.bee) {
                    total++;
                }
            }
        }
        this.neighborCount = total;
    }

    reveal() {
        this.revealed = true;
        if (this.neighborCount === 0) {
            this.floodFill();
        }
    }

    floodFill() {
        for (let offX = -1; offX <= 1; offX++) {
            let i = this.i + offX;
            if (i < 0 || i >= cols)
                continue;
            for (let offY = -1; offY <= 1; offY++) {
                let j = this.j + offY;
                if (j < 0 || j >= rows)
                    continue;
                const neighbor = grid[i][j];
                if (!neighbor.revealed) {
                    neighbor.reveal();
                }
            }
        }
    }

    contains(x, y) {
        return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
    }

}
