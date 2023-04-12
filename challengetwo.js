let xTiles = 5;
let yTiles = 5;
let tileSize = 80;

function setup() {
  createCanvas(xTiles * tileSize, yTiles * tileSize);
  angleMode(DEGREES);
  noLoop();
}
//translation to make tiles
function draw() {
  background("black");
  for (let i = 0; i < xTiles; i++) {
    for (let j = 0; j < yTiles; j++) {
      push();
      translate(i * tileSize, j * tileSize);
      drawTile();
      pop();
    }
  }
}

function drawTile() {
  //gold star
  let star1 = {
    starX: 40,
    starY: 40,
    starScale: 0.2,
    starPoints: 7,
    startAngle: 20,
    starFill: "gold",
  };
  //red star
  let star2 = {
    starX: 60,
    starY: 60,
    starScale: 0.1,
    starPoints: 3,
    startAngle: 20,
    starFill: "red",
  };
  //white star
  let star3 = {
    starX: 20,
    starY: 60,
    starScale: 0.15,
    starPoints: 5,
    startAngle: 20,
    starFill: "white",
  };
  //blue star
  let star4 = {
    starX: 60,
    starY: 20,
    starScale: 0.18,
    starPoints: 4,
    startAngle: 20,
    starFill: "blue",
  };

  addStar(star1);
  addStar(star2);
  addStar(star3);
  addStar(star4);
}

function addStar(star) {
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
