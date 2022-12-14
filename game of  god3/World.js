let LivingCreature = require("./LivingCreature")
module.exports  = class World extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.multiply = 0
        this.directions = [];
    }





mul() {
    this.multiply++;
    var emptyCell  =  super.chooseCell(0);
    var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];

    // console.log(emptyCells);
    if (newCell && this.multiply >= 15) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 5;

        var wor = new World(newX, newY);
        worldArr.push(wor);
        this.multiply = 0;
    }
}

move() {
    this.energy--
    var emptyCell  =  super.chooseCell(0);
    var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];

    if (newCell && this.energy >= 0) {
        // console.log(newCell)
        var newX = newCell[0]
        var newY = newCell[1]
        matrix[newY][newX] = matrix[this.y][this.x]
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
    }
    else {
        if (this.energy < 0) {
            this.die()
        }
    }
}


eat() {
    var emptyCell = this.chooseCell(2,3)
    var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];

    if (newCell) {
        this.energy++
        let newX = newCell[0]
        let newY = newCell[1]
        matrix[newY][newX] = matrix[this.y][this.x]
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
        for (var i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                predatorArr.splice(i, 1)
                break
            }
        }
    }

    else {
        this.move()
    }
}




die() {
    matrix[this.y][this.x] = 0;
    for (var i in worldArr) {
        if (this.x == worldArr[i].x && this.y == worldArr[i].y) {
            worldArr.splice(i, 1);
            break;
        }
    }
}
}
