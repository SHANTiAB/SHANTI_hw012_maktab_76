$(document).ready(function(){
    $("p").hover(function(){
      $(this).css("background-color", "pink");
   
    });
  });

  function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }