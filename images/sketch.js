var Dog, happyDog, database, foodS, foodStock, position;

function setup(){
    database = firebase.database();
    dog = createSprite(250,250,10,10);
    dog.IMG("Dog.png");
    var dogPos = database.ref('dog/position');
    dogPos.on("value",readPos);
}

function draw(){
    background(46,139,87);

    foodS = 20;

  
    if(keyDown(LEFT_ARROW)){
        writePos(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(3,0);
    }
    else if(keyDown(UP_ARROW)){
        foodS = foodS-1;
    }

    drawSprites();
  } 
  
