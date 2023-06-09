// Set up the canvas and angle mode
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  // Define star objects with their properties
  // Gold star
  star1 = {
    starX: 200,
    starY: 200,
    starScale: .7,
    starPoints: 7,
    startAngle: 20,
    starFill: "gold",
  };
  
  // Red star
  star2 = {
    starX: 200,
    starY: 100,
    starScale: .2,
    starPoints: 3,
    startAngle: 20,
    starFill: "red",
  };
  
  // White star
  star3 = {
    starX: 50,
    starY: 150,
    starScale: .5,
    starPoints: 5,
    startAngle: 20,
    starFill: "white",
  };
  
  // Blue star
  star4 = {
    starX: 300,
    starY: 350,
    starScale: .6,
    starPoints: 4,
    startAngle: 20,
    starFill: "blue",
  };
}

// Draw function to display the stars on the canvas
function draw() {
  background("black");
  
  // Draw each star on the canvas using the addStar function
  addStar(star1);
  addStar(star2);
  addStar(star3);
  addStar(star4);

  /*
  // Alternative way to add stars without objects
  addStar(200, 100, .35, 4, 0, "gold");
  addStar(300, 300, .35, 3, 0, "gold");
  addStar(50, 50, .35, 8, 0, "gold");
  addStar(200, 300, .35, 5, 0, "gold");
  */
}

// Function to draw a star given its properties
function addStar(star) {
  push();
  
  // Set the fill and stroke of the star
  fill(star.starFill)
  noStroke();
  
  // Calculate the angle between each point on the star
  let addAngle = 360 / star.starPoints;
  
  // Translate to the center of the star and scale it to the desired size
  translate(star.starX, star.starY);
  scale(star.starScale);
  
  // Rotate the star based on its starting angle
  rotate(star.startAngle);
  
  // Draw each point on the star using a triangle
  for (let pointsDrawn = 0; pointsDrawn < 8; pointsDrawn++) {
    rotate(addAngle)
    triangle(0, 50, 20, 0, -20, 0);
  }
  
  // Reset the transformations applied to the star
  pop();
}
//
