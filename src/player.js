const player ={
    HUMAN: "human",
    AI: "ai"
}

export class Player{
    constructor(gameboard,type){
        this.gameboard = gameboard;
        this.type = type
    }
}