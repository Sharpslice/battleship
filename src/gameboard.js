import { Ship } from "./ship";

export class Gameboard{
    constructor(size){
        this.size = size;
        this.grid = new Array(size).fill(null).map(()=> new Array(size).fill(null))
        this.missedCoords = [];
        this.placedCoords =[];
    };
   
    canPlaceShip(ship, coordinates,direction){
        const [row,col] = coordinates;
            
            for(let i = 0; i< ship.length;i++){
                if(direction = "vertical")
                {
                    
                    if(row-i <0  || this.grid[row-i][col] instanceof Ship ){
                        console.log("cannot place ship")
                        return false;
                    }
                }
                else if(direction = "horizontal"){
                    if(col-i <0  || this.grid[row][col-i] instanceof Ship ){
                        console.log("cannot place ship")
                        return false;
                    }
                }
                
            }
            return true;
        

    }
    placeShip(ship,coordinates,direction)
    {
        const [row,col] = coordinates;
        if(this.canPlaceShip(ship,coordinates,direction)){
        
                for(let i=0;i<ship.length;i++){
                    if(direction == "vertical"){
                        this.grid[row-i][col]= ship;
                        this.placedCoords.push([row-i,col])
                        console.log(`placed ship at (${row},${col})`)
                    }   
                    if(direction == "horizontal"){
                        this.grid[row][col-i]= ship;
                        this.placedCoords.push([row,col-i])
                        console.log(`placed ship at (${row},${col})`)
                    }   
                    
                }
            
        }
        
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

