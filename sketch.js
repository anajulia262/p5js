function setup() {
    createCanvas(600, 600);
    background("rgb(88,216,235)");
  }
  
  function draw() {
    stroke("white");
    fill("#white");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  