// Set up variables for the number of tiles and their size
let xTiles = 5;
let yTiles = 5;
let tileSize = 80;

// Arrays for star colors, scales, and point counts
let starColors = ["gold", "red", "white", "blue"];
let starScales = [0.1, 0.15, 0.2, 0.25];
let starPoints = [3, 4, 5, 6];
let starAngleSpread = 20;

function setup() {
  // Create a canvas with dimensions based on tile size and number of tiles
  createCanvas(xTiles * tileSize, yTiles * tileSize);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  // Set the background to black
  background("black");
  // Loop through each tile
  for (let i = 0; i < xTiles; i++) {
    for (let j = 0; j < yTiles; j++) {
      // Translate the origin to the current tile and draw stars
      push();
      translate(i * tileSize, j * tileSize);
      drawTile();
      pop();
    }
  }
}

function drawTile() {
  // Loop through and draw four random stars for each tile
  for (let i = 0; i < 4; i++) {
    // Choose random properties for each star from the arrays
    let starColor = random(starColors);
    let starScale = random(starScales);
    let starPointCount = random(starPoints);
    let starAngle = random(-starAngleSpread, starAngleSpread);
    // Create a star object with the chosen properties
    let star = {
      starX: random(tileSize),
      starY: random(tileSize),
      starScale: starScale,
      starPoints: starPointCount,
      startAngle: starAngle,
      starFill: starColor,
    };
    // Draw the star
    addStar(star);
  }
}

function addStar(star) {
  // Draw a star with the given properties
  push();
  fill(star.starFill);
  noStroke();
  let addAngle = 360 / star.starPoints;
  translate(star.starX, star.starY);
  scale(star.starScale);
  rotate(star.startAngle);
  for (let pointsDrawn = 0; pointsDrawn < star.starPoints; pointsDrawn++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}
//
