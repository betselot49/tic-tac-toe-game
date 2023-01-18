const bord_item = document.querySelectorAll(".bord-item")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let tie = document.getElementById("tie")
let left = document.getElementById("left")
let right = document.getElementById("right")
let winner1 = document.getElementById("winner1")
let winner2 = document.getElementById("winner2")


let turn = "X"
function turnRegulator() {
    if (turn === "X") {
        turn = "O"
        resultItems[2].style.color = "blue"
        resultItems[0].style.color = "white"
        left.style.color = "gray"
        right.style.color = "blue"
    } else {
        turn ="X"
        resultItems[0].style.color = "blue"
        resultItems[2].style.color = "white"
        left.style.color = "blue"
        right.style.color = "gray"
    }
}


function notClicked(array, index) {
    return array[index]
}


function judge(moves) {
    for (let i = 0; i < 9; i=i+3) {
        if (gameStatus.over === false) {
            if (moves.slice(i, i+3).toString() === "X,X,X") {
                gameStatus.over = true
                gameStatus.winner = "player1"
                gameStatus.lineOfWin = [i, i+1, i+2]
            } else if (moves.slice(i, i+3).toString() === "O,O,O") {
                gameStatus.over = true
                gameStatus.winner = "player2"
                gameStatus.lineOfWin = [i, i+1, i+2]
            }
        } 
    } 

    for (let i = 0; i < 3; i++) {
        if (gameStatus.over === false) {
            let temp = []
            temp.push(moves[i])
            temp.push(moves[i+3])
            temp.push(moves[i+6])
            if (temp.toString() === "X,X,X") {
                gameStatus.over = true
                gameStatus.winner = "player1"
                gameStatus.lineOfWin = [i, i+3, i+6]
            } else if (temp.toString() === "O,O,O") {
                gameStatus.over = true
                gameStatus.winner = "player2"
                gameStatus.lineOfWin = [i, i+3, i+6]
            }  
        }
    }


    if (gameStatus.over === false) {
        let temp = []
        temp.push(moves[0])
        temp.push(moves[4])
        temp.push(moves[8])
        if (temp.toString() === "X,X,X") {
            gameStatus.over = true
            gameStatus.winner = "player1"
            gameStatus.lineOfWin = [0, 4, 8]
        } else if (temp.toString() === "O,O,O") {
            gameStatus.over = true
            gameStatus.winner = "player2"
            gameStatus.lineOfWin = [0, 4, 8]
        } 
    }
    
    if (gameStatus.over === false) {
        let temp2 = []
        temp2.push(moves[2])
        temp2.push(moves[4])
        temp2.push(moves[6])
        if (temp2.toString() === "X,X,X") {
            gameStatus.over = true
            gameStatus.winner = "player1"
            gameStatus.lineOfWin = [2, 4, 6]
        } else if (temp2.toString() === "O,O,O") {
            gameStatus.over = true
            gameStatus.winner = "player2"
            gameStatus.lineOfWin = [2, 4, 6]
        } 
    }
}



function resultAnalayser(gameStatus) {
    if (gameStatus.winner === "player1") {
        player1.innerHTML = Number(player1.innerText) + 1
        movesCounter = 0
        turn = "X"
        clickStatus = [true, true, true, true, true, true, true, true, true]
        curValue = ""   
        moves = ["","","", "","","", "","",""]
        left.style.color = "green"
        winner1.innerHTML = "😎"
        right.style.color = "red"
        winner2.innerHTML = "😒"
    } 
    else if (gameStatus.winner === "player2") {
        player2.innerHTML = Number(player2.innerText) + 1
        movesCounter = 0
        turn = "X"
        clickStatus = [true, true, true, true, true, true, true, true, true]
        curValue = ""   
        moves = ["","","", "","","", "","",""]
        left.style.color = "red"
        winner2.innerHTML = "😎"
        right.style.color = "green"
        winner1.innerHTML = "😒"
    }
    else if (gameStatus.winner === "" && movesCounter === 9) {
        tie.innerHTML = Number(tie.innerText) + 1
        turn = "X"
        clickStatus = [true, true, true, true, true, true, true, true, true]
        curValue = ""   
        moves = ["","","", "","","", "","",""]
        gameStatus.over = true
    }

}

let resultItems = document.querySelectorAll(".result__item")


function GUIEffect(gameStatus) {
    if (gameStatus.winner === "" && movesCounter === 9) {
        resultItems[1].style.color = "yellow"
        left.style.color = "yellow"
        right.style.color = "yellow"
        winner1.innerHTML = "🤝"
        winner2innerHTML + "🤝"
        resultItems[2].style.color = "white"
        resultItems[0].style.color = "white"

        bord_item.forEach((element, index) => {
            bord_item[index].style.borderColor = "yellow"
        })
        movesCounter = 0
        gameStatus.winner = ""
        gameStatus.lineOfWin = []
    }


    if (gameStatus.lineOfWin.length === 3) {
        var temp = gameStatus.lineOfWin
        bord_item.forEach((element, index) => {
            if (index === temp[0] ||
                index === temp[1] ||
                index === temp[2]) {
                    bord_item[index].style.color = "yellow";
                } else {
                    bord_item[index].style.color = "gray"
                }
        })

        if (gameStatus.winner === "player1") {
            resultItems[0].style.color = "yellow"
            resultItems[2].style.color = "white"
        } else if (gameStatus.winner === "player2") {
            resultItems[2].style.color = "yellow"
            resultItems[0].style.color = "white"
        } 
        
        gameStatus.lineOfWin = []
        gameStatus.winner = ""
    } 
}



resultItems[0].addEventListener("click", () => {
    if (movesCounter === 0) {
        turn = "X"
        resultItems[0].style.color = "blue"
        left.style.color = "blue"
        right.style.color = "gray"
        resultItems[2].style.color = "gray"
    }
})
resultItems[2].addEventListener("click", () => {
    if (movesCounter === 0) {
        turn = "O"
        resultItems[0].style.color = "gray"
        left.style.color = "gray"
        right.style.color = "blue"
        resultItems[2].style.color = "blue"
    }
})

let clickStatus = [true, true, true, true, true, true, true, true, true]
let curValue = ""
let moves = ["","","", "","","", "","",""]
let gameStatus = {
    over: false,
    winner: "",
    lineOfWin: [],
    cleanAfterGameOver: true
}
let movesCounter = 0


bord_item.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (gameStatus.cleanAfterGameOver === false && gameStatus.over === false) {
            gameStatus.cleanAfterGameOver = true
        }
        if (gameStatus.over === true) {
            bord_item.forEach((element, index) => {
                element.innerHTML = ""
                bord_item[index].style.color = "white"
            })
            gameStatus.cleanAfterGameOver = false
            gameStatus.over = false
            resultItems[0].style.color = "blue"
            resultItems[1].style.color = "white"
            resultItems[2].style.color = "white"
            bord_item.forEach((element, index) => {
                bord_item[index].style.bordercolor = "white"
            })
            winner1.innerHTML = ""
            winner2.innerHTML = ""
            left.style.color = "white"
            right.style.color = "white"
        } 
        if (notClicked(clickStatus, index) && gameStatus.cleanAfterGameOver) {
            movesCounter += 1
            if (turn === "X") {
                curValue = "X"
                element.innerHTML = "X"
            } else {
                element.innerHTML = "O"
                curValue = "O"
            }
    
            turnRegulator()
            moves[index] = curValue
            clickStatus[index] = false
            judge(moves)
            resultAnalayser(gameStatus)
            GUIEffect(gameStatus)
        }
      
    })
    
});

