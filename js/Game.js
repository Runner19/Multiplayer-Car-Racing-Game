class Game {
  constructor(){}
  getState(){
    var gameStateRef  = database.ref('GameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }
  update(state){
    database.ref('/').update({
      GameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('PlayerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage(Car1I);
    car2 = createSprite(300,200);
    car2.addImage(Car2I);
    cars = [car1, car2];
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
    player.carsatend();
    if(allPlayers !== undefined){
      image(trackI, 0, -displayHeight*4, displayWidth, displayHeight*5);
      var index = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 400;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if (index === player.index){
          fill("red");
          ellipse(x, y, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance == 3670){
          gameState = 2;
          game.update(2);
          player.rank += 1;
          Player.updateCarsAtEnd(player.rank);
          alert("Rank is :" + player.rank);
    }
  }
}