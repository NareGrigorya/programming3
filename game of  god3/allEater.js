let LivingCreature = require("./LivingCreature")

module.exports  =  class AllEater extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];
        matrix[this.y][this.x] = 99;
    }
    
    move(intval) {
        if (this.x == matrix.length){
            clearInterval(intval);
            return;
        } 
        if (this.y == matrix[0].length){
            clearInterval(intval);
            return;
        }
        matrix[this.y][this.x] = 0 
        super.getNewCoordinates()
        this.x++
        this.y++
        if (this.x == matrix.length){
            clearInterval(intval);
            return;
        } 
        if (this.y == matrix[0].length){
            clearInterval(intval);
            return;
        }
        console.log(this.y, "GOOOOOO", this.x);
        matrix[this.y][this.x] = 99;
        

        
        // TODO: Կազմակերպիր քայլի ընթացքում իր կողքի օբյեկտներին ուտելը))        
    }

    eat() {
        var emptyCell = this.chooseCell(1,2,3,4,5)
        var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];
    
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[4]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            // for (var i in grassArr) {
            //     if (newX == grassArr[i].x && newY == grassArr[i].y) {
            //           grassArr.splice(i, 1)
            //         break
            //        }
            //     }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                      grassEaterArr.splice(i, 2)
                      break
                  }
                }  
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                      predatorArr.splice(i, 3)
                      break
                  }
                }
            for (var i in theSaviorArr) {
                if (newX ==  theSaviorArr[i].x && newY ==  theSaviorArr[i].y) {
                      theSaviorArr.splice(i, 4)
                      break
                  }
                }
            for (var i in worldArr) {
                if (newX ==  worldArr[i].x && newY ==  worldArr[i].y) {
                      worldArr.splice(i, 5)
                      break
                  }
                }  
            
        }
    
        else {
            this.move()
        }
      }
    
             die() {
        matrix[this.y][this.x] = 0
    }
}


