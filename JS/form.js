class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("play")
        this.greeting = createElement("h3")
        this.reset = createButton("reset")
        this.reset.style("font-size", "40px")
        this.reset.style("color","black")
    }

display(){
var title = createElement("h2")
 title.html("car racing game")
 title.position(displayWidth/2 - 60, 20);
 this.reset.position(displayWidth - 200, 30)


this.input.position(displayWidth/2 - 70, displayHeight/2 - 80);


this.button.position(displayWidth/2 + 30,displayHeight/2);


this.reset.mousePressed(()=> {
    if(gameState == 2){
    player.updateCount(0);
    game.update(0);
    }
})

this.button.mousePressed(()=>{
    this.input.hide() 
    this.button.hide()

 player.name = this.input.value()

playerCount = playerCount + 1

player.index = playerCount

player.update()
player.updateCount(playerCount)


this.greeting.html("hello " + player.name)
this.greeting.position(displayWidth/2 -90,displayHeight/4)
})

}

hide(){

    this.input.hide() 
    this.button.hide()
    this.greeting.hide()
    

}

}