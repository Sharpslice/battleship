import "./styles.css"
import "./gameboard-ui.css"
console.log("webpack is working!")
import { Gameboard } from "./gameboard"
import { GameboardUi } from "./gameboard-ui"
import {Player} from "./player"
function main(){
    
    const human = new Player(new Gameboard(10),Player.HUMAN);
    const computer = new Player(new Gameboard(10),Player.AI);

    const player1Ui = new GameboardUi(human.gameboard);
    const player2Ui = new GameboardUi(computer.gameboard);

    player1Ui.renderBoard();

   

}

main();