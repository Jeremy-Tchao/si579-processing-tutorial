function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(220);
  rectMode(CENTER);
  
}

function draw() {
  background(255);
  translate(width/2, height/2)
  rotate(atan2(mouseY - width/2, mouseX - height/2));
  rect(0,0,70,30)
}
