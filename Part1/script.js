let player
let squares = []


function play(id) {

    player = document.getElementById('player')

    let squareId = '#'+id
    let square = document.getElementById(id)

    square.innerText = player.innerText
    squares[id] = player.innerText

    checkWin()
    toggle()
}

function toggle() {

    if (player.innerText === 'X') {
        player.innerText = 'O'

    }
    else {
        player.innerText = 'X'
    }
}

function checkWin() {

    console.log('touch checkWin')

    let win = false
    let cats = true

    // 012
    if (squares[0] === squares[1] && squares [1] === squares[2] && squares[1] !== undefined) {
        win = true
    }
    // 345
    else if (squares[3] === squares[4] && squares[4] === squares[5] && squares[4] !== undefined) {
        win = true
    }
    // 678
    else if (squares[6] === squares[7] && squares[7] === squares[8] && squares[7] !== undefined) {
        win = true
    }
    // 036
    else if (squares[0] === squares[3] && squares[3] === squares[6] && squares[3] !== undefined) {
        win = true
    }
    // 147
    else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[4] !== undefined) {
        win = true
    }
    // 258
    else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[5] !== undefined) {
        win = true
    }
    // 048
    else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[4] !== undefined) {
        win = true
    }
    // 246
    else if (squares[2] === squares[4] && squares[4] === squares[6] && squares[4] !== undefined) {
        win = true
    }

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === undefined) {
            cats = false
        }
    }

    if (win) {
        alert(`Player ${player.innerText} Wins!`)
    } else if (cats) {
        alert("CAT's")
    }
}