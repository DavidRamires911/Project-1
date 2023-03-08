////Mvp make the rats fall in the traps before hit the player!!!
////Next set colision rats with traps, rats with player
////Rats spawn in x and y axis

/*-Extras Hp for player-7hearts , lose one per rat
  -Set timout for traps (cooldown)
  -Bigger rat that can hit 2 traps 
  -Sound, random rat sound and dips                            */
// function starGame(){

//     let start=document.getElementById("start")
//     let board = document.getElementById("map")
//     let gameover= document.getElementById("game-over")
//     start.style.display="none";
//     board.style.display= "block"
//     gameover.style.display="none"
//     start()

// function starGame(){
//   let start=document.getElementById("start");
//   let map= document.getElementById("map");
//   let gameOver= document.getElementById("game-over");
//   start.style.display="none";
//   map.style.display="block";
//   gameOver.style.display="none";

// }
// function gameOver(){ let start=document.getElementById("start");
// let map= document.getElementById("map");
// let gameOver= document.getElementById("game-over");
// start.style.display="none";
// map.style.display="none";
// gameOver.style.display="block";}



let score=0
let health = 7;


class Game{
  constructor(){
    this.keysDown = {};
    this.attachEventListeners()
    this.movePlayer()
  }
  attachEventListeners() {
    //Player movement with arrow keys
    document.addEventListener("keydown", (event) => {
      this.keysDown[event.code] = true;
});
    document.addEventListener("keyup", (event) => {
      this.keysDown[event.code] = false;
      
    });
    
  }

  movePlayer() {
    if (this.keysDown["ArrowRight"]) {
      player.moveRight();
    }
    if (this.keysDown["ArrowLeft"]) {
      player.moveLeft();
    }
    if (this.keysDown["ArrowUp"]) {
      player.moveUp();
    }
    if (this.keysDown["ArrowDown"]) {
      player.moveDown();
    }
    this.movementPlayer = setTimeout(() => {
      this.movePlayer();
    }, 8);
  }
}
class Player {
  constructor() {
    this.positionX = 23;
    this.positionY = 43;
    this.width = 2;
    this.height = 5;
    this.health = 7;
    this.intervalId = null;
    this.playerSpeed = .2
    this.domElement = null;
    this.minX=0
    this.maxX=60
    this.minY=0;
    this.maxY=90
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
    if (this.positionX>0){ 
    this.positionX -= this.playerSpeed;
    this.domElement.style.left = this.positionX + "vw"; }
    //console.log("position...", this.positionX);
  }
  moveRight() {
    if (this.positionX + this.width < this.maxX){   
    this.positionX += this.playerSpeed
    this.domElement.style.left = this.positionX + "vw"; }
    //console.log("position...", this.positionX);
  }
  moveUp() {
    if (this.positionY + this.height < this.maxY){ 
    this.positionY +=this.playerSpeed
    this.domElement.style.bottom = this.positionY + "vh"; }
    //console.log("position...", this.positionY);
  }
  moveDown() {
    if (this.positionY > 0) {
    this.positionY -= this.playerSpeed
    this.domElement.style.bottom = this.positionY + "vh"; }
    //console.log("position...", this.positionY);
  }
  
}



class Rats {

  
  constructor() {
    this.width = 4;
    this.height = 7;
    this.positionX = 0; //max95
    this.positionY = 0;
    

    this.domElement = null;
    this.createDomElement();
    this.checkForCollisions();

    this.randomSpawn();
    
  }
  createDomElement() {
    this.ratElement = document.createElement("div");

    this.ratElement.className = "rats";
    this.ratElement.style.width = this.width + "vw";
    this.ratElement.style.height = this.height + "vh";

    const mapElm = document.getElementById("map");
    mapElm.appendChild(this.ratElement);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }

  ////////////////
  follow(player) {
    ///distance between player and obstacle
    const distanceX = player.positionX - this.positionX;
    const distanceY = player.positionY - this.positionY;
    const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    this.speed = 1; //////Need to change over time or score????
    const vx = (distanceX / dist) * this.speed;
    const vy = (distanceY / dist) * this.speed;
    this.positionX += vx;
    this.positionY += vy;

    this.ratElement.style.left = this.positionX + "vw";
    this.ratElement.style.bottom = this.positionY + "vh";
   
    if (score >= 4 && score < 8) {
      this.speed += 2;
    } else if (score >= 8) {
      this.speed += 5;
    }
  }
  
   

  

  /////////////////////Work in progress spawn inside the map, add with this.positionY + vw this.positionX + vh
  randomSpawn() {
    const mapWidth = 60;
    const mapHeight = 90;

    this.positionX = Math.floor(Math.random() * (mapWidth + 1));
    this.positionY = Math.floor(Math.random() * (mapHeight + 1));

    // update the position of the rat's DOM element
    this.ratElement.style.left = this.positionX + "vw";
    this.ratElement.style.bottom = this.positionY + "vh";
  }

  checkForCollisions() {
    const scoreDiv = document.getElementById("score");
    
    
    trapArray.forEach((trap) => {
      ratArray.forEach((rat, index) => {
        if (
          trap.positionX + trap.width > rat.positionX &&
          trap.positionX < rat.positionX + rat.width &&
          trap.positionY + trap.height > rat.positionY &&
          trap.positionY < rat.positionY + rat.height
        ) {
          
          ratArray.splice(index, 1);
          rat.ratElement.remove();
          console.log("Hi");

          score += 2;
          
          scoreDiv.textContent = "Score: " + score;
          
        }
      });
    });
    
  }
}


class Traps {
  constructor(positionX, positionY) {
    this.width = 4;
    this.height = 7;
    this.positionX = positionX;
    this.positionY = positionY;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "traps";

    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    const mapElm = document.getElementById("map");
    mapElm.appendChild(this.domElement);
  }
}

const game = new Game()
const player = new Player();


const ratArray = [];

const trap1 = new Traps(15, 70);
const trap2 = new Traps(45, 55);
const trap3 = new Traps(49, 15);
const trap4 = new Traps(15, 20);
const trapArray = [trap1, trap2, trap3, trap4];



///create rats
setInterval(() => {
  const newRat = new Rats();
  ratArray.push(newRat);
}, 3000);



//move rats
setInterval(() => {
  const healthDiv = document.getElementById("health")
  ratArray.forEach((ratInstance) => {
    this.ratInstance = ratInstance;
    this.ratInstance.follow(player);

    if (
      player.positionX < this.ratInstance.positionX + this.ratInstance.width &&
      player.positionX + player.width > this.ratInstance.positionX &&
      player.positionY < this.ratInstance.positionY + this.ratInstance.height &&
      player.height + player.positionY > this.ratInstance.positionY
    ) {
      const index = ratArray.indexOf(ratInstance);

      ratArray.splice(index, 1);

      ratInstance.ratElement.remove();
      console.log("collision");
      health--;
      healthDiv.textContent = "Health: " + health;
      if (health <= 0) {
        console.log("game over");
        window.location.href = "./gameover.html";
        clearInterval(this.intervalId);
      }
    }
  });
}, 200);

this.intervalId = setInterval;
