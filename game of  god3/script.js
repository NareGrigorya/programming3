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
function lightning () {
    
}
socket.on('send matrix', dra)

