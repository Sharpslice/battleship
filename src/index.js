import "./styles.css"
import "./gameboard-ui.css"
console.log("webpack is working!")
import { Gameboard } from "./gameboard"
import { buildGameBoard } from "./gameboard-ui"
import {Player} from "./player"
function main(){
    const gameboardHuman = new Gameboard(10)
    const gameboardComputer = new Gameboard(10)
    const human = new Player(gameboardHuman,Player.HUMAN);
    const computer = new Player(gameboardComputer,Player.AI);

    

    buildGameBoard(human.gameboard.size);

}

main();