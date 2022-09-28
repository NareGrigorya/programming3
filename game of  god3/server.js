var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require("fs");

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


        for(let i = 0; i < healingCount; i++){
  let x = Math.floor(Math.random() * matrixSize)
  let y = Math.floor(Math.random() * matrixSize)

  if(matrix[y][x] == 0){
      matrix[y][x] = 6;
  }else{
      i--;
  }
}

let x = Math.floor(Math.random() * matrixSize)
let y = Math.floor(Math.random() * matrixSize)

matrix[y][x] = 4;


 return matrix ;     
}


matrix = matrixGenerator(35,15,13,7,14,10);

io.sockets.emit('send matrix', matrix)


function weather() {
    if (weath == "winter") {
        weath = "winter"
    }
    else if (weath == "spring") {
        weath = "spring"
    }
    else if (weath == "summer") {
        weath = "summer"
    }
    else if (weath == "autumn") {
        weath = "autumn"
    }
    io.sockets.emit('weather', weath)
}
setInterval (weather);





