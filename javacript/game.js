class Player {
  constructor() {
    this.positionX = 15;
    this.positionY = 32;
    this.width = 2;
    this.height = 5;
    this.domElement = null;

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
    this.domElement.style.left = this.positionX + "vw";
    console.log("position...", this.positionX);
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
    console.log("position...", this.positionX);
  }
  moveUp() {
    this.positionY++;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log("position...", this.positionY);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log("position...", this.positionY);
  }
  // //   moveDiagonalUpRight(){
  // //     this.positionX++;
  // //     this.positionY++
  // //     this.domElement.style.left=this.positionX + "vw"
  // //     this.domElement.style.bottom=this.positionY + "vh"

  // //   }
}

class Rats {
  constructor() {
    this.width = 3;
    this.height = 3;
    this.positionX = 0; //max95
    this.positionY = 0;

    this.domElement = null;
    this.createDomElement();
    this.randomSpawnX();
    this.randomSpawnY()
  }
  createDomElement() {
    this.domElement = document.createElement("div");

    this.domElement.className = "rats";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";

    const mapElm = document.getElementById("map");
    mapElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }

  ////////////////
  follow(player) {
    const distanceX = player.positionX - this.positionX;
    const distanceY = player.positionY - this.positionY;
    const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    this.speed = 0.5; //////Need to change over time or score????
    const vx = (distanceX / dist) * this.speed;
    const vy = (distanceY / dist) * this.speed;
    this.positionX += vx;
    this.positionY += vy;

    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";
  }



/////////////////////Work in progress spawn inside the map, add with this.positionY + vw this.positionX + vh
  randomSpawnX() {
    const mapWidth = 80; 
    

    // generate a random X position between 0 and mapWidth
    this.positionX = Math.floor(Math.random() * (mapWidth + 1));
    
    // update the position of the rat's DOM element
    this.domElement.style.left = this.positionX + "vw";
    
  
  }
  randomSpawnY(){
    const mapHeigth= 90

    this.positionY = Math.floor(Math.random() * (mapHeigth +1))
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const player = new Player();

const ratArray = [];

///// Movement keys

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    player.moveRight();
  }
  if (e.key === "ArrowLeft") {
    player.moveLeft();
  }
  if (e.key === "ArrowUp") {
    player.moveUp();
  }
  if (e.key === "ArrowDown") {
    player.moveDown();
  }

  //////////diagonal move still in progress
  ////if (e.key === "ArrowUp" && e.key==="ArrowRight" ){}
});

///create rats
setInterval(() => {
  const newRat = new Rats();
  ratArray.push(newRat);
}, 3000);

//move rats
setInterval(() => {
  ratArray.forEach((ratInstance) => {
    ratInstance.follow(player);
  });
}, 200);
