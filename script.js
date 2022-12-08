const box = document.createElement("div")
box.classList.add("carre")

const board = document.querySelector("#board")
var player = document.querySelector("#player")

player.innerText = "X"

for (let i = 1; i <= 9; i++) {
    const newbox = box.cloneNode()
    board.appendChild(newbox)

    newbox.addEventListener("click", function () {

        if (newbox.classList.contains("clicked")) {
            // do nothing if the case is already use
        } else {
            if (player.innerText == "X") {
                this.innerText = player.innerText
                player.innerText = "O"

            } else if (player.innerText == "O") {             
                this.innerText = player.innerText
                player.innerText = "X"    
            }
            else {

            }
            newbox.classList.add("clicked")
        }
    })
}

