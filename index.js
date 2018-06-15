var slider;

function setup(){
  createCanvas(800,400);
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);
  strokeWeight(6);
}

function draw(){
    stroke(255, 204, 0);
    fill(255, 204, 0);
    ellipse(56, 60, 55, 55);
    stroke(160);
    line(55, 90, 55, 200);
    line(24, 100, 55, 130);
    line(85, 100, 55, 130);
    line(55, 200,24,250);
    line(55, 200,85,250);
    stroke(slider.value(), 255, 255);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    fill(slider.value(), 255, 255);
    ellipse(400,350,50,50);

}



