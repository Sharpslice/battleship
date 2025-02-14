import { Ship } from "../src/ship";
describe("ship class",()=>{
    test("ship sinks",()=>{
        let ship = new Ship(3,0,false)
        ship.registerHit();
        ship.registerHit();
        ship.registerHit();
        let result = ship.hasItSunk();
        expect(result).toBeTruthy();

    })
})