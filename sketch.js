const E=Matter.Engine
const B=Matter.Bodies
const W=Matter.World
//namespacing
//when u store any value in a variable
//that value can be called by that variablename
var newengine,newworld,ball,ground
function setup()
{
  createCanvas(400,400)
  //Creates a new engine
  newengine=E.create()
  //create a new world
  newworld=newengine.world;
  var optionground={isStatic:true}
  var balloption={restitution:0.8,friction:0.4,density:1.0}
 ball= B.rectangle(200,200,50,50,balloption);
 ground=B.rectangle(200,400,400,20,optionground)
 //Matter.World.add(world,body)
W.add(newworld,ball);
W.add(newworld,ground)
console.log(ball)
} 
function draw()
{
  background("white")
  //Matter.Engine.update(engine)
  E.update(newengine)
rectMode(CENTER)
  rect(ball.position.x,ball.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
}
