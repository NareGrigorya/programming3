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



var a = +prompt("ընտրեք ճեր մատրիցաի չափերը")
var b = +prompt("ընտրեք ճեր մարդկանց թիվը")
var c = +prompt("ընտրեք ճեր ինֆեկցիայի թիվը")
var d = +prompt("ընտրեք ճեր պատերազմի թիվը")
var e = +prompt("ընտրեք ճեր վակցինայի թիվը")
var f = +prompt("ընտրեք ճեր պայմանագրի թիվը")


 matrix = matrixGenerator(a,b,c,d,e,f,1);

var side = 25;

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var theSaviorArr = []
var worldArr = []


function setup(){
    frameRate(9)
     createCanvas(matrix[0].length * side, matrix.length * side);
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
}

function draw(){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                  if(matrix[y][x] == 1){
                         fill(22, 82, 21)
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
                         fill(189, 4, 127)
                  }
                  else {
                        fill("gray")
                     }
                     rect(x  * side ,y * side , side , side)
            }
       }


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
}
