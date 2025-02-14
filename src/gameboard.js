import { Ship } from "./ship";
export class Gameboard{
    constructor(size){
        this.size = size;
        this.grid = new Array(size).fill(null).map(()=> new Array(size).fill(null))
        this.missedCoords = [];
    };
    createBoard(){

    }
    placeShip(ship,coordinates)
    {

    }
    receiveAttack(coordinates){
        const [xCoord,yCoord] = coordinates;



        
        if(this.grid[xCoord][yCoord] instanceof Ship){
            let ship = this.grid[xCoord][yCoord];
            ship.registerHit();
            return true;
        }
        else{
            this.grid[xCoord][yCoord] = false;
            this.missedCoords.push([xCoord,yCoord]);
            return false;
        }
    }

}

function create2dArray(size){
   
    return array
}