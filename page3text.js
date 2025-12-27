let x,
  y,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  x4,
  y4,
  x5,
  y5,
  x6,
  y6,
  x7,
  y7,
  x8,
  y8,
  x9,
  y9,
  x10,
  y10,
  x11,
  y11,
  x12,
  y12,
  x13,
  y13,
  x14,
  y14,
  x15,
  y15,
  x16,
  y16,
  x17,
  y17,
  x18,
  y18,
  x19,
  y19,
  x20,
  y20,
  x21,
  y21,
  x22,
  y22,
  x23,
  y23,
  x24,
  y24,
  x25,
  y25;
let speedX,
  speedY,
  speedX1,
  speedY1,
  speedX2,
  speedY2,
  speedX3,
  speedY3,
  speedX4,
  speedY4,
  speedX5,
  speedY5,
  speedX6,
  speedY6,
  speedX7,
  speedY7,
  speedX8,
  speedY8,
  speedX9,
  speedY9,
  speedX10,
  speedY10,
  speedX11,
  speedY11,
  speedX12,
  speedY12,
  speedX13,
  speedY13,
  speedX14,
  speedY14,
  speedX15,
  speedY15,
  speedX16,
  speedY16,
  speedX17,
  speedY17,
  speedX18,
  speedY18,
  speedX19,
  speedY19,
  speedX20,
  speedY20,
  speedX21,
  speedY21,
  speedX22,
  speedY22,
  speedX23,
  speedY23,
  speedX24,
  speedY24,
  speedX25,
  speedY25;

let customfont;

