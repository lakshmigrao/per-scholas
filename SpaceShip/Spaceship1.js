//Bonus 1 - set the alienships to 10
//Bonus 2 - option to choose which ship to be attacked
//Bonus 3 - improving the hit points by a random number each time
//Bonus Bonus 1 - when the game is over , the user is prompted to play the next game or not, if yes, all the values are set to default
class Ship{
    static alienShipNoAttacked = 0;
    static fighterShipDestroyed = false
    constructor(name, hull, firepower, accuracy){
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = accuracy
    }
    attack(TargetShip){//FighterShip is attacking the Alienship
      console.log("%cFighter Ship is Attacking...","color:green")
      if (Math.random() < this.accuracy){
        console.log("%cFighter Ship has a hit... ","color:green")
        this.hull -= TargetShip.firepower
        this.hull += Math.round((Math.random()*10))
        this.checkShipDestroyed();
        }else {
          console.log("%cFighter Ship has missed...","color:grey")
        }            
    }
    alienAttack(TargetShip) {//Alienship is attacking the Fightership
      console.log("%cAlienShip is attacking...","color:red")
      if (Math.random() < this.accuracy) {
        this.hull -= TargetShip.firepower
        console.log("%cAlienship has a hit","color:red")
        this.checkShipDestroyed()
      } else {
          console.log("%cAlienShip has missed...","color:grey")
      }            
    }
    checkShipDestroyed(){//Checks if a ship's hull value is less than zero, then displays its destroyed.
      if(this.name=="Fighter" && this.hull<=0){
        Ship.fighterShipDestroyed =true
        console.log("%c"+this.name+" Ship is destroyed...", "color:red")
        console.log("%cGame Over. The Fighter Ship Lost.....","font-size:30px;color:red;font-style:italic")
      }else if(this.name=="Alien" && this.hull<=0){
        Ship.alienShipNoAttacked++
        console.log("%c"+Ship.alienShipNoAttacked + " Alien Ship destroyed","color:red;font-size:30px")
      }
    }
    static printStatus(fighterShip, aliens){//Prints the current status of all ships including their hull values, fire power and accuracy
      console.log("*******************************************************")
      console.log("%cUSS HELLOWORLD Fighter Ship : Hull = "+fighterShip.hull+", firepower = "+fighterShip.firepower+", accuracy = "+fighterShip.accuracy,"font-style:italic; font-size:20px")
      console.log("*******************************************************")
      for(let i=0;i<aliens.length;i++){
        if(aliens[i].hull>0){
          console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+")
          console.log("%cAlien Ship"+(i+1)+ ": Hull = "+aliens[i].hull+", firepower = "+aliens[i].firepower+", accuracy = "+aliens[i].accuracy,"font-style:italic; font-size:20px")
        }
      }
      console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+")
    }
    static battle(fighterShip,ship2){  //battle() invokes attack() and alienattack() , when either attack results in a hull value less than zero, that ship is destroyed
      while ((fighterShip.hull > 0) && (ship2.hull > 0)) {
          fighterShip.attack(ship2)
          if(ship2.hull>0 && Ship.fighterShipDestroyed == false)
              ship2.alienAttack(fighterShip)
      }
      if(Ship.fighterShipDestroyed == false && Ship.alienShipNoAttacked!==Aliens.length ){//Checks if the fightership is not destroyed and all aleinships are not destroyed, in that case the user is prompted the number of alienship to be attacked
        Ship.printStatus(fighterShip,Aliens)
        let promptAttackRetreat = prompt((totalAliens-Ship.alienShipNoAttacked)+" Alienship left. Do you want to attack(a) or retreat(r)?")
        if(promptAttackRetreat == "a"){
          let promptNoOfShip = prompt("Give the number of AlienShip to be attacked : ")
          console.log("%cAttack AlienShip"+promptNoOfShip,"color:blue")
          Ship.battle(fighterShip,Aliens[promptNoOfShip-1])
          }else if(promptAttackRetreat=="r"){
            console.log("%cRetreat","font-style:bold; font-size:30px")
          }
        }else if(Ship.alienShipNoAttacked==Aliens.length){
          console.log("%cAll Alienships are destroyed.","font-size:30px;color:crimson,;font-style:italic")
          console.log("%cAliens Lost the Battle. Fighter Ship won.....","font-size:30px;color:green;font-style:italic")
        }
    }  
    static playGame(fighterShip,Aliens){//playGame() invokes battle()
      Ship.printStatus(fighterShip,Aliens)
      let promptNoOfShip = prompt("Give the number of AlienShip to be attacked : ")
      console.log("%cAttack AlienShip"+promptNoOfShip,"color:blue")
      Ship.battle(fighterShip,Aliens[promptNoOfShip-1])
    }
  }
  function generateShips(){// generates the fightership and 6 alienships
      fighterShip = new Ship("Fighter", 20, 5, 0.7)
      Aliens = [];
      for(let i=0;i<6;i++){
        Aliens.push(new Ship("Alien", Math.floor(Math.random() * (6 -3 ) + 3), Math.floor(Math.random() * (4 - 2) + 2), (Math.random() * (0.8 - 0.6) + 0.6).toFixed(1)))
      }    
  }
  console.log('%c spacebattle', 'font-size: 40px; background : azure; color:blue; font-style:bold');
  let fighterShip;
  let Aliens = [];
  generateShips()
  let totalAliens = Aliens.length
  Ship.playGame(fighterShip,Aliens)//first time playGame() is invoked
  let anotherGame = prompt("Do you want to play another game?y/n");
  while(anotherGame == 'y'){//repeats the Game if user wants to play again
      generateShips()
      Ship.alienShipNoAttacked = 0;
      Ship.fighterShipDestroyed = false;
      console.log('%c spacebattle', 'font-size: 40px; background : azure; color:blue; font-style:bold');
      Ship.playGame(fighterShip,Aliens)
      anotherGame = prompt("Do you want to play another game?y/n")
  }
  
   
  
  