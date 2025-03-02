export class Ship{
    constructor(length,isSunk){
        this.length = length;
        this.hit = 0;
        this.isSunk = isSunk
    }
    registerHit(){
        this.hit++;
    }
    hasItSunk(){
        if(this.hit == this.length){
            this.isSunk = true;
            return this.isSunk;
        }
        else{
            return false;
        }
    }

}