function preload() {
  customfont = loadFont(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Welbut__.ttf?v=1682548618390"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customfont);

  setTimeout(startAnimation, 20000); // 1000ms delay

  function startAnimation() {
    x = random(width / 2);
    y = random(height / 2);
    x1 = random(width / 2);
    y1 = random(width / 2);
    x2 = random(width / 2);
    y2 = random(height / 2);
    x3 = random(width / 2);
    y3 = random(height / 2);
    x4 = random(width / 2);
    y4 = random(height / 2);
    x5 = random(width / 2);
    y5 = random(height / 2);
    x6 = random(width / 2);
    y6 = random(height / 2);
    x7 = random(width / 2);
    y7 = random(height / 2);
    x8 = random(width / 2);
    y8 = random(height / 2);
    x9 = random(width / 2);
    y9 = random(height / 2);
    x10 = random(width / 2);
    y10 = random(height / 2);
    x11 = random(width / 2);
    y11 = random(height / 2);
    x12 = random(width / 2);
    y12 = random(height / 2);
    x13 = random(width / 2);
    y13 = random(height / 2);
    x14 = random(width / 2);
    y14 = random(height / 2);
    x15 = random(width / 2);
    y15 = random(height / 2);
    x16 = random(width / 2);
    y16 = random(height / 2);
    x17 = random(width / 2);
    y17 = random(height / 2);
    x18 = random(width / 2);
    y18 = random(height / 2);
    x19 = random(width / 2);
    y19 = random(height / 2);
    x20 = random(width / 2);
    y20 = random(height / 2);
    x21 = random(width / 2);
    y21 = random(height / 2);
    x22 = random(width / 2);
    y22 = random(height / 2);
    x23 = random(width / 2);
    y23 = random(height / 2);
    x24 = random(width / 2);
    y24 = random(height / 2);
    x25 = random(width / 2);
    y25 = random(height / 2);

    speedX = random(1, 10);
    speedY = random(1, 10);
    speedX1 = random(1, 10);
    speedY1 = random(1, 10);
    speedX2 = random(1, 10);
    speedY2 = random(1, 10);
    speedX3 = random(1, 10);
    speedY3 = random(1, 10);
    speedX4 = random(1, 10);
    speedY4 = random(1, 10);
    speedX5 = random(1, 10);
    speedY5 = random(1, 10);
    speedX6 = random(1, 10);
    speedY6 = random(1, 10);
    speedX7 = random(1, 10);
    speedY7 = random(1, 10);
    speedX8 = random(1, 10);
    speedY8 = random(1, 10);
    speedX9 = random(1, 10);
    speedY9 = random(1, 10);
    speedX10 = random(1, 10);
    speedY10 = random(1, 10);
    speedX11 = random(1, 10);
    speedY11 = random(1, 10);
    speedX12 = random(1, 10);
    speedY12 = random(1, 10);
    speedX13 = random(1, 10);
    speedY13 = random(1, 10);
    speedX14 = random(1, 10);
    speedY14 = random(1, 10);
    speedX15 = random(1, 10);
    speedY15 = random(1, 10);
    speedX16 = random(1, 10);
    speedY16 = random(1, 10);
    speedX17 = random(1, 10);
    speedY17 = random(1, 10);
    speedX18 = random(1, 10);
    speedY18 = random(1, 10);
    speedX19 = random(1, 10);
    speedY19 = random(1, 10);
    speedX20 = random(1, 10);
    speedY20 = random(1, 10);
    speedX21 = random(1, 10);
    speedY21 = random(1, 10);
    speedX22 = random(1, 10);
    speedY22 = random(1, 10);
    speedX23 = random(1, 10);
    speedY23 = random(1, 10);
    speedX24 = random(1, 10);
    speedY24 = random(1, 10);
    speedX25 = random(1, 10);
    speedY25 = random(1, 10);

    frameRate(60);
  }
}

function draw() {
  background(0, 0, 0);

  if (frameCount > 1200) {
    var redAmount = sin(frameCount * 0.05 * TWO_PI) * 5 + 1; // compute the red amount
    var bgColor = lerpColor(color(0), color(255, 0, 0), redAmount); // interpolate between black and red
    background(bgColor); // set the background color
  }

  // Update position of element
  x += speedX;
  y += speedY;
  x1 += speedX1;
  y1 += speedY1;
  x2 += speedX2;
  y2 += speedY2;
  x3 += speedX3;
  y3 += speedY3;
  x4 += speedX4;
  y4 += speedY4;
  x5 += speedX5;
  y5 += speedY5;
  x6 += speedX6;
  y6 += speedY6;
  x7 += speedX7;
  y7 += speedY7;
  x8 += speedX8;
  y8 += speedY8;
  x9 += speedX9;
  y9 += speedY9;
  x10 += speedX10;
  y10 += speedY10;
  x11 += speedX11;
  y11 += speedY11;
  x12 += speedX12;
  y12 += speedY12;
  x13 += speedX13;
  y13 += speedY13;
  x14 += speedX14;
  y14 += speedY14;
  x15 += speedX15;
  y15 += speedY15;
  x16 += speedX16;
  y16 += speedY16;
  x17 += speedX17;
  y17 += speedY17;
  x18 += speedX18;
  y18 += speedY18;
  x19 += speedX19;
  y19 += speedY19;
  x20 += speedX20;
  y20 += speedY20;
  x21 += speedX21;
  y21 += speedY21;
  x22 += speedX22;
  y22 += speedY22;
  x23 += speedX23;
  y23 += speedY23;
  x24 += speedX24;
  y24 += speedY24;
  x25 += speedX25;
  y25 += speedY25;

  // Bounce off the edges of the canvas
  if (x > width || x < 0) {
    speedX *= -1;
  }
  if (y > height || y < 0) {
    speedY *= -1;
  }
  if (x1 > width || x1 < 0) {
    speedX1 *= -1;
  }
  if (y1 > height || y1 < 0) {
    speedY1 *= -1;
  }
  if (x2 > width || x2 < 0) {
    speedX2 *= -1;
  }
  if (y2 > height || y2 < 0) {
    speedY2 *= -1;
  }
  if (x3 > width || x3 < 0) {
    speedX3 *= -1;
  }
  if (y3 > height || y3 < 0) {
    speedY3 *= -1;
  }
  if (x4 > width || x4 < 0) {
    speedX4 *= -1;
  }
  if (y4 > height || y4 < 0) {
    speedY4 *= -1;
  }
  if (x5 > width || x5 < 0) {
    speedX5 *= -1;
  }
  if (y5 > height || y5 < 0) {
    speedY5 *= -1;
  }
  if (x6 > width || x6 < 0) {
    speedX6 *= -1;
  }
  if (y6 > height || y6 < 0) {
    speedY6 *= -1;
  }
  if (x7 > width || x7 < 0) {
    speedX7 *= -1;
  }
  if (y7 > height || y7 < 0) {
    speedY7 *= -1;
  }
  if (x8 > width || x8 < 0) {
    speedX8 *= -1;
  }
  if (y8 > height || y8 < 0) {
    speedY8 *= -1;
  }
  if (x9 > width || x9 < 0) {
    speedX9 *= -1;
  }
  if (y9 > height || y9 < 0) {
    speedY9 *= -1;
  }
  if (x10 > width || x10 < 0) {
    speedX10 *= -1;
  }
  if (y10 > height || y10 < 0) {
    speedY10 *= -1;
  }
  if (x11 > width || x11 < 0) {
    speedX11 *= -1;
  }
  if (y11 > height || y11 < 0) {
    speedY11 *= -1;
  }
  if (x12 > width || x12 < 0) {
    speedX12 *= -1;
  }
  if (y12 > height || y12 < 0) {
    speedY12 *= -1;
  }
  if (x13 > width || x13 < 0) {
    speedX13 *= -1;
  }
  if (y13 > height || y13 < 0) {
    speedY13 *= -1;
  }
  if (x14 > width || x14 < 0) {
    speedX14 *= -1;
  }
  if (y14 > height || y14 < 0) {
    speedY14 *= -1;
  }
  if (x15 > width || x15 < 0) {
    speedX15 *= -1;
  }
  if (y15 > height || y15 < 0) {
    speedY15 *= -1;
  }
  if (x16 > width || x16 < 0) {
    speedX16 *= -1;
  }
  if (y16 > height || y16 < 0) {
    speedY16 *= -1;
  }
  if (x17 > width || x17 < 0) {
    speedX17 *= -1;
  }
  if (y17 > height || y17 < 0) {
    speedY17 *= -1;
  }
  if (x18 > width || x18 < 0) {
    speedX18 *= -1;
  }
  if (y18 > height || y18 < 0) {
    speedY18 *= -1;
  }
  if (x19 > width || x19 < 0) {
    speedX19 *= -1;
  }
  if (y19 > height || y19 < 0) {
    speedY19 *= -1;
  }
  if (x20 > width || x20 < 0) {
    speedX20 *= -1;
  }
  if (y20 > height || y20 < 0) {
    speedY20 *= -1;
  }
  if (x21 > width || x21 < 0) {
    speedX21 *= -1;
  }
  if (y21 > height || y21 < 0) {
    speedY21 *= -1;
  }
  if (x22 > width || x22 < 0) {
    speedX22 *= -1;
  }
  if (y22 > height || y22 < 0) {
    speedY22 *= -1;
  }
  if (x23 > width || x23 < 0) {
    speedX23 *= -1;
  }
  if (y23 > height || y23 < 0) {
    speedY23 *= -1;
  }
  if (x24 > width || x24 < 0) {
    speedX24 *= -1;
  }
  if (y24 > height || y24 < 0) {
    speedY24 *= -1;
  }
  if (x25 > width || x25 < 0) {
    speedX25 *= -1;
  }
  if (y25 > height || y25 < 0) {
    speedY25 *= -1;
  }
  // Draw the element
  fill(255, 255, 255);
  textSize(20);
  text("i don't want to live in a hole anymore", x, y);
  text("it's me", x1, y1);
  text("it's all me", x2, y2);
  text("if only i stopped prioritizing fun", x3, y3);
  text("but isn't this fun?", x4, y4);
  text("why isn't this fun?", x5, y5);
  text("is this my life?", x6, y6);
  text("what is happening?", x7, y7);
  text("is this social justice?", x8, y8);
  text("is this right?", x9, y9);
  text("am i failing?", x10, y10);
  text("is it my fault?", x11, y11);
  text("what do i do?", x12, y12);
  text("im so tired", x13, y13);
  text("i feel heavy", x14, y14);
  text("is this good?", x15, y15);
  text("am i doing enough?", x16, y16);
  text("this code sucks", x17, y17);
  text("am i good enough?", x18, y18);
  text("was this the right decision?", x19, y19);
  text("i cant afford to be mediocre", x20, y20);
  text("my life is this sad", x21, y21);
  text("im not an artist", x22, y22);
  text("will i be remembered?", x23, y23);
  text("20 more days", x24, y24);
  text("i am drowning", x25, y25);
}
