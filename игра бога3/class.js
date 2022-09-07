class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1    ],
            [this.x + 1, this.y    ],
            [this.x, this.y + 1    ],
            [this.x + 1, this.y + 1],
        ]
    }


    chooseCell(char) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }


      mul(){

            this.multiply++
             var emptyCell  =  this.chooseCell(0);
             var newCell  =    random(emptyCell);

                   if(newCell && this.multiply >= 5){
                          
                            var newX = newCell[0];
                            var newY = newCell[1];

                                matrix[newY][newX] = 1;

                                var gr = new Grass(newX,newY); 

                                grassArr.push(gr);

                                this.multiply = 0;
                         
                   }
                }
}


//--------------------------------------------------------------------------------------------------------------------------------------------

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var grEat = new GrassEater(newX, newY);
            grassEaterArr.push(grEat);
            this.multiply = 0;
        }
    }




    move() {
        this.energy--
        var emptyCell = this.chooseCell(0)
        var newCell = random(emptyCell)

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

        var emptyCell = this.chooseCell(1)
        var newCell = random(emptyCell)

        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
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
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}




//-------------------------------------------------------------------------------------------------------------

class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var pre = new Predator(newX, newY);
            predatorArr.push(pre);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells);

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
        var emptyCells = this.chooseCell(2)
        var newCell = random(emptyCells);

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
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}

//-------------------------------------------------------------------------------------------------------------


class TheSavior {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.multiply = 0
        this.directions = [];
    }


        getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



        chooseCell(chara) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == chara) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



        mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

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
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells);

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
        var emptyCells = this.chooseCell(2,3)
        var newCell = random(emptyCells);

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

//-------------------------------------------------------------------------------------------------------------------


class World {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.multiply = 0
        this.directions = [];
    }



getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

chooseCell(charas) {
    this.getNewCoordinates()
    var found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

            if (matrix[y][x] == charas) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}


mul() {
    this.multiply++;
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);

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
    let emptyCells = this.chooseCell(0)
    let newCell = random(emptyCells);

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
    var emptyCells = this.chooseCell(2,3)
    var newCell = random(emptyCells);

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

//-----------------------------------------------------------------------------------------------------------------------------------------

var player = {
    healing: 3,
    energy: 7,
    multiply: 0,
    directions: [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ],
    chooseMyDirec: function(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    },
    chooseMe: function () {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 4) {
                    this.x = j;
                    this.y = i;
                }
            }
        }
    },
    chooseCell(char, char1) {
        this.chooseMyDirec()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    },

    up: function () {
        this.chooseMe()
        if (this.y - 1 >= 0 && this.y - 1 < matrix.length) {
            let newX = this.x;
            let newY = this.y - 1;
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                this.y--;
                matrix[this.y][this.x] = 4;
            }
        }
    },
    down: function () {
        this.chooseMe()
        if (this.y + 1 >= 0 && this.y + 1 < matrix.length) {
            let newX = this.x;
            let newY = this.y + 1;
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                this.y++;
                matrix[this.y][this.x] = 4;
            }
        }
    },
    left: function () {
        this.chooseMe()
        if (this.x - 1 >= 0 && this.x - 1 < matrix[0].length) {
            let newX = this.x - 1;
            let newY = this.y;
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                this.x--;
                matrix[this.y][this.x] = 4;
            }
        }
    },
    rigth: function () {
        this.chooseMe()
        if (this.x + 1 >= 0 && this.x + 1 < matrix[0].length) {
            let newX = this.x + 1;
            let newY = this.y;
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                this.x++;
                matrix[this.y][this.x] = 4;
            }
        }
    },
    eat: function(){
        var emptyCells = this.chooseCell(2, 2)
        var newCell = random(emptyCells)
        if(newCell){
            var newX = newCell[0]
            var newY = newCell[1]
            for(var i in grassEaterArr){
            if(grassEaterArr[i].x == newX && grassEaterArr[i].y == newY){
                this.energy++;
                console.log("Your Hp: " + this.energy)
                matrix[newY][newX] = 0;
                grassEaterArr[i].die()
                break;
            }   
            }
        }


        
    },
    get: function(){
        var emptyCells = this.chooseCell(5, 5);
        var newCell = random(emptyCells);
        if(newCell){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 0;
            console.log("Heal count: " + this.healing)
            this.healing++
        }
    },
    heal: function(){
        var emptyCells = this.chooseCell(1, 2)
        var newCell = random(emptyCells);
        if(newCell){
            var newX = newCell[0]
            var newY = newCell[1]
            for(let i in grassArr){
                if(grassArr[i].x == newX && grassArr[i].y == newY){
                    if(grassArr[i].mutated){
                        if(this.healing>0){
                        grassArr[i].mutated = false;
                        this.healing--;
                        this.energy+=5;
                        console.log("You heal" + " heal: " + this.healing)
                        }
                    }
                }
            }
        }
    },
    die: function () {
        matrix[this.y][this.x] = 0;
        this.x = undefined;
        this.y = undefined;
        alert("You losed! reload for try")
    }

};

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyW") {
        player.up()
    }
 else if (event.code == "KeyS") {
        player.down()
    }
 else if (event.code == "KeyA") {
        player.left()
    }
 else if (event.code == "KeyD") {
        player.rigth()
    }  
 else if(event.code == "KeyE"){
        player.eat()
    }
 else if(event.code == "KeyG"){
        player.get()
    }
 else if(event.code == "KeyH"){
        player.heal()
    }
})  




