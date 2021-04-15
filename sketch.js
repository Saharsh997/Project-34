var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
	dogImg = loadImage('dogImg.png');
  happyDogImg = loadImage('dogImg1.png');
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImg);

  var foodStock = database.ref('Food');

  foodStock.on("value", readStock);
  
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x - 1;
  }



  database.ref('/').update({
    Food: x
  })
}



function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }

  drawSprites();
  
  text("Press Up Arrow key to feed milk!", 250, 450);

}



