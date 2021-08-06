// create our circle that bounces on every corner
// simulate with legendary box bouncing, then use mouseX and mouseY to push away the ballslet canvasWidth = 1000;
// add in a basket hoop to the side to act as our target
// keep adding on to make it more animatic
// illusion of leaving a trail!!
// when user presses mouse and is colliding with ball, make a frenzy of balls, oop!

let canvasWidth = 1000;
let canvasHeight = 500;
let xSpeed, ySpeed;
let xPos = 150;
let yPos = 400;
// create direction variable
let xDir = 1;
let yDir = 1;
// positive distance can be changed to negative distance
let basketTop, basketLeft, basketRight,basketCenter,basketBottom; // coords for basket hoop, needed for collision
let myTop, myBottom,myLeft,myRight; // coords for hit box of ball

let r = 255;
let g = 0;
let b = 0;

let basketImage;

function preload() {
    // preload our basket hoop image
    basketImage = loadImage("images/baskethoop.png");

}

function setup() {
    createCanvas(canvasWidth,canvasHeight);
    background(255,255,0);

    xSpeed = random(-5,5);
    ySpeed = random(-5,5);
    noStroke();
}
function draw() {
    // coords for sprites
    basketCenter = 150;

    basketTop = basketCenter - 50; // y var
    basketRight = basketCenter + 50; // x var
    basketLeft = basketCenter - 50; // x var
    basketBottom = basketCenter + 50; // y var
    // coords for ball
    myLeft = xPos - 25;
    myRight = xPos + 25;
    myBottom = yPos + 25;
    myTop = yPos - 25;
    // color variables

    background(255,255,0,45);
    
    
    fill(r,g,b);
    ellipse(xPos,yPos,50,50);
    // 3 represents the xSpeed
    // xPos += 3;
    xPos += xSpeed * xDir; // do something with yPos too
    yPos += ySpeed * yDir;

    
    // if statements to check if walls are hit
    if (xPos > canvasWidth - 25 || xPos < 25 ) {
        // change xdirection
        // once direction changes --> wall is hit --> change color
        console.log("Hoop or wall")
        xDir *= -1;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
        // multiply by negative one change sign 
    }
    if ((myLeft < basketRight + 10 && myBottom < basketBottom && myTop > basketTop)) {
        // this if statement indicates if the ball hit the right side of the basket hoop to change direction
        // i must only allow the ball to enter from the top of the hoop to score points
// console.log('hoop!', "Ball Bottom",myBottom,"BasketBottom:",basketBottom)
        xDir *= -1;
    }
    if (myTop < basketBottom + 10 && myLeft > basketLeft && myRight < basketRight) {
        // this if statement checks when the ball hits the bottom of the hoop, and rebounds it, so no player scores from underneath
        yDir *= -1;
    }
    if (yPos > canvasHeight - 25 || yPos < 25 ) {
        yDir *= -1;
        // once direction changes --> change color
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    
    // if statements to check if mousex and mouse y are near position of ball
    if (mouseX > xPos - 20 && mouseX < xPos + 20 && mouseY > yPos - 20 && mouseY < yPos + 20) {
        // this accurately tells when the cursor is near the ball
        // change random speed to have the ball bounce off crazy when the cursor is near
        
        xSpeed = random(-5,5);
        ySpeed = random(-5,5);
        
        //     console.log("Mouse X:",mouseX,"mouseY:",mouseY);
        //     console.log("CircleX:",xPos,"CircleY:",yPos);
    }
    
    // check for collision between ball and hoop
    // if (myLeft > basketRight || myRight < basketLeft)
    // no collision detected here
    
    // add basket hoop image below
    image(basketImage,100,100,100,100);
}