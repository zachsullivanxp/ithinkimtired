let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;

let angleX = 0;
let angleY = 0;
let angleZ = 0;

let angleX1 = 0;
let angleY1 = 0;
let angleZ1 = 0;

let angleX2 = 0;
let angleY2 = 0;
let angleZ2 = 0;

let angleX3 = 0;
let angleY3 = 0;
let angleZ3 = 0;

let angleX4 = 0;
let angleY4 = 0;
let angleZ4 = 0;

let angleX5 = 0;
let angleY5 = 0;
let angleZ5 = 0;

let angleX6 = 0;
let angleY6 = 0;
let angleZ6 = 0;

let angleX7 = 0;
let angleY7 = 0;
let angleZ7 = 0;

let angleX8 = 0;
let angleY8 = 0;
let angleZ8 = 0;

let angleX9 = 0;
let angleY9 = 0;
let angleZ9 = 0;

let angleX10 = 0;
let angleY10 = 0;
let angleZ10 = 0;

function preload() {
  img = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-24%20at%203.23.55%20PM.png?v=1682375224980"
  );
  img1 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-01-25%20at%203.25.33%20PM.png?v=1682375231742"
  );
  img2 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202022-12-12%20at%208.56.05%20PM.png?v=1682375234756"
  );
  img3 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Image%20Project%20Final%20Image.png?v=1682546827477"
  );
  img4 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-26%20at%203.02.44%20PM.png?v=1682546867499"
  );
  img5 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-26%20at%203.15.39%20PM.png?v=1682547443109"
  );
  img6 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-26%20at%203.13.46%20PM.png?v=1682547525248"
  );
  img7 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-26%20at%203.15.03%20PM.png?v=1682547534536"
  );
  img8 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/Screen%20Shot%202023-04-26%20at%203.11.46%20PM.png?v=1682547558211"
  );
  img9 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/IMG_1517.JPG?v=1682548161362"
  );
  img10 = loadImage(
    "https://cdn.glitch.global/f228fa8a-791a-407b-9c97-42166802efcf/IMG_2491.png?v=1682548150646"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  push();
  rotateX(angleX);
  rotateY(angleY);
  rotateZ(angleZ);
  texture(img);
  plane(175);
  angleX += 0.01;
  angleY += 0.005;
  angleZ += 0.003;
  pop();

  push();
  rotateX(angleX1);
  rotateY(angleY1);
  rotateZ(angleZ1);
  texture(img1);
  translate(500, 100, 50);
  plane(175);
  angleX1 += -0.01;
  angleY1 += 0.002;
  angleZ1 += 0.001;
  pop();
  //  this is a cool double side effect?
  push();
  rotateX(angleX1);
  rotateY(angleY1);
  rotateZ(angleZ1);
  texture(img2);
  translate(200, 50, 50);
  plane(175);
  angleX1 += 0;
  angleY1 += 0;
  angleZ1 += 0;
  pop();

  push();
  rotateX(angleX2);
  rotateY(angleY2);
  rotateZ(angleZ2);
  texture(img2);
  translate(-330, 50, 50);
  plane(175);
  angleX2 += 0.002;
  angleY2 += 0.003;
  angleZ2 += 0.004;
  pop();

  push();
  rotateX(angleX3);
  rotateY(angleY3);
  rotateZ(angleZ3);
  texture(img3);
  translate(-130, -125, 50);
  plane(175);
  angleX3 += 0.001;
  angleY3 += 0.003;
  angleZ3 += 0.005;
  pop();

  push();
  rotateX(angleX4);
  rotateY(angleY4);
  rotateZ(angleZ4);
  texture(img4);
  translate(340, -125, 20);
  plane(175);
  angleX4 += 0.01;
  angleY4 += 0.001;
  angleZ4 += 0.002;
  pop();

  push();
  rotateX(angleX5);
  rotateY(angleY5);
  rotateZ(angleZ5);
  texture(img5);
  translate(525, 250, 20);
  plane(175);
  angleX5 += 0.005;
  angleY5 += -0.01;
  angleZ5 += 0.003;
  pop();

  push();
  rotateX(angleX6);
  rotateY(angleY6);
  rotateZ(angleZ6);
  texture(img6);
  translate(-300, 250, 20);
  plane(175);
  angleX6 += -0.004;
  angleY6 += 0.005;
  angleZ6 += 0.0001;
  pop();

  push();
  rotateX(angleX7);
  rotateY(angleY7);
  rotateZ(angleZ7);
  texture(img7);
  translate(100, -250, 20);
  plane(175);
  angleX7 += 0.005;
  angleY7 += -0.002;
  angleZ7 += 0.003;
  pop();

  push();
  rotateX(angleX8);
  rotateY(angleY8);
  rotateZ(angleZ8);
  texture(img8);
  translate(20, -350, 20);
  plane(175);
  angleX8 += 0.001;
  angleY8 += 0.001;
  angleZ8 += 0.001;
  pop();

  push();
  rotateX(angleX9);
  rotateY(angleY9);
  rotateZ(angleZ9);
  texture(img9);
  translate(-450, -300, 20);
  plane(175);
  angleX9 += 0.001;
  angleY9 += 0.0002;
  angleZ9 += -0.002;
  pop();

  push();
  rotateX(angleX10);
  rotateY(angleY10);
  rotateZ(angleZ10);
  texture(img10);
  translate(-590, 30, 20);
  plane(175);
  angleX10 += -0.002;
  angleY10 += 0.001;
  angleZ10 += -0.004;
  pop();
}
