export function buildGameBoard(size){
    const mainContainer = document.getElementById("gameboard");



    for(let i =0; i < size * size;i++)
    {
        
            console.log("x")
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("board-square");
            //squareDiv.textContent="t"
            mainContainer.appendChild(squareDiv);
        
        

    }
    

}