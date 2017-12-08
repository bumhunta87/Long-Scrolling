// var canvas = document.getElementById("canvas");
// var counter = document.getElementById("counter");
// var icon = document.getElementById("icon");

// window.onscroll = function(){


//   var y = window.pageYOffset;

//   console.log(y);

//   counter.style.top = 400 + y * .97 + "px";

//   counter.innerHTML = y + "px";

//   if (y > 2000) {
//     counter.style.backgroundColor = "green";
//   }else{
//     counter.style.backgroundColor = "blue";}

//     icon.style.top = 200 + y  + "px";

//   if(y > 2000){

//       icon.src="http://content.internetvideoarchive.com/content/photos/9249/337362_014.jpg";

//   }else{

//   icon.src="http://www.syfy.com/sites/syfy/files/2017/10/rick_and_morty_1.jpg";
//  }

// };


var maze = document.getElementById("maze");
var nug = document.getElementById("nug");
var lighter = document.getElementById("lighter");

window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);

  nug.style.left = 450 + x * 1.03 + "px";

  lighter1.style.left = x * 1. + "px";
  lighter2.style.left = x * 1 + "px";
  lighter3.style.left = x * 1 + "px";
  lighter4.style.left = x * 1 + "px";

  // if (x > 200) {
  //   counter.style.backgroundColor = "green";
  // }else{
  //   counter.style.backgroundColor = "blue";}
  //
  //   icon.style.left =100+ x;

 //  if(x > 200){
 //
 //      icon.src="http://content.internetvideoarchive.com/content/photos/9249/337362_014.jpg";
 //
 //  }else{
 //
 //  icon.src="http://www.syfy.com/sites/syfy/files/2017/10/rick_and_morty_1.jpg";
 // }

};
