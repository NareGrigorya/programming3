var socket = io()

var side = 25;


function setup(){

     createCanvas(25 * side, 25 * side);
      
}

function dra(matrix){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
              //     if(matrix[y][x] == 99) console.log("ASDASDASDASDASDASDASDASD",matrix);
              if(matrix[y][x] == 99) {
                     fill(109, 110, 156);
                     circle(x  * side ,y * side , 2*side , 2*side);
              } else if(matrix[y][x] == 1){
                         fill(73, 105, 72)
                  }
                  else if(matrix[y][x] == 2){
                         fill(250, 185, 5)
                  }
                  else if(matrix[y][x] == 3){
                         fill(250,20,20)
                  }
                  else if(matrix[y][x] == 4){
                         fill(22, 165, 217)
                  }
                  else if(matrix[y][x] == 5){
                         fill(247, 123, 7)
                  }
                  else if(matrix[y][x] == 6){
                         fill(71, 112, 143)
                  }
                  else {
                        fill("gray")
                     }
                     
                     rect(x  * side ,y * side , side , side)
            }
       }
   
}



function winter () {
    document.body.style.backgroundImage = "url('wint.webp')";
}
function spring () {
    document.body.style.backgroundImage = "url('spring.jpg')"
}
function summer () {
    document.body.style.backgroundImage = "url('summer.webp')"
}
function autumn () {
    document.body.style.backgroundImage = "url('fal.webp')"
}

// Ավելացված Ֆունկցիա։ դու այստեղից պետք է ուղարկես 
function lightning(){
       socket.emit("lighting")
}


// Ջնջված Ֆունկցիա։ խնդիրն այն է, որ այս քո ֆունկցիան պետք է լինի սերվերում
// function lightning() {      
//        fill(93, 133, 143);
//        circle(60, 60, 60);
//        const elem = document.getElementById("Lightning");    
//        function constructor(x, y) {
//         this.x = x;
//         this.y = y
//         this.multiply = 0
//         this.directions = [];

//          function  eat() {
//               var emptyCell = this.chooseCell(1,2,3,4,5,6)
//               var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];
          
//               if (newCell) {
//                   let newX = newCell[0]
//                   let newY = newCell[1]
//                   matrix[newY][newX] = matrix[this.y][this.x]
//                   matrix[this.y][this.x] = 0
//                   this.x = newX
//                   this.y = newY
//                   for (var i in predatorArr) {
//                       if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                             grassArr.splice(i, 1)
//                           break
//                       }
//                       if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
//                             grassEaterArr.splice(i, 1)
//                             break
//                         }
//                       if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
//                             predatorArr.splice(i, 1)
//                             break
//                         }
//                       if (newX ==  theSaviorArr[i].x && newY ==  theSaviorArr[i].y) {
//                             theSaviorArr.splice(i, 1)
//                             break
//                         }
//                       if (newX ==  worldArr[i].x && newY ==  worldArr[i].y) {
//                             worldArr.splice(i, 1)
//                             break
//                         }
//                   }
//               }
          
//               else {
//                   this.move()
//               }
//             }
//                 this.directions = [
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],
//                     [this.x + 1, this.y + 1],

//                 ];
//             }
//             function chooseCell(char) {
//                 this.getNewCoordinates()
//                 var found = [];
//                 for (var i in this.directions) {
//                     var x = this.directions[i][0];
//                     var y = this.directions[i][1];
//                     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        
//                         if (matrix[y][x] == char) {
//                             found.push(this.directions[i]);
//                         }
//                     }
//                 }
//                 return found;
//             }
          
//      }
 
socket.on('send matrix', dra)

