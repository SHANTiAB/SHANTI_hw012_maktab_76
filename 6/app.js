//part one 
const addName = document.querySelector('#elemId');
addName.innerHTML += '<h2>GOODBYE</h2>'
//part two
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById('elemId').innerHTML += coords;
  }