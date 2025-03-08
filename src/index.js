import "./styles.css"
import "./gameboard-ui.css"
console.log("webpack is working!")
import { Gameboard } from "./gameboard"
import { GameboardUi } from "./gameboard-ui"
import {Player, player} from "./player"
import { Ship } from "./ship"
import { GameController } from "./gameController"
function main(){
    
    const human = new Player(new Gameboard(10),player.HUMAN);
    const computer = new Player(new Gameboard(10),player.AI);
    const controller = new GameController(human,computer);
    const player1Ui = new GameboardUi(human.gameboard,controller);
    const player2Ui = new GameboardUi(computer.gameboard,controller);
    
    const testShip = new Ship(4,false);
    


    human.gameboard.placeShip(testShip,[4,4],"vertical");
    human.gameboard.placeShip(testShip,[8,4],"horizontal");

    computer.gameboard.placeShip(testShip,[9,1],"vertical");
    computer.gameboard.placeShip(testShip,[4,4],"horizontal")
   
    player1Ui.renderBoard();
    player2Ui.renderBoard();
    




}

main();