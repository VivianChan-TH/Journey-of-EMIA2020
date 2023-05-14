let x = 50;
let y = 50;
let xspeed = 5;
let yspeed = 2;
let width = window.innerWidth;
let height = window.innerHeight;

function setup() {
  width = Math.min(window.innerWidth, 1100);
  if (window.innerHeight < 400) {
    width = window.innerHeight / 9 * 16;
  }
  height = width * 9 / 16;
  createCanvas(width, height);
}

window.addEventListener('resize', () => {
  setup();
})

function draw() {
  background(220);

  // Move the ball
  x += xspeed;
  y += yspeed;

  // Bounce off the walls
  if (x > width || x < 0) {
    xspeed = -xspeed;
  }
  if (y > height || y < 0) {
    yspeed = -yspeed;
  }

  // Draw the ball
  ellipse(x, y, 50, 50);
}
