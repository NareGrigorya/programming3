var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require("fs");
const GrassEater = require('./grassEater');
const Predator = require('./Predator');
const TheSavior = require('./TheSavior');
const World = require('./World');

app.use(express.static("."));

app.get('/', function (req, res){
    res.redirect('index.html');
});

server.listen(3000, () => {
    console.log("server run");
});



function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,theSaviorCount,worldCount,healingCount){
    let matrix = [];

      for(let i = 0; i < matrixSize;i++){
              matrix[i] = []
          for(let j = 0; j < matrixSize; j++){
                  matrix[i][j] = 0;
          }
      }

      for(let i = 0 ; i < grassCount; i++ ){
            
           let x  = Math.floor(Math.random() * matrixSize)
           let y  = Math.floor(Math.random() * matrixSize)

                 if(matrix[y][x] == 0){
                     matrix[y][x] = 1;
                 }
              }

  

      for(let i = 0 ; i < grEatCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 2;
               }
      }
  
    for(let i = 0 ; i < predatorCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 3;
               }

  }

    for(let i = 0 ; i < theSaviorCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 4;
               }
      }

    for(let i = 0 ; i < worldCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 5;
               }
      }

let x = Math.floor(Math.random() * matrixSize)
let y = Math.floor(Math.random() * matrixSize)

matrix[y][x] = 4;


 return matrix ;     
}


matrix = matrixGenerator(25,5,5,10,14,17,1);

io.sockets.emit('send matrix', matrix)


 grassArr = []
 grassEaterArr = []
 predatorArr = []
 theSaviorArr = []
 worldArr = []
 lightningArr = []

 Grass = require("./grass")
 GrassEat = require("./grassEater")
 Predat  = require("./Predator")
 TheSavi = require("./TheSavior")
 World1 = require("./World")


 function createObject(){
    for(var y = 0 ; y < matrix.length ;y++){
        for(var x = 0; x < matrix[y].length;x++){
                       if(matrix[y][x] == 1){
                            var gr = new Grass(x,y,false)

                            grassArr.push(gr)
                       }
                       else  if(matrix[y][x] == 2){
                          var grEat = new GrassEater(x,y,false)

                          grassEaterArr.push(grEat)
                     }
                     else  if(matrix[y][x] == 3){
                          var pre = new Predator(x,y,false)

                          predatorArr.push(pre)
                     }
                    else  if(matrix[y][x] == 4){
                          var savi = new TheSavior(x,y,false)

                          theSaviorArr.push(savi)
                     }
                    else  if(matrix[y][x] == 5){
                          var wor = new World(x,y)

                          worldArr.push(wor)
                     }
        }
   }

io.sockets.emit('send matrix', matrix)

 }


 function game(){
    for(var i in grassArr){
        grassArr[i].mul()
  }

  for (let j in grassEaterArr) {
     grassEaterArr[j].mul()
     grassEaterArr[j].eat()
 }

 for (let j in predatorArr) {
     predatorArr[j].mul()
     predatorArr[j].eat()
 }

 for (let j in theSaviorArr) {
     theSaviorArr[j].mul()
     theSaviorArr[j].eat()
 }

 for (let j in worldArr) {
     worldArr[j].mul()
     worldArr[j].eat()
 }     
io.sockets.emit('send matrix', matrix)

 }

setInterval(game,200)




io.on("connection", (socket) => {
     createObject(matrix)
    
})





