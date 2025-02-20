import "./styles.css"
import "./gameboard-ui.css"
console.log("webpack is working!")
import { Gameboard } from "./gameboard"
import { buildGameBoard } from "./gameboard-ui"
function main(){
    const gameboard = new Gameboard(10)

    buildGameBoard(gameboard.size);

}

main();