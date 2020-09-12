var database, gameState = 0,playerCount = 0
var form,player,game,allPlayers
var car1,car2,car3,car4
var cars = [];
var car1Image,car2Image,car3Image,car4Image
var trackImage

function preload(){

car1Image = loadImage("images/runner1.png")
car2Image = loadImage("images/runner2.png")
car3Image = loadImage("images/runner3.png")
car4Image = loadImage("images/runner4.png")
trackImage = loadImage("images/runningTrack.png")

}

function setup(){
    createCanvas(displayWidth - 60,displayHeight - 100);
    
    database = firebase.database()

    game = new Game()
    game.getState()
    game.start()

    console.log(displayWidth,displayHeight)


    
}

function draw(){
    

 
if(playerCount == 4){
    game.update(1)
}

if(gameState == 1){
    game.play();
}

if(gameState == 2){
    game.end();
}

}


