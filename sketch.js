let img1;

function preload() {
  // Preload the image
  img1 = loadImage('https://as2.ftcdn.net/v2/jpg/02/38/02/49/1000_F_238024924_kqI0tGuq8U1RzCF5HFLjLLwSnJVfCo1n.jpg');
}

function setup() {
  createCanvas(800, 600);
 background(51, 102, 153);
  
  noLoop(); 
   // Mountain range resets every run
  
  beginShape();
  vertex(0, height);
  for (let i = 0; i < width; i += random(100, 60)) {
    let x = i;
    let y = height - random(400, 100);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
  
  // Draw the bottom half of the torn edge
  beginShape();
  vertex(0, height);
  for (let i = 0; i < width; i += random(5, 20)) {
    let x = i;
    let y = height + random(200, 500);
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);

  
  drawSkyline();

}

function drawSkyline() {


  // Draw buildings
  noStroke();
  fill(0); // 
  rect(50, 400, 100, 200); //  building 1
  rect(200, 300, 150, 300); //  building 2
  rect(400, 350, 120, 250); //  building 3
  rect(600, 200, 100, 400); //  building 4
   
  
  //bldg shadows
   fill(0); // Set fill color for shadows
  rect(70, 390, 100, 250); // bldg 1 shadow
  rect(220, 290, 150, 350); // bldg 2 shadow
  rect(420, 335, 120, 270); // bldg 3 shadow
  rect(620, 190, 100, 500); // bldg 4 shadow
   arc(670, 190, 100, 100, PI + HALF_PI, TWO_PI); 
  
   fill(120); // Set fill color for the arc (e.g., red)
  arc(650, 200, 100, 100, PI + HALF_PI, TWO_PI); 

  // Draw repeating image within each building
  drawRepeatingImage(img1, 50, 400, 100, 200);
  drawRepeatingImage(img1, 200, 300, 150, 300);
  drawRepeatingImage(img1, 400, 350, 120, 250);
  drawRepeatingImage(img1, 600, 200, 100, 400);
  

 
  function draw() {}
   
  // Add sun
  fill(255, 255, 0);
  stroke('rgba(255, 51, 0,0.5)');
  strokeWeight(40);
  ellipse(80, 80, 200, 200);
  fill(255, 255, 153);
  noStroke()
  ellipse(80, 80, 100, 100)
  
  
}

function drawRepeatingImage(img1, x, y, w, h, tileSizeX, tileSizeY) {
  // Draw the image as repeating tiles within the building rectangle
  for (let i = x; i < x + w; i += 100) {
    for (let j = y; j < y + h; j += 100) {
      // Calculate the size of the portion of the image to draw
      let drawWidth = min(100, x + w - i);
      let drawHeight = min(100, y + h - j);
      // Draw the portion of the image
      image(img1, i, j, drawWidth, drawHeight);
    }
  }
}

