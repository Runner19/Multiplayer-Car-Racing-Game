class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }
  getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }
  update(){
    var playerIndex = "Players/Player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('Players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
   carsatend(){
     database.ref("CarsAtEnd").on("value", (data) =>{
       this.rank = data.val();
     })
   }
  static updateCarsAtEnd(Rank){
     database.ref("/").update({
       CarsAtEnd:Rank
     })
  }
}