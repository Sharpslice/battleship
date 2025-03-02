const player ={
    HUMAN: "human",
    AI: "ai"
}
import { Gameboard } from "./gameboard";
export class Player{
    constructor(gameboard,type){
        this.gameboard = gameboard;
        this.type = type
    }
}