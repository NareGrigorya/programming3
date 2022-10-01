let LivingCreature = require("./LivingCreature")
module.exports  = class TheSavior  extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.x = x;
        this.y = y;
        this.energy = 12;
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
            matrix[newY][newX] = 4;

            var savi = new TheSavior(newX, newY);
            theSaviorArr.push(savi);
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
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
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
        for (var i in theSaviorArr) {
            if (this.x == theSaviorArr[i].x && this.y == theSaviorArr[i].y) {
                theSaviorArr.splice(i, 1);
                break;
            }
        }
    }
}