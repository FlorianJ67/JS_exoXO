const box = document.createElement("div")
box.classList.add("carre")

const board = document.querySelector("#board")

var player = "X"

// create 9 div with the class stocked in box ("carre" in this case)
for(let i = 1; i <= 9; i++){
    const newbox = box.cloneNode()
    board.appendChild(newbox)

    
    newbox.addEventListener("click", function(){
        if(newbox.classList.contains("clicked")) {
            // do nothing if the case is already use
        } else {
            if(player == "X"){
                board.querySelectorAll(".carre").forEach(function(box){
                    box.innerText = player
                    player.replace("O")
                })
            } else if(player == "O"){
                board.querySelectorAll(".carre").forEach(function(box){
                    box.innerText = player
                    player.replace("X")       
                })
            }
        }
    })
}