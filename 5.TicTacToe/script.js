console.log("welcome to tic tac toe");
let music = new Audio("");
let turnMusic = new Audio("/5.TicTacToe/tong.wav");
let gameOver = new Audio("");
let turn = "X";
let gameOv = false;
// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.turn').innerText = boxtexts[e[0]].innerText + " Won.";
            gameOv = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="150px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

        }
    })
}


//reset button action
let button = document.getElementById("reset");
button.addEventListener('click', () => {
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    location.reload();
});

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameOv)
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
})


// 44:49 