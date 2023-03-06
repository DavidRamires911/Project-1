////Mvp make the rats fall in the traps before hit the player!!!
////Next set colision rats with traps, rats with player
////Rats spawn in x and y axis

/*-Extras Hp for player-7hearts , lose one per rat
  -Set timout for traps (cooldown)
  -Bigger rat that can hit 2 traps 
  -Sound, random rat sound and dips                            */

class Player {
  constructor() {
    this.positionX = 23;
    this.positionY = 43;
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
    //console.log("position...", this.positionX);
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
    //console.log("position...", this.positionX);
  }
  moveUp() {
    this.positionY++;
    this.domElement.style.bottom = this.positionY + "vh";
    //console.log("position...", this.positionY);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
    //console.log("position...", this.positionY);
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
    this.height = 5;
    this.positionX = 0; //max95
    this.positionY = 0;

    this.domElement = null;
    this.createDomElement();
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
  }

  /////////////////////Work in progress spawn inside the map, add with this.positionY + vw this.positionX + vh
  randomSpawn() {
    const mapWidth = 70;
    const mapHeight = 90;

    this.positionX = Math.floor(Math.random() * (mapWidth + 1));
    this.positionY = Math.floor(Math.random() * (mapHeight + 1));

    // update the position of the rat's DOM element
    this.ratElement.style.left = this.positionX + "vw";
    this.ratElement.style.bottom = this.positionY + "vh";
  }
}
class Traps {
  constructor(positionX, positionY) {
    this.width = 3;
    this.height = 6;
    this.positionX = positionX
    this.positionY = positionY
    this.domElement = null;
    this.createDomElement()

  }
  createDomElement(){
    this.domElement = document.createElement("div")
    this.domElement.id = "traps"

    this.domElement.style.width = this.width + "vw";
  this.domElement.style.height = this.height + "vh";
  this.domElement.style.bottom = this.positionY + "vh";
  this.domElement.style.left = this.positionX + "vw";


  const mapElm = document.getElementById("map");
  mapElm.appendChild(this.domElement);

  }
   removeRat(ratInstance){
    ratArray.splice(index, 1);

        ratInstance.ratElement.remove()

   }
}
/*class Trap1{
constructor(){
  this.positionX =15;
    this.positionY = 70;
  this.width=3;
  this.height=6
  this.domElement = null;
  this.createDomElement();
}
createDomElement() {
  this.domElement = document.createElement("div");

  this.domElement.id = "trap1";
  this.domElement.style.width = this.width + "vw";
  this.domElement.style.height = this.height + "vh";
  this.domElement.style.bottom = this.positionY + "vh";
  this.domElement.style.left = this.positionX + "vw";


  const mapElm = document.getElementById("map");
  mapElm.appendChild(this.domElement);
 }
}
class Trap2{
  constructor(){
    this.positionX =45;
      this.positionY = 55;
    this.width=3;
    this.height=6
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
  
    this.domElement.id = "trap2";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";
  
  
    const mapElm = document.getElementById("map");
    mapElm.appendChild(this.domElement);
   }
  }
  class Trap3{
    constructor(){
      this.positionX =45;
        this.positionY = 5;
      this.width=3;
      this.height=6
      this.domElement = null;
      this.createDomElement();
    }
    createDomElement() {
      this.domElement = document.createElement("div");
    
      this.domElement.id = "trap3";
      this.domElement.style.width = this.width + "vw";
      this.domElement.style.height = this.height + "vh";
      this.domElement.style.bottom = this.positionY + "vh";
      this.domElement.style.left = this.positionX + "vw";
    
    
      const mapElm = document.getElementById("map");
      mapElm.appendChild(this.domElement);
     }
    }
    class Trap4{
      constructor(){
        this.positionX =15;
          this.positionY = 20;
        this.width=3;
        this.height=6
        this.domElement = null;
        this.createDomElement();
      }
      createDomElement() {
        this.domElement = document.createElement("div");
      
        this.domElement.id = "trap4";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
      
      
        const mapElm = document.getElementById("map");
        mapElm.appendChild(this.domElement);
       }
      }
*/
const player = new Player();

const ratArray = [];

const trap1 = new Traps(15,70);
const trap2 = new Traps(45,55);
const trap3 = new Traps(45,5);
const trap4 = new Traps(15,20);



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
    this.ratInstance = ratInstance;
    this.ratInstance.follow(player);

    if (
      player.positionX < this.ratInstance.positionX + this.ratInstance.width &&
      player.positionX + player.width > this.ratInstance.positionX &&
      player.positionY < this.ratInstance.positionY + this.ratInstance.height &&
      player.height + player.positionY > this.ratInstance.positionY
    ) {
      const index = ratArray.indexOf(ratInstance);
      if (index === 1 || 2 || 3 || 4) {
        ratArray.splice(index, 1);

        ratInstance.ratElement.remove();
      }

      console.log("collision");
    }
  });
}, 200);

/*setTimeout(()=>{
  trapArray.forEach((trapInstance)=>{
    

    if (trapInstance.positionX < this.ratInstance.positionX + this.ratInstance.width &&
      trapInstance.positionX +trapInstance.width > this.ratInstance.positionX &&
      trapInstance.positionY < this.ratInstance.positionY + this.ratInstance.height &&
      trapInstance.height + trapInstance.positionY > this.ratInstance.positionY
      ) {
        const index = ratArray.indexOf(this.ratInstance)
        if (index === 1||2||3||4) {
          ratArray.splice(index, 1);
          
          this.trapInstance.this.ratInstance.ratElement.remove()
          }
          console.log("TRAP")
           }
           
          })

},1000)*/

////
