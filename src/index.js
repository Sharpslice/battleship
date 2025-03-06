import "./styles.css"
import "./gameboard-ui.css"
console.log("webpack is working!")
import { Gameboard } from "./gameboard"
import { GameboardUi } from "./gameboard-ui"
import {Player} from "./player"
import { Ship } from "./ship"
function main(){
    
    const human = new Player(new Gameboard(10),Player.HUMAN);
    const computer = new Player(new Gameboard(10),Player.AI);

    const player1Ui = new GameboardUi(human.gameboard);
    const player2Ui = new GameboardUi(computer.gameboard);
    
    const testShip = new Ship(4,false);
    human.gameboard.placeShip(testShip,[4,4],"vertical");
    human.gameboard.placeShip(testShip,[8,4],"horizontal");


    player1Ui.renderBoard();
    player2Ui.renderBoard();
   

}

main();