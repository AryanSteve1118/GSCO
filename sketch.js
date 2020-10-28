var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50,200,50,50);
  wall= createSprite(1000,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
 console.log(speed);
 car.velocityX = speed;
}


function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2){//this is error..
     // car.velocityX=0;
     car.collide(wall);
     var deformation= 0.5 * weight * speed * speed/22509;
     if(deformation>180)
     {
          // car.shapeColor=color(255,0,0)  
          car.shapeColor="red";
     }
     if(deformation<180 && deformation>100)
     {
          // car.shapeColor=color(230,230,0)
          car.shapeColor="yellow";
     }
     if(deformation<100)
     {
          // car.shapeColor=color(0,255,0)
          car.shapeColor="green";
     }
  }
  drawSprites();
}