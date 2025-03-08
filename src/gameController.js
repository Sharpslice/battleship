export class GameController{
    constructor(player1,player2){
        this.players = [player1,player2]
        this.currentPlayerIndex = 0;
    }

    getCurrentPlayer(){
        return this.players[this.currentPlayerIndex];
    }

    switchTurns(){
        
        return this.currentPlayerIndex = (this.currentPlayerIndex===0) ? 1:0;

    }
    playerTurn(x,y){
        this.getCurrentPlayer().gameboard.receiveAttack([x,y])
    }
    computerTurn(x,y){
        this.getCurrentPlayer().gameboard.receiveAttack([x,y])
    }

    playTurn(x,y){
        if(this.currentPlayerIndex==0){
            console.log("player turn")
            this.playerTurn(x,y);
            this.switchTurns();
        }
        else{
            console.log("computer turn")
            this.computerTurn(x,y);
            this.switchTurns();
        }
    }


}