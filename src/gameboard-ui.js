
export class GameboardUi{
    constructor(gameboard){
        this.gameboard = gameboard
        this.size = gameboard.size;
        this.grid = new Array(this.size).fill(null).map(()=> new Array(this.size).fill(null))
    }
    renderBoard(){
        const mainContainer = document.getElementById("gameboard");
        for(let i =0; i < this.size;i++)
        {
            for(let j = 0; j< this.size;j++)
            {
                console.log(`(${i},${j})`)
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("board-square");
                squareDiv.textContent = `(${i},${j})`;
                //squareDiv.setAttribute('data-x',i);
                //squareDiv.setAttribute('data-y',j);
                this.grid[i][j] = [i,j];
                squareDiv.addEventListener("click",(event)=> this.handleClick(event,squareDiv));

                mainContainer.appendChild(squareDiv);
            }
            

        }
    }
    handleClick(event,squareDiv){
        squareDiv.style.backgroundColor="red"
        console.log(this.grid)
    }
    
}

