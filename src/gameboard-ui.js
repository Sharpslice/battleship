
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
        const board = document.createElement("div");
        board.className ="board"
        for(let i =0; i < this.size;i++)
        {
            for(let j = 0; j< this.size;j++)
            {
               
                //console.log(`(${i},${j})`)
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("board-square");
                squareDiv.textContent = `(${i},${j})`;
                squareDiv.width = "100px";
                squareDiv.height = "100px";


                if(this.gameboard.placedCoords.some(([row,col])=> row === i && col === j)){
                    squareDiv.style.backgroundColor ="green"
                }
                let coords = [i,j]

                
                squareDiv.addEventListener("click",()=>this.handleClick(squareDiv,coords));

                board.append(squareDiv);
            }
            

        }
        mainContainer.append(board);
    }
    handleClick(squareDiv,coords){
       
        squareDiv.style.backgroundColor="red"
        this.gameboard.receiveAttack(coords);
        
    }
    
}

