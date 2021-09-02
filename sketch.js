var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 



//create empty arrays for plinkos, divisions, and particles
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
//create divions
  
  
  
//create for loops for plinkos
  
    

    
}
 


function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
 //create loops for divisions
  
  
}
