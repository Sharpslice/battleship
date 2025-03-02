
export class GameboardUi{
    constructor(gameboard){
        this.gameboard = gameboard
        this.size = gameboard.size;
        
    }
    renderBoard(){
        const mainContainer = document.getElementById("gameboard");
        if(!mainContainer){
            console.error("main div not found!")
        }
        for(let i =0; i < this.size;i++)
        {
            for(let j = 0; j< this.size;j++)
            {
               
                //console.log(`(${i},${j})`)
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("board-square");
                squareDiv.textContent = `(${i},${j})`;
                
               

    
                if(this.gameboard.placedCoords.some(([row,col])=> row === i && col === j)){
                    squareDiv.style.backgroundColor ="green"
                }
                let coords = [i,j]
                squareDiv.addEventListener("click",(event)=> this.handleClick(event,squareDiv,coords));

                mainContainer.append(squareDiv);
            }
            

        }
    }
    handleClick(event,squareDiv,coords){
        const [i,j] = coords
        if(this.gameboard.missedCoords.some(([row,col])=> row === i && col === j)
        )
        {
            console.log("already hit")
            return;
        }
        squareDiv.style.backgroundColor="red"
        this.gameboard.receiveAttack(coords);
        
        
        
    }
    
}

