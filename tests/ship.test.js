import { ship } from "../src/ship";
describe("ship class",()=>{
    test("ship sinks",()=>{
        let ship = new ship(3)
        ship.hit();
        ship.hit();
        ship.hit();
        let result = ship.isSunk();
        expect(result).toBeTruthy();

    })
})