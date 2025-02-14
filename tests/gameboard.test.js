import { Gameboard } from "../src/gameboard"
import { Ship } from "../src/ship";
describe("Gameboard initializes with correct dimensions",()=>{
    test("grid size",()=>{
        const size = 10;
        const board = new Gameboard(10);

        expect(board.grid.length).toBe(size);

    })
    test("grid does not have shallow copies",()=>{
        const size = 3;
        const board = new Gameboard(size);
        const copy = board.grid;
        board.grid[1][1] = true
        //console.log(board.grid)
        expect(copy[1][1]).toBeTruthy();
    })
})

describe("recieveAttack function",()=>{
    test("hit registers to the right ship",()=>{
        let myShip = new Ship(3,0,false);

        let coords = [0,1];
        const board = new Gameboard(3);


        board.grid[0][1] = myShip
        board.grid[1][1] = myShip
        board.grid[2][1] = myShip
        const [xCoord, yCoord] = coords;
        board.receiveAttack(coords)
        expect(board.grid[xCoord][yCoord].hit).toBe(1)
    })
    test("hit misses",()=>{
        let myShip = new Ship(3,0,false);

        let coords = [0,0];
        const board = new Gameboard(3);
        board.grid[0][1] = myShip
        board.grid[1][1] = myShip
        board.grid[2][1] = myShip
        
        board.receiveAttack(coords)
        expect(board.receiveAttack(coords)).toBeFalsy();
    })
    test("ship has sank",()=>{
        let myShip = new Ship(3,0,false);

        let coords = [0,0];
        const board = new Gameboard(3);
        board.grid[0][1] = myShip
        board.grid[1][1] = myShip
        board.grid[2][1] = myShip
        board.receiveAttack([0,1]);
        board.receiveAttack([1,1]);
        board.receiveAttack([2,1]);
        expect(myShip.hasItSunk()).toBeTruthy();
    })
    test("ship has sank (duplicate hit)",()=>{
        let myShip = new Ship(3,0,false);

        let coords = [0,0];
        const board = new Gameboard(3);
        board.grid[0][1] = myShip
        board.grid[1][1] = myShip
        board.grid[2][1] = myShip
        board.receiveAttack([0,1]);
        board.receiveAttack([1,1]);
        board.receiveAttack([1,1]);
        expect(myShip.hasItSunk()).toBeFalsy();
    })
})