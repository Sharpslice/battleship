
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
                
               

                console.log(this.gameboard.placedCoords)

                if(this.gameboard.placedCoords.some(([row,col])=> row === i && col === j)){
                    squareDiv.style.backgroundColor ="green"
                }
                squareDiv.addEventListener("click",(event)=> this.handleClick(event,squareDiv));

                mainContainer.append(squareDiv);
            }
            

        }
    }
    handleClick(event,squareDiv){
        squareDiv.style.backgroundColor="red"
        
    }
    
}

