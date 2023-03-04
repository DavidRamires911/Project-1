class Player {
  constructor() {
    this.positionX = 15;
    this.positionY = 32;
    this.width = 5;
    this.height = 5;
    this.domElement=null

    this.createDomElement();
  }
  createDomElement() {
   this.domElement = document.createElement("div");

    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    const mapElm = document.getElementById("map");
    mapElm.appendChild(this.domElement);
  }

  moveLeft() {
    this.positionX--;
    this.domElement.style.left=this.positionX+ "vw"
    console.log("position...", this.positionX);
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left=this.positionX + "vw"
    console.log("position...", this.positionX);
  }
  moveUp() {
    this.positionY++;
    this.domElement.style.bottom=this.positionY + "vh"
    console.log("position...", this.positionY);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom=this.positionY + "vh"
    console.log("position...", this.positionY);
  }
  moveDiagonalUpRight(){


  }
}
const player = new Player();

document.addEventListener("keydown", function (e) {
  ///// Movement keys
  if (e.key === "ArrowRight") {
    player.moveRight();
  } else if (e.key === "ArrowLeft") {
    player.moveLeft();
  } else if (e.key === "ArrowUp") {
    player.moveUp();
  } else if (e.key === "ArrowDown") {
    player.moveDown();
  }
  /////////// Diagonal movement keys Trys////////git
  if (e.key === "ArrowUp" && e.key === "ArrowRight") {
  player.moveUp() + player.moveRight(); }

  if (e.key=== "ArrowUp" && e.key ==="ArrowLeft"){
    player.moveUp;
    player.moveLeft;
  } 

});



