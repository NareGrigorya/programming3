var socket = io()



var side = 25;



//  a = +prompt("ընտրեք ճեր մատրիցաի չափերը")
// var b = +prompt("ընտրեք ճեր մարդկանց թիվը")
// var c = +prompt("ընտրեք ճեր ինֆեկցիայի թիվը")
//  var d = +prompt("ընտրեք ճեր պատերազմի թիվը")
// var e = +prompt("ընտրեք ճեր վակցինայի թիվը")
// var f = +prompt("ընտրեք ճեր պայմանագրի թիվը")


function setup(){

     createCanvas(25 * side, 25 * side);
      
}

function dra(matrix){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                  if(matrix[y][x] == 1){
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
                         fill(189, 4, 127)
                  }
                  else {
                        fill("gray")
                     }
                     
                     rect(x  * side ,y * side , side , side)
            }
       }


    //    function grass(matrix) {
    //           for (var y = 0; y < matrix.length; y++) {
    //               for (var x = 0; x < matrix[0].length; x++) {
    //                   var gra = matrix[y][x];
    //                   if (gra == 1){
    //                       if(weath == "summer") {
    //                       fill(73, 105, 72);
    //                   }
    //                   else if (weath == "autumn") {
    //                       fill(217, 187, 56);
    //                   }
    //                   else if (weath == "winter") {
    //                       fill(210, 214, 210);
    //                   }
    //                   else if (weath == "spring") {
    //                       fill(146, 173, 139);
    //                   }
    //               }
    //                   rect(x * side, y * side, side, side);
    //               }
    //           }
    //       }
    //       socket.on ('send matrix', grass)

   
}

//  body = document.getElementsByTagName("body")

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
function lightning() {
       circle(60, 60, 60);
       fill(103, 98, 156);
       // let id = null;
       const elem = document.getElementById("Lightning");  
       // let pos = 70;
       // clearInterval(id);
       // id = setInterval(frame, 5);
       // function frame() {
       // if (pos == 980) {
       //     clearInterval(id);
       // }
       //    else {
       //     pos++;
       //     elem.style.top = pos + "px";
       //     elem.style.left = pos + "px";
       // }
       // }
     
              var emptyCell = this.chooseCell(1,2,3,4,5,6)
              var newCell  =  emptyCell[Math.floor(Math.random()* emptyCell.length)];
          
              if (newCell) {
                  let newX = newCell[0]
                  let newY = newCell[1]
                  matrix[newY][newX] = matrix[this.y][this.x]
                  matrix[this.y][this.x] = 0
                  this.x = newX
                  this.y = newY
                  for (var i in predatorArr) {
                      if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            grassArr.splice(i, 1)
                          break
                      }
                      if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1)
                            break
                        }
                      if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                            predatorArr.splice(i, 1)
                            break
                        }
                      if (newX ==  theSaviorArr[i].x && newY ==  theSaviorArr[i].y) {
                            theSaviorArr.splice(i, 1)
                            break
                        }
                      if (newX ==  worldArr[i].x && newY ==  worldArr[i].y) {
                            worldArr.splice(i, 1)
                            break
                        }
                  }
              }
          
              else {
                  this.move()
              }
          
     }
 
socket.on('send matrix', dra)

