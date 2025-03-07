import { Ship } from "./ship";

function createFleet(){
    return [
        new Ship(4,false),
        new Ship(3,false),
        new Ship(3,false),
        new Ship(2,false),
        new Ship(5,false),
    ];
}