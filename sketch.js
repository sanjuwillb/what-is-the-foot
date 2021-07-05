const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg = 0, m, hour;
function preload() {
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()
}

function draw(){
  if (backgroundImg == 0){
    //hi
  }
  else{
    background(backgroundImg)
  }
    Engine.update(engine);
    // write code to display time in correct format here
    stroke("springgreen")
    strokeWeight(2)
    fill("steelblue")
    textSize(25)
    if (m == 1){
      text(hour + " AM",20,30)
    }
    if (m == 2){
      text(hour + " PM",20,30)
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Detroit")
    var responseJSON = await response.json()
    var datetime = responseJSON.datetime
    hour = datetime.slice(11,13)
    var x
    if (hour == 6 || hour == 7){
        x = 1
    }
    if (hour == 8 || hour == 9){
        x = 2
    }
    if (hour == 10 || hour == 11){
        x = 3
    }
    if (hour == 12 || hour == 13){
        x = 4
    }
    if (hour == 14 || hour == 15){
        x = 5
    }
    if (hour == 16 || hour == 17){
        x = 6
    }
    if (hour == 18 || hour == 19){
        x = 7
    }
    if (hour == 20 || hour == 21){
        x = 8
    }
    if (hour == 22 || hour == 23){
        x = 9
    }
    if (hour == 24 || hour == 1){
        x = 10
    }
    if (hour == 2 || hour == 3){
        x = 11
    }
    if (hour == 4 || hour == 5){
        x = 12
    }
    if (x == 1){
      backgroundImg = loadImage("sunrise1.png")
    }
    if (x == 2){
      backgroundImg = loadImage("sunrise2.png")
    }
    if (x == 3){
      backgroundImg = loadImage("sunrise3.png")
    }
    if (x == 4){
      backgroundImg = loadImage("sunrise4.png")
    }
    if (x == 5){
      backgroundImg = loadImage("sunrise5.png")
    }
    if (x == 6){
      backgroundImg = loadImage("sunrise6.png")
    }
    if (x == 7){
      backgroundImg = loadImage("sunset7.png")
    }
    if (x == 8){
      backgroundImg = loadImage("sunset8.png")
    }
    if (x == 9){
      backgroundImg = loadImage("sunset9.png")
    }
    if (x == 10){
      backgroundImg = loadImage("sunset10.png")
    }
    if (x == 11){
      backgroundImg = loadImage("sunset11.png")
    }
    if (x == 12){
      backgroundImg = loadImage("sunset12.png")
    }
    if (x > 9 || x < 4){
      m = 2
    }
    if (x > 3 || x < 10){
      m = 1
    }
}
