// Array containing the order of the sprites to display
let spriteOrder = [
  {type: "star", color: "gold", points: 7},
  {type: "star", color: "white", points: 5},
  {type: "moon", color: "gray", phase: "full"},
  {type: "star", color: "red", points: 3},
  {type: "moon", color: "yellow", phase: "half"},
  {type: "star", color: "blue", points: 4},
];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  // Calculate the size of each tile based on the number of sprites to display
  let tileSize = width / spriteOrder.length;
  
  // Loop through the sprite order array
  for (let i = 0; i < spriteOrder.length; i++) {
    
    // Get the current sprite from the array
    let sprite = spriteOrder[i];
    
    // Translate to the center of the current tile
    push();
    translate((i + 0.5) * tileSize, height / 2);
    
    // Determine the type of the sprite and call the appropriate function
    if (sprite.type === "star") {
      addStar({
        starX: 0,
        starY: 0,
        starScale: 0.3,
        starPoints: sprite.points,
        startAngle: 0,
        starFill: sprite.color
      });
    } else if (sprite.type === "moon") {
      addMoon({
        moonX: 0,
        moonY: 0,
        moonScale: 0.4,
        moonPhase: sprite.phase,
        moonFill: sprite.color
      });
    }
    
    // Reset the transformations
    pop();
  }
}

// Function to draw a star
function addStar(star) {
  fill(star.starFill);
  noStroke();
  
  // Calculate the angle between the points of the star
  let addAngle = 360 / star.starPoints;
  
  // Apply the scaling and rotation transformations
  scale(star.starScale);
  rotate(star.startAngle);
  
  // Draw the star
  for (let pointsDrawn = 0; pointsDrawn < star.starPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
}

// Function to draw a moon
function addMoon(moon) {
  fill(moon.moonFill);
  noStroke();
  
  // Apply the scaling transformation
  scale(moon.moonScale);
  
  // Draw the moon
  ellipse(0, 0, 50, 50);
  
  // Add the phase (full or half) to the moon
  fill(0);
  if (moon.moonPhase === "full") {
    ellipse(10, 0, 30, 50);
  } else if (moon.moonPhase === "half") {
    rect(0, -25, 25, 50);
  }
}
