const board = document.getElementById('board')
const takeBackMove = document.getElementById('takeBack')
const changeTurnButton = document.getElementById('changeTurn')
const checkBox = document.getElementById('checkBox')
const C8 = document.getElementById('C8')
const G8 = document.getElementById('G8')
const C1 = document.getElementById('C1')
const G1 = document.getElementById('G1')
const watchRandom = document.getElementById('watchRandom')
const watchEngine = document.getElementById('watchEngine')
const playEngine = document.getElementById('playEngine')
const playHuman = document.getElementById('playHuman')

let playerTurn = "white"


let endOfGame = false

let currentPieceWhite = undefined
let currentPieceBlack = undefined
let passantPiece = undefined
let passantCord = undefined
let previousPassantPiece = undefined
let previousPassantCord = undefined


let previousPiece = undefined
let previousPosition = {
    x: undefined,
    y: undefined,
    letter: undefined,
    number: undefined,
    cord: undefined

}
let capturedPiece = undefined

let castledRook = undefined

let capturedPieceCord = {
    x: undefined,
    y: undefined,
    letter: undefined,
    number: undefined,
    cord: undefined
}

whiteCapInc = 0
blackCapInc = 350

// WHITE PIECES HTML //

WLK = document.createElement("img");
WLK.src = "whiteKnight.png";
board.appendChild(WLK)
WLK.id = "whiteLeftKnight"

WRK = document.createElement("img");
WRK.src = "whiteKnight.png";
board.appendChild(WRK)
WRK.id = "whiteRightKnight"

WLR = document.createElement("img");
WLR.src = "whiteRook.png";
board.appendChild(WLR)
WLR.id = "whiteLeftRook"

WRR = document.createElement("img");
WRR.src = "whiteRook.png";
board.appendChild(WRR)
WRR.id = "whiteRightRook"

WLB = document.createElement("img");
WLB.src = "whiteBishop.png";
board.appendChild(WLB)
WLB.id = "whiteLeftBishop"

WRB = document.createElement("img");
WRB.src = "whiteBishop.png";
board.appendChild(WRB)
WRB.id = "whiteRightBishop"

WQ = document.createElement("img");
WQ.src = "whiteQueen.png";
board.appendChild(WQ)
WQ.id = "whiteQueen"

WK = document.createElement("img");
WK.src = "whiteKing.png";
board.appendChild(WK)
WK.id = "whiteKing"

WP1 = document.createElement("img");
WP1.src = "whitePawn.png";
board.appendChild(WP1)
WP1.id = "whitePawn1"

WP2 = document.createElement("img");
WP2.src = "whitePawn.png";
board.appendChild(WP2)
WP2.id = "whitePawn2"

WP3 = document.createElement("img");
WP3.src = "whitePawn.png";
board.appendChild(WP3)
WP3.id = "whitePawn3"

WP4 = document.createElement("img");
WP4.src = "whitePawn.png";
board.appendChild(WP4)
WP4.id = "whitePawn4"

WP5 = document.createElement("img");
WP5.src = "whitePawn.png";
board.appendChild(WP5)
WP5.id = "whitePawn5"

WP6 = document.createElement("img");
WP6.src = "whitePawn.png";
board.appendChild(WP6)
WP6.id = "whitePawn6"

WP7 = document.createElement("img");
WP7.src = "whitePawn.png";
board.appendChild(WP7)
WP7.id = "whitePawn7"

WP8 = document.createElement("img");
WP8.src = "whitePawn.png";
board.appendChild(WP8)
WP8.id = "whitePawn8"

// BLACK PIECES HTML //

BLB = document.createElement("img");
BLB.src = "blackBishop.png";
board.appendChild(BLB)
BLB.id = "blackLeftBishop"

BRB = document.createElement("img");
BRB.src = "blackBishop.png";
board.appendChild(BRB)
BRB.id = "blackRightBishop"

BLR = document.createElement("img");
BLR.src = "blackRook.png";
board.appendChild(BLR)
BLR.id = "blackLeftRook"

BRR = document.createElement("img");
BRR.src = "blackRook.png";
board.appendChild(BRR)
BRR.id = "blackRightRook"

BLK = document.createElement("img");
BLK.src = "blackKnight.png";
board.appendChild(BLK)
BLK.id = "blackLeftKnight"

BRK = document.createElement("img");
BRK.src = "blackKnight.png";
board.appendChild(BRK)
BRK.id = "blackRightKnight"

BQ = document.createElement("img");
BQ.src = "blackQueen.png";
board.appendChild(BQ)
BQ.id = "blackQueen"

BK = document.createElement("img");
BK.src = "blackKing.png";
board.appendChild(BK)
BK.id = "blackKing"

BP1 = document.createElement("img");
BP1.src = "blackPawn.png";
board.appendChild(BP1)
BP1.id = "blackPawn1"

BP2 = document.createElement("img");
BP2.src = "blackPawn.png";
board.appendChild(BP2)
BP2.id = "blackPawn2"

BP3 = document.createElement("img");
BP3.src = "blackPawn.png";
board.appendChild(BP3)
BP3.id = "blackPawn3"

BP4 = document.createElement("img");
BP4.src = "blackPawn.png";
board.appendChild(BP4)
BP4.id = "blackPawn4"

BP5 = document.createElement("img");
BP5.src = "blackPawn.png";
board.appendChild(BP5)
BP5.id = "blackPawn5"

BP6 = document.createElement("img");
BP6.src = "blackPawn.png";
board.appendChild(BP6)
BP6.id = "blackPawn6"

BP7 = document.createElement("img");
BP7.src = "blackPawn.png";
board.appendChild(BP7)
BP7.id = "blackPawn7"

BP8 = document.createElement("img");
BP8.src = "blackPawn.png";
board.appendChild(BP8)
BP8.id = "blackPawn8"

// WHITE PIECES JAVASCRIPT //

const whiteLeftKnight = {

    team: "white",
    element: WLK,
    x: "50px",
    y: "350px",
    letter: "B",
    number: "1",
    selected: false,
    class: "knight",
    moved: false,
    value: 3,
    value: 3
}
const whiteRightKnight = {

    team: "white",
    element: WRK,
    x: "300px",
    y: "350px",
    letter: "G",
    number: "1",
    selected: false,
    class: "knight",
    moved: false,
    value: 3
}
const whiteLeftRook = {

    team: "white",
    element: WLR,
    x: "0px",
    y: "350px",
    letter: "A",
    number: "1",
    selected: false,
    class: "rook",
    moved: false,
    value: 5
}   
const whiteRightRook = {

    team: "white",
    element: WRR,
    x: "350px",
    y: "350px",
    letter: "H",
    number: "1",
    selected: false,
    class: "rook",
    moved: false,
    value: 5
}
const whiteLeftBishop = {

    team: "white",
    element: WLB,
    x: "100px",
    y: "350px",
    letter: "C",
    number: "1",
    selected: false,
    class: "bishop",
    moved: false,
    value: 3
}
const whiteRightBishop = {

    team: "white",
    element: WRB,
    x: "250px",
    y: "350px",
    letter: "F",
    number: "1",
    selected: false,
    class: "bishop",
    moved: false,
    value: 3
}
const whiteKing = {

    team: "white",
    element: WK,
    x: "200px",
    y: "350px",
    letter: "E",
    number: "1",
    selected: false,
    class: "king",
    moved: false,
    value: 10,

}   
const whiteQueen = {

    team: "white",
    element: WQ,
    x: "150px",
    y: "350px",
    letter: "D",
    number: "1",
    selected: false,
    class: "queen",
    moved: false,
    value: 9,
    checking: false

}
const whitePawn1 = {

    team: "white",
    element: WP1,
    x: "0px",
    y: "300px",
    letter: "A",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn2 = {

    team: "white",
    element: WP2,
    x: "50px",
    y: "300px",
    letter: "B",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn3 = {

    team: "white",
    element: WP3,
    x: "100px",
    y: "300px",
    letter: "C",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1,
 
}
const whitePawn4 = {

    team: "white",
    element: WP4,
    x: "150px",
    y: "300px",
    letter: "D",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn5 = {

    team: "white",
    element: WP5,
    x: "200px",
    y: "300px",
    letter: "E",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn6 = {

    team: "white",
    element: WP6,
    x: "250px",
    y: "300px",
    letter: "F",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn7 = {

    team: "white",
    element: WP7,
    x: "300px",
    y: "300px",
    letter: "G",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1
}
const whitePawn8 = {

    team: "white",
    element: WP8,
    x: "350px",
    y: "300px",
    letter: "H",
    number: "2",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}

// BLACK PIECES JAVASCRIPT //

const blackLeftBishop = {

    team: "black",
    element: BLB,
    x: "100px",
    y: "0px",
    letter: "C",
    number: "8",
    selected: false,
    class: "bishop",
    moved: false,
    value: 3

}
const blackRightBishop = {

    team: "black",
    element: BRB,
    x: "250px",
    y: "0px",
    letter: "F",
    number: "8",
    selected: false,
    class: "bishop",
    moved: false,
    value: 3

}
const blackLeftRook = {

    team: "black",
    element: BLR,
    x: "0px",
    y: "0px",
    letter: "A",
    number: "8",
    selected: false,
    class: "rook",
    moved: false,
    value: 5

}
const blackRightRook = {

    team: "black",
    element: BRR,
    x: "350px",
    y: "0px",
    letter: "H",
    number: "8",
    selected: false,
    class: "rook",
    moved: false,
    value: 5

}
const blackLeftKnight = {

    team: "black",
    element: BLK,
    x: "50px",
    y: "0px",
    letter: "B",
    number: "8",
    selected: false,
    class: "knight",
    moved: false,
    value: 3

}
const blackRightKnight = {

    team: "black",
    element: BRK,
    x: "300px",
    y: "0px",
    letter: "G",
    number: "8",
    selected: false,
    class: "knight",
    moved: false,
    value: 3

}
const blackQueen = {

    team: "black",
    element: BQ,
    x: "150px",
    y: "0px",
    letter: "D",
    number: "8",
    selected: false,
    class: "queen",
    moved: false,
    value: 9

}
const blackKing = {

    team: "black",
    element: BK,
    x: "200px",
    y: "0px",
    letter: "E",
    number: "8",
    selected: false,
    class: "king",
    moved: false,
    value: 10

}
const blackPawn1 = {

    team: "black",
    element: BP1,
    x: "0px",
    y: "50px",   
    letter: "A",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn2 = {

    team: "black",
    element: BP2,
    x: "50px",
    y: "50px",   
    letter: "B",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1,
    id: "blackPawn2"

}
const blackPawn3 = {

    team: "black",
    element: BP3,
    x: "100px",
    y: "50px",   
    letter: "C",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn4 = {

    team: "black",
    element: BP4,
    x: "150px",
    y: "50px",   
    letter: "D",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn5 = {

    team: "black",
    element: BP5,
    x: "200px",
    y: "50px",   
    letter: "E",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn6 = {

    team: "black",
    element: BP6,
    x: "250px",
    y: "50px",   
    letter: "F",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn7 = {

    team: "black",
    element: BP7,
    x: "300px",
    y: "50px",   
    letter: "G",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}
const blackPawn8 = {

    team: "black",
    element: BP8,
    x: "350px",
    y: "50px",   
    letter: "H",
    number: "7",
    selected: false,
    class: "pawn",
    moved: false,
    value: 1

}

// PIECES ARRAYS //

let whitePieces = []

let blackPieces = []

let allPieces = [whitePieces, blackPieces]

let piece

let pieces

let capturedPieces = []

whitePieces.push(whiteRightKnight,whiteLeftKnight,whitePawn3,whitePawn4,whitePawn5,whiteLeftBishop,whiteRightBishop,whiteLeftRook,whiteRightRook,
    whitePawn1,whitePawn2,whitePawn6,whitePawn7,whitePawn8,whiteKing,whiteQueen)

blackPieces.push(blackRightKnight,blackLeftKnight,blackPawn3,blackPawn4,blackPawn5,blackLeftBishop,blackRightBishop,blackLeftRook,blackRightRook,
    blackPawn1,blackPawn2,blackPawn6,blackPawn7,blackPawn8,blackKing,blackQueen)

// MOVEMENT AND CAPTURE FUNCTIONALITY //


function togglePieceSelection (piece) {

    piece.selected === true ? piece.selected = false : piece.selected = true
}
function moveToPiece (piece) {


    currentPiece = playerTurn === "black" ? currentPieceBlack : currentPieceWhite


    if (checkPieceIsOnLegalSquare(piece)){

        previousPosition.x = currentPiece.x
        previousPosition.y = currentPiece.y
        previousPosition.letter = currentPiece.letter
        previousPosition.number = currentPiece.number
        previousPosition.cord = currentPiece.cord
        previousPosition.moved = currentPiece.moved
        currentPiece.moved = true
        previousPiece = currentPiece
        currentPiece.x = piece.x
        currentPiece.y = piece.y
        currentPiece.letter = piece.letter
        currentPiece.number = piece.number
        currentPiece.cord = piece.cord
        currentPiece.element.style.left = piece.x
        currentPiece.element.style.top = piece.y
        capturedPieces.push(piece)
        
        piece.moved = true
        
        
        changeTurn()
        clearPassant ()
        currentPieceWhite = undefined
        currentPieceBlack = undefined


    }


}
function checkCaptureBlackPiece(piece){

        for ( j = 0 ; j < whitePieces.length ; j++)



        if (whitePieces[j].x == piece.x && whitePieces[j].y == piece.y) {

            capturedPieceCord.x = piece.x
            capturedPieceCord.y = piece.y
            capturedPieceCord.letter = piece.letter
            capturedPieceCord.number = piece.number
            capturedPieceCord.moved = piece.moved
            capturedPiece = piece


            piece.x = piece.x + Math.random()
            piece.y = piece.y + Math.random()
            piece.letter = undefined
            piece.number = undefined
            piece.cord = undefined

            occupiedCheck()

            piece.element.style.top = blackCapInc + "px"
            piece.element.style.left = "400px"

            blackCapInc -= 25

            setSelectedToFalse()

        }

    
}
function checkCaptureWhitePiece(piece){


        for ( j = 0 ; j < blackPieces.length ; j++)


        if (blackPieces[j].x == piece.x && blackPieces[j].y == piece.y ) {


            capturedPieceCord.x = piece.x
            capturedPieceCord.y = piece.y
            capturedPieceCord.letter = piece.letter
            capturedPieceCord.number = piece.number
            capturedPieceCord.moved = piece.moved
            capturedPiece = piece

            
            piece.x = piece.x + Math.random()
            piece.y = piece.y + Math.random()
            piece.letter = undefined
            piece.number = undefined
            piece.cord = undefined

            occupiedCheck()

            piece.element.style.top = whiteCapInc + "px"
            piece.element.style.left = "-50px"

            whiteCapInc += 25

            setSelectedToFalse()

        }



    
}
function checkPieceIsOnLegalSquare(piece) {

    for ( i = 0 ; i < legalSquares.length ; i++){
        if (piece.cord === legalSquares[i]){
            return true
        }}
}
function capturePassantWhite () {

    if (currentPieceWhite.cord === passantCord && currentPieceWhite.class === "pawn"){
    
                capturedPieceCord.x = passantPiece.x
                capturedPieceCord.y = passantPiece.y
                capturedPieceCord.letter = passantPiece.letter
                capturedPieceCord.number = passantPiece.number
                capturedPiece = passantPiece
                previousPassantPiece = passantPiece
                previousPassantCord = passantCord
    
                passantPiece.x = passantPiece.x + Math.random()
                passantPiece.y = passantPiece.y + Math.random()
                passantPiece.letter = undefined
                passantPiece.number = undefined
                passantPiece.cord = undefined
        
                passantPiece.element.style.top = blackCapInc + "px"
                passantPiece.element.style.left = "400px"
    
                blackCapInc -= 25
                clearPassant ()
    }
}
function capturePassantBlack (){
    
     if (currentPieceBlack.cord === passantCord && currentPieceBlack.class === "pawn") {
    
                capturedPieceCord.x = passantPiece.x
                capturedPieceCord.y = passantPiece.y
                capturedPieceCord.letter = passantPiece.letter
                capturedPieceCord.number = passantPiece.number
                capturedPiece = passantPiece
                previousPassantPiece = passantPiece
                previousPassantCord = passantCord
    
                passantPiece.x = passantPiece.x + Math.random()
                passantPiece.y = passantPiece.y + Math.random()
                passantPiece.letter = undefined
                passantPiece.number = undefined
                passantPiece.cord = undefined
    
                passantPiece.element.style.top = whiteCapInc + "px"
                passantPiece.element.style.left = "-50px"
    
                whiteCapInc += 25
                clearPassant ()
    }
}
function setPreviousPiece(piece){

    previousPiece = piece
    previousPosition.x = piece.x
    previousPosition.y = piece.y
    previousPosition.letter = piece.letter
    previousPosition.number = piece.number
    previousPosition.cord = piece.cord
}
function occupiedCheck(){ 

    squares.forEach(square => {
        square.occupied = false
        square.class = undefined
        square.checking = false
        square.pinning = false
        square.value = false
    })


    squares.forEach(square => {


    for ( i = 0 ; i < 16 ; i++){

        if (whitePieces[i].x == square.x && whitePieces[i].y == square.y){

            square.class = whitePieces[i].class
            square.value = whitePieces[i].value
            square.occupied = "white" 
            whitePieces[i].cord = square.cord
            whitePieces[i].pinned = false

        
        }



        if (blackPieces[i].x == square.x && blackPieces[i].y == square.y){

            square.class = blackPieces[i].class
            square.value = blackPieces[i].value
            square.occupied = "black"
            blackPieces[i].cord = square.cord
            blackPieces[i].pinned = false
        
        }
}})
}

// BUTTONS //
let moveHistory = []
let captureHistory = []

takeBackMove.addEventListener("click", () => {

    previousPiece.element.style.left = previousPosition.x
    previousPiece.element.style.top = previousPosition.y
    previousPiece.x = previousPosition.x
    previousPiece.y = previousPosition.y
    previousPiece.letter = previousPosition.letter
    previousPiece.number = previousPosition.number
    previousPiece.cord = previousPosition.cord
    previousPiece.moved = previousPosition.moved
    passantPiece = previousPassantPiece
    passantCord = previousPassantCord


    if (castledRook !== undefined) {returnCastledRook()}

    if(capturedPiece !== undefined) {
    capturedPiece.element.style.left = capturedPieceCord.x
    capturedPiece.element.style.top = capturedPieceCord.y
    capturedPiece.x = capturedPieceCord.x
    capturedPiece.y = capturedPieceCord.y
    capturedPiece.letter = capturedPieceCord.letter
    capturedPiece.number = capturedPieceCord.number
    capturedPiece.cord = capturedPieceCord.cord
    capturedPiece.moved = capturedPieceCord.moved



    clearCapturedPiece()
    }

    if ((playerTurn === "black" && currentPieceBlack === undefined) ||
    (playerTurn === "white" && currentPieceWhite === undefined) || castledRook !== undefined)

    {
    changeTurn()}

    clearPreviousPosition()
    clearLegalSquares()
    setSelectedToFalse()
}
)
changeTurnButton.addEventListener('click', () =>{

    changeTurn()
    clearCurrentPiece()
}
)

watchRandom.addEventListener('click', () =>{
    
    if(turnCount === 0){
    gameMode = "watchRandom"
    turnCount = turnCount + 0.1
    setTimeout(() => {makeRandomMoves()})
    }
})

watchEngine.addEventListener('click', () =>{

    if(turnCount === 0){
    gameMode = "watchEngine"
    turnCount = turnCount + 0.1
    setTimeout(() => {makeIntelligentMoves()})
    }

})
playEngine.addEventListener('click', () =>{

    gameMode = "playEngine"
})
playHuman.addEventListener('click', () =>{

    gameMode = "playHuman"
})

// CLEAR FUNCTIONS //


function clear(piece){

    if (playerTurn === piece.team)

    {clearLegalSquares()}

    clearCapturedPiece()
    castledRook = undefined

}
function clearPassant(){
    passantCord = undefined
    passantPiece = undefined
}
function clearLegalSquares(){

    legalSquares = []

    squares.forEach(square =>{
        square.legal = false
        square.element.style.opacity = "1"
    })

}
function clearCurrentPiece(){
    currentPieceBlack = undefined
    currentPieceWhite = undefined
}
function clearPreviousPosition(){

    previousPiece = undefined
    previousPosition.x = undefined
    previousPosition.y = undefined
    previousPosition.letter = undefined
    previousPosition.number = undefined
    previousPosition.cord = undefined


}
function clearCapturedPiece(){

    capturedPiece = undefined
    capturedPieceCord.x = undefined
    capturedPieceCord.y = undefined
    capturedPieceCord.letter = undefined
    capturedPieceCord.number = undefined
    capturedPieceCord.cord = undefined
}
function setSelectedToFalse(){
    allPieces[0].forEach(piece => {
        piece.selected = false

    })
    allPieces[1].forEach(piece => {
        piece.selected = false

    })
}
function clearChecking(){

    checks = playerTurn === "white" ? whitePieces : blackPieces

    checks.forEach(checks => {
        checks.checking = false

    })
}

// MOVEMENT LOGIC //

// PIECE CLASS PROPERTIES //

let knightMovement = {

    possibleLetters: [2,2,1,1,-1,-1,-2,-2],
    possibleNumbers: [1,-1,2,-2,-2,2,-1,1],
    possibleMoves: 8


}
let bishopMovement = {

    possibleLetters: [1,1,-1,-1],
    possibleNumbers: [1,-1,-1,1],
    possibleMoves: 4
}
let blackPawnMovement = {

    possibleLettersAdvance: [0,0],
    possibleNumbersAdvance: [-1,-2],
    possibleLettersCapture: [-1,1],
    possibleNumbersCapture: [-1,-1]

}
let whitePawnMovement = {

    possibleLettersAdvance: [0,0],
    possibleNumbersAdvance: [1,2],
    possibleLettersCapture: [-1,1],
    possibleNumbersCapture: [1,1]

}
let rookMovement = {

    possibleLetters: [0,1,0,-1],
    possibleNumbers: [1,0,-1,0],
    possibleMoves: 4

}
let queenMovement = {

    possibleLetters: [0,1,1,1,0,-1,-1,-1],
    possibleNumbers: [1,1,0,-1,-1,-1,0,1],
    possibleMoves: 8

}
let kingMovement = {

    possibleLetters: [1,-1,1,-1,1,0,0,-1],
    possibleNumbers: [-1,1,1,-1,0,-1,1,0],
    possibleMoves: 8

}

let letterArray = ["A","B","C","D","E","F","G","H"]
let numberArray = ["1","2","3","4","5","6","7","8"]

// LEGAL SQUARES // 

let legalSquares = []

function teamCollisionCheck ()  { 

    squares.forEach(square =>{
    if (possibleCord === square.cord && square.occupied === currentTeam){
        j = 8
    }})
}
function basicTeamCollisionCheck ()  {  
    
    squares.forEach(square =>{

            if (possibleCord === square.cord && square.occupied === currentTeam){
                skip = true
            }})

}
function enenmyCollisionCheck ()  {  
    


    squares.forEach(square =>{

        if (possibleCord === square.cord && square.occupied === oppositeTeam)
           { j = 8 }
        })

}
function pawnAttackCheck(){  

    squares.forEach(square =>{
            if ((possibleCord === square.cord && square.occupied !== oppositeTeam)){
                skip = true
            }})



}
function firstMoveBlocked() {

        squares.forEach(square =>{

            if (currentTeam === "black" && square.cord === (currentLetter + "6") && (square.occupied === "white" || square.occupied === "black"))           
                {iteration = 1}  

            if (currentTeam === "white" && square.cord === (currentLetter + "3") && (square.occupied === "white" || square.occupied === "black"))           
                {iteration = 1}             

            })

}

/////////////////////////


function goodCordTest (cord) {
    
    let goodLetter
    let goodNumber


        
        letterArray.forEach(letter => {

        if (cord[0] === letter) {
            goodLetter = true
        }

    })
    numberArray.forEach(number => {
    
        if (cord[1] === number) 
            {goodNumber = true}
    })
    
     if (goodLetter === true && goodNumber === true) {goodCord = true}

     

    
}
function setPiece (piece){
    currentTeam = piece.team
    oppositeTeam = currentTeam === "white" ? "black" : "white"
    currentLetter = piece.letter
    currentNumber = piece.number
    currentCord = piece.cord
    currentClass = piece.class
}
function findLegalKingMoves(movement, piece){

    if(piece.team === playerTurn) {

        setPiece (piece)
        attack = currentTeam === "white" ? 
            currentBlackAttackPotential : currentWhiteAttackPotential

    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( k = 0 ; k < movement.possibleMoves ; k++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[k]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[k]]


    basicTeamCollisionCheck()

    safe = true

    attack.forEach(attack => {
        if (attack === possibleCord){ safe = false} 
    })

    goodCord = false
    goodCordTest(possibleCord)

    setPiece(piece)

    if (skip === false && safe === true && goodCord === true) { legalSquares.push(possibleCord) }

    skip = false
    }
    updateLegalSquares()}}


}
function findLegalMovesExtension(movement, piece) {

    if(piece.team === playerTurn) {

        setPiece (piece)

    if (currentLetter !== undefined && currentNumber !== undefined) { // prevents a -1 return
        
        for ( e = 0 ; e < movement.possibleMoves ; e ++ ){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)

        for (j = 0 ; j < 7 ; j++) {

            possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[e]] +
                            numberArray[currentNumberIndex + movement.possibleNumbers[e]] 
            
            teamCollisionCheck () 
            goodCord = false
            goodCordTest(possibleCord)
            safeKing = true
            safeKingCheck(piece)
            pinCheck(piece)

                if(j < 7 && goodCord === true && safeKing === true){legalSquares.push(possibleCord)}


            enenmyCollisionCheck ()

        currentLetterIndex = currentLetterIndex + movement.possibleLetters[e]
        currentNumberIndex = currentNumberIndex + movement.possibleNumbers[e]    
    
        }}

      
    updateLegalSquares()}} 
}
function findLegalKnightMoves(movement, piece){

    if(piece.team === playerTurn) {

        setPiece (piece)
    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined){    
        
        for ( kn = 0 ; kn < movement.possibleMoves ; kn++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[kn]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[kn]]

    basicTeamCollisionCheck()
    goodCord = false
    goodCordTest(possibleCord)
    safeKing = true
    safeKingCheck(piece)

        if (skip === false && goodCord === true && 
            safeKing === true && piece.pinned === false)
              {legalSquares.push(possibleCord)}

    skip = false

    }
    updateLegalSquares()}

}

}
function findLegalMovesPawn (movement, piece) {

    setPiece (piece)

        iteration = 2
        
    if ( piece.moved === true ) { iteration = 1 }
    
        firstMoveBlocked()
    
        proceed = false

        piece.selected === true ? clearLegalSquares() : proceed = true 

    if(piece.team === playerTurn && proceed === true) {

    skip = false
    passant = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( p = 0 ; p < iteration ; p++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersAdvance[p]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersAdvance[p]]

    basicTeamCollisionCheck()
    enenmyCollisionCheck()

    goodCord = false
    goodCordTest(possibleCord)
    pawnNotPinned = true
    safeKing = true
    safeKingCheck(piece)

    king = currentTeam === "white" ? whiteKing : blackKing

    if (piece.pinned === true && piece.letter === king.letter){piece.pinned = false, pawnNotPinned = false}

    if (skip === false && j !== 8 && goodCord === true 
        && safeKing === true && piece.pinned === false) 
        { legalSquares.push(possibleCord)}

        skip = false
    }
    
    for ( p2 = 0 ; p2 < 2 ; p2++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersCapture[p2]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersCapture[p2]]

    basicTeamCollisionCheck()
    pawnAttackCheck(piece)

    goodCord = false
    goodCordTest(possibleCord)

    safeKing = true
    safeKingCheck(piece)
    pinCheck (piece)

    if (skip === false && goodCord === true 
        && safeKing === true && pawnNotPinned === true) 
            { legalSquares.push(possibleCord) }

        skip = false

     if (passantCord === possibleCord && goodCord === true 
        && safeKing === true && pawnNotPinned === true)  
            { legalSquares.push(possibleCord) }   
    }
    updateLegalSquares()

}}
}

// CURRENT ATTACK POTENTIALS //

let currentBlackAttackPotential = []
let currentWhiteAttackPotential = []


function findCurrentBlackAttackPotential(){

    currentBlackAttackPotential = []

    blackPieces.forEach(piece => {

        switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = blackPawnMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook" 
            || piece.class === "queen" ){
            findLegalAttacksExtension(movement, piece)
        }

        if (piece.class === "king" || piece.class === "knight"){
            findLegalAttacks(movement, piece)
        }

        if (piece.class === "pawn") {
            findLegalAttacksPawn(movement, piece)
        }
    })

}
function findCurrentWhiteAttackPotential(){

    currentWhiteAttackPotential = []

    whitePieces.forEach(piece => {

        switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = whitePawnMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook"
             || piece.class === "queen" ){
            findLegalAttacksExtension(movement, piece)
        }

        if (piece.class === "king" || piece.class === "knight"){
            findLegalAttacks(movement, piece)
        }

        if (piece.class === "pawn") {
           findLegalAttacksPawn(movement, piece)
        }
    })

}
function findLegalAttacksExtension(movement, piece){

    setPiece (piece)
    
        if (currentLetter !== undefined && currentNumber !== undefined) {
            
            for ( i = 0 ; i < movement.possibleMoves ; i ++ ){
    

            currentLetterIndex = letterArray.indexOf(currentLetter)
            currentNumberIndex = numberArray.indexOf(currentNumber)
            
    
            for (j = 0 ; j < 7 ; j++) {
    
                possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[i]] +
                                numberArray[currentNumberIndex + movement.possibleNumbers[i]] 
    
                goodCord = false
    
    
                goodCordTest(possibleCord)


    
                if( j < 7 && goodCord === true && currentTeam === "white")
                    {currentWhiteAttackPotential.push(possibleCord), setChecking(piece)}
                else if( j < 7 && goodCord === true && currentTeam === "black")
                    {currentBlackAttackPotential.push(possibleCord), setChecking(piece)}
    
                teamCollisionCheck () 
                if( possibleCord !== oppositeKing.cord){enenmyCollisionCheck ()}
    
                
    
            currentLetterIndex = currentLetterIndex + movement.possibleLetters[i]
            currentNumberIndex = currentNumberIndex + movement.possibleNumbers[i]    
        
            }}}
            
}
function findLegalAttacks(movement, piece){

    setPiece (piece)
    
        if (currentLetter !== undefined && currentNumber !== undefined){    
            
            
            for ( i = 0 ; i < movement.possibleMoves ; i++){
    
            currentLetterIndex = letterArray.indexOf(currentLetter)
            currentNumberIndex = numberArray.indexOf(currentNumber)
            
            possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[i]] +
                            numberArray[currentNumberIndex + movement.possibleNumbers[i]]
    
        goodCord = false
    
        goodCordTest(possibleCord)

    
        
        if( goodCord === true && currentTeam === "white" && piece.pinned === false){currentWhiteAttackPotential.push(possibleCord), setChecking(piece)}
        if( goodCord === true && currentTeam === "black" && piece.pinned === false){currentBlackAttackPotential.push(possibleCord), setChecking(piece)}
    
    
        }}
    
}
function findLegalAttacksPawn(movement, piece){

    setPiece (piece)
    
    passant = false

    if (currentLetter !== undefined && currentNumber !== undefined) {
  
    for ( i = 0 ; i < 2 ; i++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersCapture[i]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersCapture[i]]

    basicTeamCollisionCheck()

    goodCord = false
    goodCordTest(possibleCord)


    if( goodCord === true && currentTeam === "white")
        {currentWhiteAttackPotential.push(possibleCord), setChecking(piece)}
    else if( goodCord === true && currentTeam === "black")
        {currentBlackAttackPotential.push(possibleCord), setChecking(piece)}


    if( passantCord === possibleCord && goodCord === true && currentTeam === "white")
        {currentWhiteAttackPotential.push(possibleCord), setChecking(piece)}
    if( passantCord === possibleCord && goodCord === true && currentTeam === "black")
        {currentBlackAttackPotential.push(possibleCord), setChecking(piece)} 
 
    
    }}
}

// CHECK LOGIC //

let futureSquares = []
let allFuturePositions = []
let safeKingArray = []
let potentialMoves = []

function findPotential(){

    pieces = playerTurn === "white" ? whitePieces : blackPieces
    pawnMovement = playerTurn === "white" ? whitePawnMovement : blackPawnMovement

    pieces.forEach(piece => {

        switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = pawnMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook" 
            || piece.class === "queen" ){
            findLegalPositionsExtension(movement, piece)
        }

        if (piece.class === "knight"){
            findLegalPositionsKnight(movement, piece)
        }
        if (piece.class === "king"){
            findLegalPositionsKing(movement, piece)
        }

        if (piece.class === "pawn") {
            findLegalPositionsPawn (movement, piece)

        }
    })



}
function findLegalPositionsExtension(movement, piece) {

    if(piece.team === playerTurn) {
        setPiece (piece)

    if (currentLetter !== undefined && currentNumber !== undefined) { // prevents a -1 return
        
        for ( e = 0 ; e < movement.possibleMoves ; e ++ ){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)

        for (j = 0 ; j < 7 ; j++) {

            possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[e]] +
                            numberArray[currentNumberIndex + movement.possibleNumbers[e]] 
            
            teamCollisionCheck () 
            goodCord = false
            goodCordTest(possibleCord)
           // addCaptureToSafeKingArray ()
            //might need to add pinning in here


                if(j < 7 && goodCord === true){potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord])}


            enenmyCollisionCheck ()

        currentLetterIndex = currentLetterIndex + movement.possibleLetters[e]
        currentNumberIndex = currentNumberIndex + movement.possibleNumbers[e]    
    
        }}}} 
}
function findLegalPositionsKnight(movement, piece){


    if(piece.team === playerTurn) {

        setPiece (piece)
    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined){    
        
        
        for ( kn = 0 ; kn < movement.possibleMoves ; kn++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[kn]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[kn]]


    basicTeamCollisionCheck()
    goodCord = false
    goodCordTest(possibleCord)
    //addCaptureToSafeKingArray ()


        if (skip === false && goodCord === true && piece.pinned === false) 
            {potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord])}

    skip = false

    }}

}


}
function findLegalPositionsPawn (movement, piece) {

    setPiece (piece)

        iteration = 2
        
    if ( piece.moved === true ) { iteration = 1 }
    
        firstMoveBlocked()
    
        proceed = false

        piece.selected === true ? clearLegalSquares() : proceed = true 

    if(piece.team === playerTurn && proceed === true) {

    skip = false
    passant = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( p = 0 ; p < iteration ; p++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersAdvance[p]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersAdvance[p]]


    basicTeamCollisionCheck()
    enenmyCollisionCheck()

    goodCord = false
    goodCordTest(possibleCord)



    if (skip === false && j !== 8 && goodCord === true && piece.pinned === false) 
    {potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord])}

        skip = false
    }

    
    for ( p2 = 0 ; p2 < 2 ; p2++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersCapture[p2]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersCapture[p2]]

    basicTeamCollisionCheck()
    pawnAttackCheck()

    goodCord = false
    goodCordTest(possibleCord)




    if (skip === false && goodCord === true ) 
            {potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord])}

        skip = false

     if (passantCord === possibleCord && goodCord === true )  
            {potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord])}   
    
    }}}
}
function findLegalPositionsKing(movement, piece){

    if(piece.team === playerTurn) {

        setPiece (piece)
        attack = currentTeam === "white" ? 
            currentBlackAttackPotential : currentWhiteAttackPotential

    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( k = 0 ; k < movement.possibleMoves ; k++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[k]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[k]]


    basicTeamCollisionCheck()

    safe = true

    attack.forEach(attack => {
        if (attack === possibleCord){ safe = false} 
    })

    goodCord = false
    goodCordTest(possibleCord)

    

    if (skip === false && safe === true && goodCord === true) {potentialMoves.push([possibleCord,piece.team,piece.class,piece.cord,piece])}

    skip = false
    }}}


}
function generatefutureSquares () {

    allFuturePositions = []

        potentialMoves.forEach(potential => {

            futureSquares = []


            squares.forEach(square => {

                if (square.occupied !== false && square.cord !== potential[3] && square.cord !== potential[0])
                {futureSquares.push([square.cord,square.occupied,square.class])}

            })

            futureSquares.push(potential)

            allFuturePositions.push(futureSquares)

        //    console.log(allFuturePositions)

})
}
function safeKingCordArrayCreation (){

    king = playerTurn === "white" ? whiteKing : blackKing
    safeKingArray = []


    if (king.check === true){

        findPotential()
        generatefutureSquares ()

        if ( playerTurn === "white") {

            allFuturePositions.forEach(futureSquares =>{
                push = true
                findFutureBlackAttackPotential(futureSquares)

                futureBlackAttackPotential.forEach(attack => {
                
                if(attack === king.cord){
                    push = false
                }})
            if (push === true) { safeKingArray.push(futureSquares)}})
        }
        else if (playerTurn === "black"){

            allFuturePositions.forEach(futureSquares =>{

                push = true
                findFutureWhiteAttackPotential(futureSquares)

                futureWhiteAttackPotential.forEach(attack => {
                         
                 if(attack === king.cord){
            
    
                     push = false
                 }

                 //safeking array doesn't populate becuase the attacking piece is 
                 //still registered in the attack potential
                 //the future squares only show if the attack is blocked,
                 //not removed
             })

             if (push === true) { safeKingArray.push(futureSquares)}})

        }}

        

}
function setChecking(piece){
    oppositeKing = currentTeam === "white" ? blackKing : whiteKing
    if(possibleCord === oppositeKing.cord){piece.checking = true}

    squares.forEach(square => { 
        if(square.cord === piece.cord && piece.checking === true)
        {square.checking=true}})
}
function check(){

    attackPotential = playerTurn === "white" ? currentBlackAttackPotential : currentWhiteAttackPotential
    king = playerTurn === "white" ? whiteKing : blackKing

    attackPotential.forEach(attack => {
        if(attack === king.cord){
            king.check = true
            checkBox.innerHTML = "CHECK! CHECK! CHECK!"
        console.log("///////////////CHECK////////////////")}})

}
function safeKingCheck (piece) {


    king = piece.team === "white" ? whiteKing : blackKing

    if (king.check === true){

    enenmy = piece.team === "white" ? blackPieces : whitePieces

    safeKing = false

    safeKingArray.forEach(futureSquares =>{
        futureSquares.forEach(futureSquare => {


            if(futureSquare[0] === possibleCord){
                safeKing = true
            }
            
            })


            squares.forEach(square => { 

                if (square.occupied !== false && square.checking !== true && square.cord === possibleCord){

                    safeKing = false
                }
            })

        }) 

    enenmy.forEach(enenmy => {

        if (enenmy.cord === possibleCord && enenmy.checking === true){
            safeKing = true
        }
    })

}
}
function pinCheck (piece) {

    goodCordTest(possibleCord)

    if (goodCord === true){

    pinArray = piece.team === "white" ? pinArrayBlack : pinArrayWhite
    king = piece.team === "white" ? whiteKing : blackKing
    
    pinArray.forEach(attackLine =>{

        for (i = 0 ; i < attackLine.length ; i++){

            if(attackLine[i] === currentCord){

                safeKing = false
                
                for (l = 0 ; l < attackLine.length ; l++){

                    if(possibleCord === attackLine[l] && possibleCord !== king.cord){
                        safeKing = true
                    }}}}})}
}

let pinArrayWhite = []
let pinArrayBlack = []


function enenmyPinCheck (enenmy)  {  
    
        inAttackLine = []



    
        attackLine.forEach(attack =>{
            enenmy.forEach(enenmy =>{
                if (enenmy.cord === attack){
                        inAttackLine.push(enenmy)
                }
            })
        })
        // if(attackLine[attackLine.length - 1] === king.cord)
        // {console.log(enenmy,inAttackLine)}

    if(inAttackLine.length === 2 && inAttackLine[1] === king){

     //   console.log(inAttackLine[0])
        inAttackLine[0].pinned = true
        pin = true

    }


    

}
function findWhitePins(){

    pinArrayWhite = []

    whitePieces.forEach(piece => {

    switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook"
             || piece.class === "queen"){
            findPinCords(movement, piece)
        }})

}
function findBlackPins(){

    pinArrayBlack = []

    blackPieces.forEach(piece => {

    switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook"
             || piece.class === "queen"){
            findPinCords(movement, piece)
        }})

}
function findPinCords(movement, piece){

    setPiece (piece)

    king = currentTeam === "white" ? blackKing : whiteKing
    pinArray = currentTeam === "white" ? pinArrayWhite : pinArrayBlack
    oppositeTeam = currentTeam === "white" ? "black" : "white"
    enenmy = currentTeam === "white" ? blackPieces : whitePieces

    
        if (currentLetter !== undefined && currentNumber !== undefined) {

            for ( i = 0 ; i < movement.possibleMoves ; i ++ ){
    
            currentLetterIndex = letterArray.indexOf(currentLetter)
            currentNumberIndex = numberArray.indexOf(currentNumber)
            
            attackLine = [piece.cord]
 
            for (j = 0 ; j < 7 ; j++) {
    
                possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[i]] +
                                numberArray[currentNumberIndex + movement.possibleNumbers[i]] 
                goodCord = false
                goodCordTest(possibleCord)

                teamCollisionCheck ()

                if( j < 7 && goodCord === true){attackLine.push(possibleCord)}

                if(possibleCord === king.cord){j = 8}
                
                currentLetterIndex = currentLetterIndex + movement.possibleLetters[i]
                currentNumberIndex = currentNumberIndex + movement.possibleNumbers[i]  

                pin = false
                enenmyPinCheck (enenmy)

              //  if(attackLine[attackLine.length - 1] === king.cord){console.log(attackLine)}
                

                if (attackLine[attackLine.length - 1] === king.cord && pin === true){
                    pinArray.push(attackLine)

                
                    squares.forEach(square => {
                        if (square.cord === attackLine[0]){
                            square.pinning = true
                        }
                    })
                
                }
    }}}
}
function kingLegalMovesCheck(movement, piece){

        setPiece (piece)
        attack = currentTeam === "white" ? 
            currentBlackAttackPotential : currentWhiteAttackPotential

    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( k = 0 ; k < movement.possibleMoves ; k++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[k]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[k]]


    basicTeamCollisionCheck()

    safe = true

    attack.forEach(attack => {
        if (attack === possibleCord){ safe = false} 
    })

    goodCord = false
    goodCordTest(possibleCord)

    setPiece(piece)

    if (skip === false && safe === true && goodCord === true) { kingSquares.push(possibleCord)}

    skip = false
    }
}


}
function checkMate () {

    king = playerTurn === "white" ? whiteKing : blackKing

    kingCanMove = true
    captureCheckingPiece = false

    kingSquares = []

    kingLegalMovesCheck(kingMovement, king)

    enenmy = playerTurn === "white" ? blackPieces : whitePieces
    attackPotential = playerTurn === "white" ? currentWhiteAttackPotential : currentBlackAttackPotential

    attackPotential.forEach(attack => {

    enenmy.forEach(enenmy => {

        if (enenmy.cord === attack && enenmy.checking === true){
            captureCheckingPiece = true
        } // make sure the piece is not pinned????? how?????
    })

    // ADD piece TO ATTACK attack[1] and then access in this loop to see if its pinned

    // amend all other current attack refeneces to be attack [0]

    })


    if ( kingSquares.length === 0){
        kingCanMove = false
    }

    if (king.check === true && safeKingArray.length === 0
        && kingCanMove === false && captureCheckingPiece === false){
            checkBox.innerHTML = "CHECK!MATE! CHECK!MATE! CHECK!MATE!"
            endOfGame = true
    }

}

let futureBlackAttackPotential = []
let futureWhiteAttackPotential = []

// FUTURE ATTACK POTENTIALS //

function findFutureBlackAttackPotential(futureSquares){

    futureBlackAttackPotential = []

    blackPieces.forEach(piece => {

        switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = blackPawnMovement; break
        }


        // futureSquares.forEach(future => {


        //     if ( future[0] === piece.cord && future[1] === piece.team){


                if (piece.class === "bishop" || piece.class === "rook"
                    || piece.class === "queen"){
                    findFutureLegalAttacksExtension(movement, piece, futureSquares)
                }

                if (piece.class === "king" || piece.class === "knight"){
                    findFutureLegalAttacks(movement, piece)
                }

                if (piece.class === "pawn") {
                findFutureLegalAttacksPawn(movement, piece)
                }
                
            
        
    })

} // forEach to remove potentially captured piece from enenmy attack implemented but commented out
function findFutureWhiteAttackPotential(futureSquares){

    futureWhiteAttackPotential = []
    // if (futureSquares.length === 30 ){console.log(futureSquares)}

    whitePieces.forEach(piece => {

    switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = whitePawnMovement; break
        }



     //           if (futureSquares.length === 30 ){console.log(piece)}

            if (piece.class === "bishop" || piece.class === "rook"
                || piece.class === "queen"){
                findFutureLegalAttacksExtension(movement, piece, futureSquares)
            }

            if (piece.class === "king" || piece.class === "knight"){
                findFutureLegalAttacks(movement, piece)
            }

            if (piece.class === "pawn") {
            findFutureLegalAttacksPawn(movement, piece)
            }


    
    })

}
function futureTeamCollisionCheck (futureSquares)  { 

    futureSquares.forEach(square =>{
    if (futureAttack === square[0] && square[1] === currentTeam){
        f = 8
    }})
}
function futureCollisionCheck (futureSquares)  { 



    futureSquares.forEach(square =>{
        
    if (futureAttack === square[0]){
        f = 8
    }})
}
function findFutureLegalAttacksExtension(movement, piece, futureSquares){

    setPiece(piece)

    oppositeKing = currentTeam === "white" ? blackKing : whiteKing

    if (currentLetter !== undefined && currentNumber !== undefined) {
        
        for ( i = 0 ; i < movement.possibleMoves ; i ++ ){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)

        for (f = 0 ; f < 7 ; f++) {

            futureAttack =  letterArray[currentLetterIndex + movement.possibleLetters[i]] +
                            numberArray[currentNumberIndex + movement.possibleNumbers[i]] 

        
            goodCord = false

            goodCordTest(futureAttack)
 


            if( f < 7 && goodCord === true && currentTeam === "white"){futureWhiteAttackPotential.push(futureAttack)}
             else if( f < 7 && goodCord === true && currentTeam === "black"){futureBlackAttackPotential.push(futureAttack)}

            if (futureAttack !== oppositeKing.cord && goodCord === true) {futureCollisionCheck (futureSquares)}

            

        currentLetterIndex = currentLetterIndex + movement.possibleLetters[i]
        currentNumberIndex = currentNumberIndex + movement.possibleNumbers[i]    
    
        }}}
        
}
function findFutureLegalAttacks(movement, piece){

    setPiece(piece)


    if (currentLetter !== undefined && currentNumber !== undefined){     
        
        for ( i = 0 ; i < movement.possibleMoves ; i++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        futureAttack =  letterArray[currentLetterIndex + movement.possibleLetters[i]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[i]]

    goodCord = false


    goodCordTest(futureAttack)

    if( currentTeam === "white" && goodCord === true){futureWhiteAttackPotential.push(futureAttack)}
    if( currentTeam === "black" && goodCord === true){futureBlackAttackPotential.push(futureAttack)}

    }}

}
function findFutureLegalAttacksPawn(movement, piece){

setPiece(piece)


passant = false

if (currentLetter !== undefined && currentNumber !== undefined) {

for ( i = 0 ; i < 2 ; i++){

    currentLetterIndex = letterArray.indexOf(currentLetter)
    currentNumberIndex = numberArray.indexOf(currentNumber)
    
    futureAttack =  letterArray[currentLetterIndex + movement.possibleLettersCapture[i]] +
                    numberArray[currentNumberIndex + movement.possibleNumbersCapture[i]]


goodCordTest(futureAttack)

if( goodCord === true && currentTeam === "white"){futureWhiteAttackPotential.push(futureAttack)}
else if( goodCord === true && currentTeam === "black"){futureBlackAttackPotential.push(futureAttack)}



if( passantCord === futureAttack && goodCord === true && currentTeam === "white"){futureWhiteAttackPotential.push(futureAttack)}
if( passantCord === futureAttack && goodCord === true && currentTeam === "black"){futureBlackAttackPotential.push(futureAttack)} 

}}
}

// CASTLE LOGIC //

function castleLegalityCheck (left,right) {

    let path = "safe"
    let queenSideClear = false

    switch (left)

    {
        case 2:  rook = blackLeftRook
                 king = blackKing
                 attackPotential = currentWhiteAttackPotential
                 queenSideClear = squares[1].occupied; break
        case 5:  rook = blackRightRook
                 king = blackKing
                 attackPotential = currentWhiteAttackPotential; break
        case 58: rook = whiteLeftRook
                 king = whiteKing
                 attackPotential = currentBlackAttackPotential
                 queenSideClear = squares[57].occupied; break
        case 61: rook = whiteRightRook
                 king = whiteKing
                 attackPotential = currentBlackAttackPotential; break
    }

    



    attackPotential.forEach(cord => {
        if(squares[left].cord === cord || squares[right].cord === cord)    
            {path = "attacked"}})

    if (path === "safe" && squares[left].occupied === false && squares[right].occupied === false &&
        rook.moved === false && rook.letter !== undefined && king.moved === false && king.check != true && queenSideClear === false) 
        return true

}
function kingCastleToggle(king,left,right){

    
if (castleLegalityCheck(left,right) && king.team === playerTurn){

    squares[left].element.style.opacity = ".3"
    squares[right].element.style.opacity = ".3"
}


}
function blackQueensideCastle () {

 


if (castleLegalityCheck(2,3)){
    
        castledRook = blackLeftRook
        blackKing.element.style.left = squares[2].x
        blackKing.element.style.top = squares[2].y
        blackKing.x = squares[2].x
        blackKing.y = squares[2].y
        blackKing.letter = squares[2].letter
        blackKing.number = squares[2].number
        blackKing.moved = true
        blackLeftRook.element.style.left = squares[3].x
        blackLeftRook.element.style.top = squares[3].y
        blackLeftRook.x = squares[3].x
        blackLeftRook.y = squares[3].y
        blackLeftRook.letter = squares[3].letter
        blackLeftRook.number = squares[3].number
        blackLeftRook.moved = true
        clearLegalSquares()
        occupiedCheck()

        
 
        changeTurn()



    }


    

}
function blackKingsideCastle () {


    if (castleLegalityCheck(5,6)){
            castledRook = blackRightRook
            blackKing.element.style.left = squares[6].x
            blackKing.element.style.top = squares[6].y
            blackKing.x = squares[6].x
            blackKing.y = squares[6].y
            blackKing.letter = squares[6].letter
            blackKing.number = squares[6].number
            blackKing.moved = true
            blackRightRook.element.style.left = squares[5].x
            blackRightRook.element.style.top = squares[5].y
            blackRightRook.x = squares[5].x
            blackRightRook.y = squares[5].y
            blackRightRook.letter = squares[5].letter
            blackRightRook.moved = true
            clearLegalSquares()
            occupiedCheck()
            

            changeTurn()

        }


}
function whiteQueensideCastle () {


    if (castleLegalityCheck(58,59)){

            castledRook = whiteLeftRook
            whiteKing.element.style.left = squares[58].x
            whiteKing.element.style.top = squares[58].y
            whiteKing.x = squares[58].x
            whiteKing.y = squares[58].y
            whiteKing.letter = squares[58].letter
            whiteKing.number = squares[58].number
            whiteKing.moved = true
            whiteLeftRook.element.style.left = squares[59].x
            whiteLeftRook.element.style.top = squares[59].y
            whiteLeftRook.x = squares[59].x
            whiteLeftRook.y = squares[59].y
            whiteLeftRook.letter = squares[59].letter
            whiteLeftRook.number = squares[59].number
            whiteLeftRook.moved = true
            clearLegalSquares()
            occupiedCheck()


            changeTurn()
            
    
        }

}
function whiteKingsideCastle () {


    if (castleLegalityCheck(61,62)){

        castledRook = whiteRightRook
        whiteKing.element.style.left = squares[62].x
        whiteKing.element.style.top = squares[62].y
        whiteKing.x = squares[62].x
        whiteKing.y = squares[62].y
        whiteKing.letter = squares[62].letter
        whiteKing.number = squares[62].number
        whiteKing.moved = true
        whiteRightRook.element.style.left = squares[61].x
        whiteRightRook.element.style.top = squares[61].y
        whiteRightRook.x = squares[61].x
        whiteRightRook.y = squares[61].y
        whiteRightRook.letter = squares[61].letter
        whiteRightRook.number = squares[61].number
        whiteRightRook.moved = true
        clearLegalSquares()
        occupiedCheck()

        changeTurn()
        


    }

}
function returnCastledRook () {


    switch(castledRook){
    case whiteRightRook: number = 63; break
    case whiteLeftRook: number = 56; break
    case blackLeftRook: number = 0; break
    case blackRightRook: number = 7; break

}

    castledRook.element.style.left = squares[number].x
    castledRook.element.style.top = squares[number].y
    castledRook.x = squares[number].x
    castledRook.y = squares[number].y
    castledRook.letter = squares[number].letter
    castledRook.number = squares[number].number
    castledRook.moved = false

    castledRook.team === "white" ? whiteKing.moved = false : blackKing.moved = false


}

// QUEENING PAWN //

function queeningPawn (){

    whitePieces.forEach(piece =>{
        if(piece.class === "pawn" && piece.number === "8"){

            if (gameMode === "watchEngine") {piece.class = "queen"}
                else
            {piece.class = prompt("please type your promotion request in all lower case")}

            switch (piece.class){

            case "queen" : piece.element.src = "chessPieces/whiteQueen.png", piece.value = 9; break
            case "rook" : piece.element.src = "chessPieces/whiteRook.png", piece.value = 5; break
            case "knight" : piece.element.src = "chessPieces/whiteKnight.png", piece.value = 3; break
            case "bishop" : piece.element.src = "chessPieces/whiteBishop.png", piece.value = 3; break

            }}})
    blackPieces.forEach(piece =>{
        if(piece.class === "pawn" && piece.number === "1"){

            if (gameMode === "watchEngine" || gameMode === "playEngine") {piece.class = "queen"}
                else
            {piece.class = prompt("please type your promotion request in all lower case")}

            switch (piece.class){

            case "queen" : piece.element.src = "chessPieces/blackQueen.png", piece.value = 9; break
            case "rook" : piece.element.src = "chessPieces/blackRook.png", piece.value = 5; break
            case "knight" : piece.element.src = "chessPieces/blackKnight.png", piece.value = 3; break
            case "bishop" : piece.element.src = "chessPieces/blackBishop.png", piece.value = 3; break

            }}})
}

// HIGHLIGHT AND ACTIVATE MOVES //

function highlightLegalSqaures () {

    squares.forEach(square => {

        if (square.legal === true){
            square.element.style.opacity = ".3"
        }})
}
function activateLegalKnightMoves (piece, movement) {
    piece.selected === false ? 
    findLegalKnightMoves(movement, piece) : clearLegalSquares()
    togglePieceSelection(piece)
}
function activateLegalKingMoves (piece, movement) {
    piece.selected === false ? 
    findLegalKingMoves(movement, piece) : clearLegalSquares()
    togglePieceSelection(piece)
}
function activateLegalMovesPawn (piece, movement) {
    piece.selected === false ? 
    findLegalMovesPawn(movement, piece) : clearLegalSquares()
    togglePieceSelection(piece)
}
function activateLegalMovesExtension (piece, movement) {
    piece.selected === false  ? 
    findLegalMovesExtension(movement, piece) : clearLegalSquares()
    togglePieceSelection(piece)
}
function updateLegalSquares () {

        for ( l = 0 ; l < legalSquares.length ; l++ ){

            squares.forEach( square => {

                if (legalSquares[l] === square.cord){

                    square.legal = true
                
                }})}

        highlightLegalSqaures ()
}


// BOARD CREATION //

let letter
let number

class Square {
    constructor (cord, x, y, letter, number){

        this.cord = cord
        this.element = document.getElementById(cord)
        this.x = x + "px"
        this.y = y + "px"
        this.letter = letter
        this.number = number
        this.selectedByBlack = false
        this.selectedByWhite = false
        this.occupied = false
        this.legal = false

        this.element.addEventListener('click', () =>{

            if ( playerTurn == "white") {

                for ( i = 0 ; i < whitePieces.length ; i++ ){

                    if (whitePieces[i].x == this.x && whitePieces[i].y == this.y){
    
                        this.selectedByWhite = true
                    }
                    }


            for ( i = 0 ; i < whitePieces.length ; i++ ){
            
                    if (currentPieceWhite == whitePieces[i] && this.selectedByWhite == false && this.legal == true){
            


                        previousPosition.x = whitePieces[i].x
                        previousPosition.y = whitePieces[i].y
                        previousPosition.letter = whitePieces[i].letter
                        previousPosition.number = whitePieces[i].number
                        previousPosition.moved = whitePieces[i].moved
                        

                        currentPieceWhite.cord = this.cord

                        
                        whitePieces[i].element.style.left = this.x
                        whitePieces[i].element.style.top = this.y
                        whitePieces[i].x = this.x
                        whitePieces[i].y = this.y
                        whitePieces[i].letter = this.letter
                        whitePieces[i].number = this.number

                       capturePassantWhite()
                       clearLegalSquares()
                       clearPassant ()

                            
                        if (whitePieces[i].moved === false && whitePieces[i].class === "pawn")
                        {passantPiece = whitePieces[i]}       

                        if (whitePieces[i].class === "pawn" && whitePieces[i].moved === false
                            && whitePieces[i].number === "4"){
                            passantCord =  this.letter + "3"
                        }
                    
                        if (whitePieces[i].class === "pawn" || whitePieces[i].class === "rook" || 
                        whitePieces[i].class === "king") {whitePieces[i].moved = true}

                        blackPieces.forEach(piece => {checkCaptureBlackPiece(piece)})

                        currentPieceWhite = undefined

                        changeTurn()


            for ( i = 0 ; i < squares.length ; i++){

                squares[i].selected = false
                
                }}}
            }


            else if (playerTurn = "black") {


                for ( i = 0 ; i < blackPieces.length ; i++ ){

                    if (blackPieces[i].x == this.x && blackPieces[i].y == this.y){
    
                        this.selectedByBlack = true
                    }
                    }

            for ( i  = 0 ; i < blackPieces.length ; i++ ){
            
                    if (currentPieceBlack == blackPieces[i] && this.selectedByBlack == false && this.legal == true){
            


                        previousPosition.x = blackPieces[i].x
                        previousPosition.y = blackPieces[i].y
                        previousPosition.letter = blackPieces[i].letter
                        previousPosition.number = blackPieces[i].number
                        previousPosition.moved = blackPieces[i].moved


                        currentPieceBlack.cord = this.cord
                        blackPieces[i].element.style.left = this.x
                        blackPieces[i].element.style.top = this.y
                        blackPieces[i].x = this.x
                        blackPieces[i].y = this.y
                        blackPieces[i].letter = this.letter
                        blackPieces[i].number = this.number

                        capturePassantBlack()
                        clearLegalSquares()
                        
                        clearPassant()
                        
                        

                        
                        if (blackPieces[i].moved === false && blackPieces[i].class === "pawn") 
                        {passantPiece = blackPieces[i]}

                        if (blackPieces[i].class === "pawn" && blackPieces[i].moved === false
                            && blackPieces[i].number === "5"){
                            passantCord = this.letter + "6"
                        }
                        
                        if (blackPieces[i].class === "pawn" || blackPieces[i].class === "rook" || 
                        blackPieces[i].class === "king") {blackPieces[i].moved = true}



    
                        whitePieces.forEach(piece => {checkCaptureWhitePiece(piece)})

                        currentPieceBlack = undefined
                        changeTurn()


            for ( i = 0 ; i < squares.length ; i++){

                squares[i].selected = false
                
                }
            
            }}  
        
            }
                
        })

        this.engineMove = function (enginePiece) {

            let pieceArray = playerTurn === "white" ? whitePieces : blackPieces
            let passantCordNumber = playerTurn === "white" ? "3" : "6"
            let passantPieceNumber = playerTurn === "white" ? "4" : "5"
        
            for ( i = 0 ; i < pieceArray.length ; i++ ){
            
                if (enginePiece === pieceArray[i]){
        

        
                    previousPosition.x = pieceArray[i].x
                    previousPosition.y = pieceArray[i].y
                    previousPosition.letter = pieceArray[i].letter
                    previousPosition.number = pieceArray[i].number
                    previousPosition.moved = pieceArray[i].moved
                    
        
                    enginePiece.cord = this.cord
                    enginePiece.moved = true
                    enginePiece.turnCount = turnCount
        
                    
                    pieceArray[i].element.style.left = this.x
                    pieceArray[i].element.style.top = this.y
                    pieceArray[i].x = this.x
                    pieceArray[i].y = this.y
                    pieceArray[i].letter = this.letter
                    pieceArray[i].number = this.number
        
        

                    if (playerTurn === "black"){capturePassantBlack()}
                    else if (playerTurn === "white"){capturePassantWhite()}
                    
                    clearLegalSquares()
                    clearPassant ()
        
                        
                    if (pieceArray[i].moved === false && pieceArray[i].class === "pawn")
                    
                    {passantPiece = pieceArray[i]}       
        
                    if (pieceArray[i].class === "pawn" && pieceArray[i].moved === false
                        && pieceArray[i].number === passantPieceNumber){
                        passantCord =  this.letter + passantCordNumber 
                    }
                
                    if (pieceArray[i].class === "pawn" || pieceArray[i].class === "rook" || 
                    pieceArray[i].class === "king") {pieceArray[i].moved = true}
        
                    if (playerTurn === "black"){whitePieces.forEach(piece => {checkCaptureWhitePiece(piece)})}
                    else if (playerTurn === "white"){blackPieces.forEach(piece => {checkCaptureBlackPiece(piece)})}
        
                    enginePiece = undefined
        
                    if (playerTurn === "white") {currentPieceWhite = undefined}
                    else if (playerTurn === "black") {currentPieceBlack = undefined}
        
                    changeTurn()
        
        
                }}
        }

    

    }

}

let squares = []

let x = 0
let y = 0
let cord

for (i = 0 ; i < 8 ; i++){


    for (j = 0 ; j < 8 ; j++){

        x = x
        y = y 
 
 

            switch (x)
            {
            case 0 : letter = "A" ; break
            case 50 : letter = "B" ; break
            case 100 : letter = "C" ; break
            case 150 : letter = "D" ; break
            case 200 : letter = "E" ; break
            case 250 : letter = "F" ; break
            case 300 : letter = "G" ; break
            case 350 : letter = "H" 
            }

            switch (y)
            {
            case 0 : number = "8" ; break
            case 50 : number = "7" ; break
            case 100 : number = "6" ; break
            case 150 : number = "5" ; break
            case 200 : number = "4" ; break
            case 250 : number = "3" ; break
            case 300 : number = "2" ; break
            case 350 : number = "1" 
            }

        letter = letter
        number = number

        cord = letter + number

        element = document.getElementById(cord)
 

        squares.push(new Square(cord, x, y, letter, number))
        
        x += 50
    }

    x = 0
    y += 50



}


function colorSquares(){
color = "green"
for ( i = 0 ; i < 64 ; i++){

    color = color === "green" ? "brown" : "green"

if ( i % 8 === 0){

   color = color === "green" ? "brown" : "green" 
}
    squares[i].element.style.background = color

}

}

colorSquares()

let humanDelay = "done"

// PIECE EVENT LISTENERS //

// WHITE PIECES //

if (humanDelay === "done"){

whiteLeftKnight.element.addEventListener("click", ()=>{

    
    clear(whiteLeftKnight)
    currentPieceWhite = whiteLeftKnight

    setPreviousPiece(whiteLeftKnight)
    moveToPiece(whiteLeftKnight)
    checkCaptureWhitePiece(whiteLeftKnight)

    activateLegalKnightMoves (whiteLeftKnight, knightMovement) 



})
whiteRightKnight.element.addEventListener("click", ()=>{

    clear(whiteRightKnight)
    currentPieceWhite = whiteRightKnight

    setPreviousPiece(whiteRightKnight)
    moveToPiece(whiteRightKnight)
    checkCaptureWhitePiece(whiteRightKnight)
    
    activateLegalKnightMoves (whiteRightKnight, knightMovement) 
    

    

})
whiteLeftRook.element.addEventListener("click", ()=>{

    clear(whiteLeftRook)
    currentPieceWhite = whiteLeftRook

    setPreviousPiece(whiteLeftRook)
    moveToPiece(whiteLeftRook)
    checkCaptureWhitePiece(whiteLeftRook)
    

    activateLegalMovesExtension (whiteLeftRook, rookMovement) 
    

})
whiteRightRook.element.addEventListener("click", ()=>{

    clear(whiteRightRook)
    currentPieceWhite = whiteRightRook

    setPreviousPiece(whiteRightRook)
    moveToPiece(whiteRightRook)
    checkCaptureWhitePiece(whiteRightRook)

    activateLegalMovesExtension (whiteRightRook, rookMovement) 

})
whiteRightBishop.element.addEventListener("click", ()=>{

    clear(whiteRightBishop)
    currentPieceWhite = whiteRightBishop

    setPreviousPiece(whiteRightBishop)
    moveToPiece(whiteRightBishop)
    checkCaptureWhitePiece(whiteRightBishop)

    activateLegalMovesExtension (whiteRightBishop, bishopMovement) 

})
whiteLeftBishop.element.addEventListener("click", ()=>{

    clear(whiteLeftBishop)
    currentPieceWhite = whiteLeftBishop

    setPreviousPiece(whiteLeftBishop)
    moveToPiece(whiteLeftBishop)
    checkCaptureWhitePiece(whiteLeftBishop)

    activateLegalMovesExtension (whiteLeftBishop, bishopMovement) 

})
whiteKing.element.addEventListener("click", ()=>{

    clear(whiteKing)
    currentPieceWhite = whiteKing

    setPreviousPiece(whiteKing)
    moveToPiece(whiteKing)
    checkCaptureWhitePiece(whiteKing)


    kingCastleToggle(whiteKing,58,59)
    kingCastleToggle(whiteKing,61,62)
    activateLegalKingMoves (whiteKing, kingMovement)


})
whiteQueen.element.addEventListener("click", ()=>{

    clear(whiteQueen)
    currentPieceWhite = whiteQueen

    setPreviousPiece(whiteQueen)
    moveToPiece(whiteQueen)
    checkCaptureWhitePiece(whiteQueen)

    activateLegalMovesExtension (whiteQueen, queenMovement) 

})
whitePawn1.element.addEventListener("click", ()=>{

    clear(whitePawn1)
    currentPieceWhite = whitePawn1

    setPreviousPiece(whitePawn1)
    moveToPiece(whitePawn1)
    checkCaptureWhitePiece(whitePawn1)

    switch (whitePawn1.class){

        case "pawn" : activateLegalMovesPawn (whitePawn1, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn1, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn1, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn1, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn1, rookMovement); break

    } 

})
whitePawn2.element.addEventListener("click", ()=>{

    clear(whitePawn2)
    currentPieceWhite = whitePawn2

    setPreviousPiece(whitePawn2)
    moveToPiece(whitePawn2)
    checkCaptureWhitePiece(whitePawn2)

    switch (whitePawn2.class){

        case "pawn" : activateLegalMovesPawn (whitePawn2, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn2, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn2, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn2, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn2, rookMovement); break

    }

})
whitePawn3.element.addEventListener("click", ()=>{

    clear(whitePawn3)
    currentPieceWhite = whitePawn3

    setPreviousPiece(whitePawn3)
    moveToPiece(whitePawn3)
    checkCaptureWhitePiece(whitePawn3)

    switch (whitePawn3.class){

        case "pawn" : activateLegalMovesPawn (whitePawn3, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn3, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn3, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn3, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn3, rookMovement); break

    } 

})
whitePawn4.element.addEventListener("click", ()=>{

    clear(whitePawn4)
    currentPieceWhite = whitePawn4

    setPreviousPiece(whitePawn4)
    moveToPiece(whitePawn4)
    checkCaptureWhitePiece(whitePawn4)

    switch (whitePawn4.class){

        case "pawn" : activateLegalMovesPawn (whitePawn4, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn4, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn4, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn4, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn4, rookMovement); break

    }

})
whitePawn5.element.addEventListener("click", ()=>{

    clear(whitePawn5)
    currentPieceWhite = whitePawn5

    setPreviousPiece(whitePawn5)
    moveToPiece(whitePawn5)
    checkCaptureWhitePiece(whitePawn5)
    
    
    switch (whitePawn5.class){

        case "pawn" : activateLegalMovesPawn (whitePawn5, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn5, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn5, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn5, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn5, rookMovement); break

    }

})
whitePawn6.element.addEventListener("click", ()=>{

    clear(whitePawn6)
    currentPieceWhite = whitePawn6

    setPreviousPiece(whitePawn6)
    moveToPiece(whitePawn6)
    checkCaptureWhitePiece(whitePawn6)

    switch (whitePawn6.class){

        case "pawn" : activateLegalMovesPawn (whitePawn6, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn6, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn6, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn6, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn6, rookMovement); break

    }

})
whitePawn7.element.addEventListener("click", ()=>{

    clear(whitePawn7)
    currentPieceWhite = whitePawn7

    setPreviousPiece(whitePawn7)
    moveToPiece(whitePawn7)
    checkCaptureWhitePiece(whitePawn7)

    switch (whitePawn7.class){

        case "pawn" : activateLegalMovesPawn (whitePawn7, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn7, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn7, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn7, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn7, rookMovement); break

    }

})
whitePawn8.element.addEventListener("click", ()=>{

    clear(whitePawn8)
    currentPieceWhite = whitePawn8

    setPreviousPiece(whitePawn8)
    moveToPiece(whitePawn8)
    checkCaptureWhitePiece(whitePawn8)

    switch (whitePawn8.class){

        case "pawn" : activateLegalMovesPawn (whitePawn8, whitePawnMovement); break
        case "queen" : activateLegalMovesExtension(whitePawn8, queenMovement); break
        case "knight" : activateLegalKnightMoves(whitePawn8, knightMovement); break
        case "bishop" : activateLegalMovesExtension(whitePawn8, bishopMovement); break
        case "rook" : activateLegalMovesExtension(whitePawn8, rookMovement); break

    }

})

// BLACK PIECES //

blackLeftKnight.element.addEventListener("click", ()=>{



    clear(blackLeftKnight)
    currentPieceBlack = blackLeftKnight

    setPreviousPiece(blackLeftKnight)
    moveToPiece(blackLeftKnight)
    checkCaptureBlackPiece(blackLeftKnight)
    

 
    activateLegalKnightMoves (blackLeftKnight, knightMovement) 


})
blackRightKnight.element.addEventListener("click", ()=>{



    clear(blackRightKnight)
    currentPieceBlack = blackRightKnight

    setPreviousPiece(blackRightKnight)
    moveToPiece(blackRightKnight)
    checkCaptureBlackPiece(blackRightKnight)
    

 
    activateLegalKnightMoves (blackRightKnight, knightMovement) 


})
blackRightRook.element.addEventListener("click", ()=>{



    clear(blackRightRook)
    currentPieceBlack = blackRightRook

    setPreviousPiece(blackRightRook)
    moveToPiece(blackRightRook)
    checkCaptureBlackPiece(blackRightRook)
    

 
    activateLegalMovesExtension (blackRightRook, rookMovement) 


})
blackLeftRook.element.addEventListener("click", ()=>{



    clear(blackLeftRook)
    currentPieceBlack = blackLeftRook

    setPreviousPiece(blackLeftRook)
    moveToPiece(blackLeftRook)
    checkCaptureBlackPiece(blackLeftRook)
    

 
    activateLegalMovesExtension (blackLeftRook, rookMovement) 


})
blackLeftBishop.element.addEventListener("click", ()=>{



    clear(blackLeftBishop)
    currentPieceBlack = blackLeftBishop

    setPreviousPiece(blackLeftBishop)
    moveToPiece(blackLeftBishop)
    checkCaptureBlackPiece(blackLeftBishop)
    

 
    activateLegalMovesExtension (blackLeftBishop, bishopMovement) 


})
blackRightBishop.element.addEventListener("click", ()=>{

    clear(blackRightBishop)
    currentPieceBlack = blackRightBishop

    setPreviousPiece(blackRightBishop)
    moveToPiece(blackRightBishop)
    checkCaptureBlackPiece(blackRightBishop)
    

    activateLegalMovesExtension (blackRightBishop, bishopMovement) 
    


})
blackKing.element.addEventListener("click", ()=>{

    clear(blackKing)
    currentPieceBlack = blackKing

    setPreviousPiece(blackKing)
    moveToPiece(blackKing)
    checkCaptureBlackPiece(blackKing)
    
    kingCastleToggle(blackKing,2,3)
    kingCastleToggle(blackKing,5,6)
    activateLegalKingMoves(blackKing, kingMovement) 
    


})
blackQueen.element.addEventListener("click", ()=>{

    clear(blackQueen)
    currentPieceBlack = blackQueen

    setPreviousPiece(blackQueen)
    moveToPiece(blackQueen)
    checkCaptureBlackPiece(blackQueen)
    

    activateLegalMovesExtension (blackQueen, queenMovement) 
    


})
blackPawn1.element.addEventListener("click", ()=>{

    clear(blackPawn1)
    currentPieceBlack = blackPawn1

    setPreviousPiece(blackPawn1)
    moveToPiece(blackPawn1)
    checkCaptureBlackPiece(blackPawn1)

    switch (blackPawn1.class){

        case "pawn" : activateLegalMovesPawn (blackPawn1, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn1, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn1, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn1, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn1, rookMovement); break

    } 

})
blackPawn2.element.addEventListener("click", ()=>{

    clear(blackPawn2)
    currentPieceBlack = blackPawn2

    setPreviousPiece(blackPawn2)
    moveToPiece(blackPawn2)
    checkCaptureBlackPiece(blackPawn2)

    switch (blackPawn2.class){

        case "pawn" : activateLegalMovesPawn (blackPawn2, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn2, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn2, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn2, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn2, rookMovement); break

    } 
    
})
blackPawn3.element.addEventListener("click", ()=>{

    clear(blackPawn3)
    currentPieceBlack = blackPawn3
    
    setPreviousPiece(blackPawn3)
    moveToPiece(blackPawn3)
    checkCaptureBlackPiece(blackPawn3)

    switch (blackPawn3.class){

        case "pawn" : activateLegalMovesPawn (blackPawn3, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn3, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn3, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn3, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn3, rookMovement); break

    } 

})
blackPawn4.element.addEventListener("click", ()=>{

    clear(blackPawn4)
    currentPieceBlack = blackPawn4

    setPreviousPiece(blackPawn4)
    moveToPiece(blackPawn4)
    checkCaptureBlackPiece(blackPawn4)

    switch (blackPawn4.class){

        case "pawn" : activateLegalMovesPawn (blackPawn4, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn4, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn4, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn4, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn4, rookMovement); break

    } 

})
blackPawn5.element.addEventListener("click", ()=>{

    clear(blackPawn5)
    currentPieceBlack = blackPawn5

    setPreviousPiece(blackPawn5)
    moveToPiece(blackPawn5)
    checkCaptureBlackPiece(blackPawn5)

    switch (blackPawn5.class){

        case "pawn" : activateLegalMovesPawn (blackPawn5, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn5, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn5, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn5, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn5, rookMovement); break

    } 
    
})
blackPawn6.element.addEventListener("click", ()=>{

    clear(blackPawn6)
    currentPieceBlack = blackPawn6

    setPreviousPiece(blackPawn6)
    moveToPiece(blackPawn6)
    checkCaptureBlackPiece(blackPawn6)

    switch (blackPawn6.class){

        case "pawn" : activateLegalMovesPawn (blackPawn6, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn6, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn6, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn6, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn6, rookMovement); break

    } 

})
blackPawn7.element.addEventListener("click", ()=>{

    clear(blackPawn7)
    currentPieceBlack = blackPawn7

    setPreviousPiece(blackPawn7)
    moveToPiece(blackPawn7)
    checkCaptureBlackPiece(blackPawn7)

    switch (blackPawn7.class){

        case "pawn" : activateLegalMovesPawn (blackPawn7, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn7, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn7, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn7, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn7, rookMovement); break

    } 
    
})
blackPawn8.element.addEventListener("click", ()=>{

    clear(blackPawn8)
    currentPieceBlack = blackPawn8

    setPreviousPiece(blackPawn8)
    moveToPiece(blackPawn8)
    checkCaptureBlackPiece(blackPawn8)

    switch (blackPawn8.class){

        case "pawn" : activateLegalMovesPawn (blackPawn8, blackPawnMovement); break
        case "queen" : activateLegalMovesExtension(blackPawn8, queenMovement); break
        case "knight" : activateLegalKnightMoves(blackPawn8, knightMovement); break
        case "bishop" : activateLegalMovesExtension(blackPawn8, bishopMovement); break
        case "rook" : activateLegalMovesExtension(blackPawn8, rookMovement); break

    } 
    
})


// CASTLE SQUARES //

C8.addEventListener("click", ()=>{

    blackQueensideCastle()
})
G8.addEventListener("click", ()=>{

    blackKingsideCastle()
})
C1.addEventListener("click", ()=>{

    whiteQueensideCastle()
})
G1.addEventListener("click", ()=>{

    whiteKingsideCastle()
})

}

occupiedCheck()
findCurrentBlackAttackPotential()
findCurrentWhiteAttackPotential()


function makeSound (){

    var audio = new Audio('sound.mp3');
    audio.play();

}

function changeTurn() {

    makeSound ()
    humanDelay = "inProcess"

    playerTurn = playerTurn === "white" ? "black" : "white"
    document.getElementById("turnBox").innerHTML = `It is ${playerTurn}'s turn!`
    checkBox.innerHTML = ""
    occupiedCheck()
    whiteKing.check = false
    blackKing.check = false

    console.log("///////////////////////turnchange",playerTurn)

    findCurrentBlackAttackPotential()
    findCurrentWhiteAttackPotential()
    pinArrayBlack = []
    pinArrayWhite = []

    setTimeout(() => { // needs a millisecond else is registers capture pieces
            findWhitePins()
            findBlackPins()
    }, 1);

    updateRealm(whiteKing)
    updateRealm(blackKing)
    updateOpenFiles ()
    check()
    safeKingCordArrayCreation()

        checkMate()

    clearLegalSquares()
    setSelectedToFalse()
    clearChecking()
    allFutureSquares = []
    queeningPawn ()

    if (endOfGame === false){

    if (gameMode === "watchEngine"){
    {setTimeout(() => {makeIntelligentMoves()}, waitTime)}
    } else if (gameMode === "watchRandom"){
        {setTimeout(() => {makeRandomMoves()}, waitTime)}
    } else if (gameMode === "playEngine"){
        if (playerTurn === "black")
        {setTimeout(() => {makeIntelligentMoves()}, waitTime)}
    }
}

if (turnCount > 80 && gameMode === "watchEngine"){location.reload()}

setTimeout(() => {
    humanDelay = "done"
    
}, 400);
}

/////////////////////////////////////////////////////////////////

// ENGINE LOGIC //

let turnCount = 0
let gameMode = "playEngine"
let waitTime = 1500
let evaluation = []
let maxValue = -100
let bestMoves = []
let potentialEngineMoves = []
let currentPiece = undefined

///////////////////////////////////////////////

function enginePotential(){

    pieces = playerTurn === "white" ? whitePieces : blackPieces
    pawnMovement = playerTurn === "white" ? whitePawnMovement : blackPawnMovement

    pieces.forEach(piece => {

        switch (piece.class){

            case "bishop" : movement = bishopMovement; break
            case "rook" : movement = rookMovement; break
            case "queen" : movement = queenMovement; break
            case "knight" : movement = knightMovement; break
            case "king" : movement = kingMovement; break
            case "pawn" : movement = pawnMovement; break
        }

        if (piece.class === "bishop" || piece.class === "rook" 
            || piece.class === "queen" ){
            engineLegalPositionsExtension(movement, piece)
        }

        if (piece.class === "knight"){
            engineLegalPositionsKnight(movement, piece)
        }
        if (piece.class === "king"){
            engineLegalPositionsKing(movement, piece)
        }

        if (piece.class === "pawn") {
            engineLegalPositionsPawn (movement, piece)

        }
    })

    console.log("potentialEngineMoves",potentialEngineMoves)


    legalSquares.push("exitEngineLoop")

}
function engineLegalPositionsExtension(movement, piece) {

        setPiece (piece)

    if (currentLetter !== undefined && currentNumber !== undefined) { // prevents a -1 return
        
        for ( e = 0 ; e < movement.possibleMoves ; e ++ ){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)

        for (j = 0 ; j < 7 ; j++) {

            possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[e]] +
                            numberArray[currentNumberIndex + movement.possibleNumbers[e]] 
            
            teamCollisionCheck () 
            goodCord = false
            goodCordTest(possibleCord)
            safeKing = true
            safeKingCheck(piece)
            pinCheck(piece)

                if(j < 7 && goodCord === true && safeKing === true){potentialEngineMoves.push([possibleCord,piece,0])}


            enenmyCollisionCheck ()

        currentLetterIndex = currentLetterIndex + movement.possibleLetters[e]
        currentNumberIndex = currentNumberIndex + movement.possibleNumbers[e]    
    
        }}

        

}}
function engineLegalPositionsKnight(movement, piece){




        setPiece (piece)
    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined){    
        
        
        for ( kn = 0 ; kn < movement.possibleMoves ; kn++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[kn]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[kn]]


    basicTeamCollisionCheck()
    goodCord = false
    goodCordTest(possibleCord)
    safeKing = true
    safeKingCheck(piece)

        if (skip === false && goodCord === true && 
            safeKing === true && piece.pinned === false)
            {potentialEngineMoves.push([possibleCord,piece,0])}

    skip = false

    }

}

}
function engineLegalPositionsPawn (movement, piece) {

    setPiece (piece)

        iteration = 2
        
    if ( piece.moved === true ) { iteration = 1 }
    
        firstMoveBlocked()
    
        proceed = false

        piece.selected === true ? clearLegalSquares() : proceed = true 

    if(piece.team === playerTurn && proceed === true) {

    skip = false
    passant = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( p = 0 ; p < iteration ; p++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersAdvance[p]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersAdvance[p]]


    basicTeamCollisionCheck()
    enenmyCollisionCheck()

    goodCord = false
    goodCordTest(possibleCord)
    pawnNotPinned = true
    safeKing = true
    safeKingCheck(piece)

    king = currentTeam === "white" ? whiteKing : blackKing

    if (piece.pinned === true && piece.letter === king.letter){piece.pinned = false, pawnNotPinned === false}


    if (skip === false && j !== 8 && goodCord === true 
        && safeKing === true && piece.pinned === false) 
    {potentialEngineMoves.push([possibleCord,piece,0])}

        skip = false
    }

    
    for ( p2 = 0 ; p2 < 2 ; p2++){


        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLettersCapture[p2]] +
                        numberArray[currentNumberIndex + movement.possibleNumbersCapture[p2]]

    basicTeamCollisionCheck()
    pawnAttackCheck()

    goodCord = false
    goodCordTest(possibleCord)

    safeKing = true
    safeKingCheck(piece)
    pinCheck (piece)

    if (skip === false && goodCord === true 
        && safeKing === true && pawnNotPinned === true) 
            {potentialEngineMoves.push([possibleCord,piece,0])}

        skip = false

     if (passantCord === possibleCord && goodCord === true 
        && safeKing === true && pawnNotPinned === true)  
            {potentialEngineMoves.push([possibleCord,piece,0])}   
    
    }



}}
}
function engineLegalPositionsKing(movement, piece){


        setPiece (piece)
        attack = currentTeam === "white" ? 
            currentBlackAttackPotential : currentWhiteAttackPotential

    skip = false

    if (currentLetter !== undefined && currentNumber !== undefined) {

    for ( k = 0 ; k < movement.possibleMoves ; k++){

        currentLetterIndex = letterArray.indexOf(currentLetter)
        currentNumberIndex = numberArray.indexOf(currentNumber)
        
        possibleCord =  letterArray[currentLetterIndex + movement.possibleLetters[k]] +
                        numberArray[currentNumberIndex + movement.possibleNumbers[k]]


    basicTeamCollisionCheck()

    safe = true

    attack.forEach(attack => {
        if (attack === possibleCord){ safe = false} 
    })

    goodCord = false
    goodCordTest(possibleCord)

    

    if (skip === false && safe === true && goodCord === true) {potentialEngineMoves.push([possibleCord,piece,0])}

    skip = false
    }

}}

//////////////////////////////////////////////////

let blackKingRealm = []
let whiteKingRealm = []
let blackKingZone = []
let whiteKingZone = []

function updateRealm (king) {

    realm = king === whiteKing ? whiteKingRealm : blackKingRealm
    realm = []

    letterIndex = letterArray.indexOf(king.letter)
    numberIndex = numberArray.indexOf(king.number)

    realmLetter = []
    realmNumber = []
    let yesLetter = undefined
    let yesNumber = undefined

    for ( i = 1 ; i < 4 ; i++){

        realmLetter.push(letterArray[letterIndex + i],letterArray[letterIndex - i])
        realmLetter.push(letterArray[letterIndex])
        realmNumber.push(numberArray[numberIndex + i],numberArray[numberIndex - i])
        realmNumber.push(numberArray[numberIndex])

    }

    squares.forEach(square => {

        yesLetter = false
        yesNumber = false


        realmLetter.forEach(letter =>{
            if (letter === square.cord[0]){
                yesLetter = true


            }
        })
        realmNumber.forEach(number =>{
            if (number === square.cord[1]){
                yesNumber = true


            }
        })

        if(yesLetter === true && yesNumber === true){
            realm.push(square.cord)

        }
    })
}
function updateZone (king) {

    zone = king === whiteKing ? whiteKingZone : blackKingZone
    zone = []

    letterIndex = letterArray.indexOf(king.letter)
    numberIndex = numberArray.indexOf(king.number)

    zoneLetter = []
    zoneNumber = []
    let yesLetter = undefined
    let yesNumber = undefined

    for ( i = 1 ; i < 2 ; i++){

        zoneLetter.push(letterArray[letterIndex + i],letterArray[letterIndex - i])
        zoneLetter.push(letterArray[letterIndex])
        zoneNumber.push(numberArray[numberIndex + i],numberArray[numberIndex - i])
        zoneNumber.push(numberArray[numberIndex])

    }

    squares.forEach(square => {

        yesLetter = false
        yesNumber = false


        zoneLetter.forEach(letter =>{
            if (letter === square.cord[0]){
                yesLetter = true


            }
        })
        zoneNumber.forEach(number =>{
            if (number === square.cord[1]){
                yesNumber = true


            }
        })

        if(yesLetter === true && yesNumber === true){
            zone.push(square.cord)

        }
    })
}
let openFiles = []

function updateOpenFiles (){

    openFiles = ["A","B","C","D","E","F","G","H"]
    pawnSquares = []

    squares.forEach(square => {
        if (square.class === "pawn"){
            pawnSquares.push(square.cord[0])
        }
    })

    pawnSquares.forEach(square =>{
        openFiles[openFiles.indexOf(square)] = []

    })


}

function autoMove (enginePiece){

    clear(enginePiece)
    currentPiece = enginePiece
    
    if (enginePiece.team === "white") {currentPieceWhite = currentPiece}
    else {currentPieceBlack = currentPiece}
    
    setPreviousPiece(enginePiece)
    
    switch (enginePiece.class){
    
        case "king" : movement = kingMovement; break
        case "queen" : movement = queenMovement; break
        case "bishop" : movement = bishopMovement; break
        case "knight" : movement = knightMovement; break
        case "rook" : movement = rookMovement; break
        case "pawn" : movement = enginePiece.team === "white" ? whitePawnMovement : blackPawnMovement; break
    
    }
    
    switch (enginePiece.class){
    
        case "king" : activateLegalKingMoves(enginePiece, movement); break
        case "queen" : activateLegalMovesExtension(enginePiece, movement); break
        case "bishop" : activateLegalMovesExtension(enginePiece, movement); break
        case "knight" : activateLegalKnightMoves(enginePiece, movement); break
        case "rook" : activateLegalMovesExtension(enginePiece, movement); break
        case "pawn" : activateLegalMovesPawn(enginePiece, movement); break
    
    }


}   
function engineCastle () {
    if (castleLegalityCheck(61,62) && playerTurn === "white"){

    castle = true

    whiteKingsideCastle()

} 
else if (castleLegalityCheck(5,6) && playerTurn === "black"){

    castle = true

    blackKingsideCastle()

} 
else if (castleLegalityCheck(58,59) && playerTurn === "white"){

    castle = true

    whiteQueensideCastle()

} 
else if (castleLegalityCheck(2,3) && playerTurn === "black"){

    castle = true

    blackQueensideCastle()

} else {castle === false}// && make random move

}
function firstMoves (){

    if ((
        (
        pieces[pieceIndex].class === "knight" || pieces[pieceIndex].class === "bishop" ||
        (pieces[pieceIndex].class === "pawn" && (pieces[pieceIndex].letter === "E" || pieces[pieceIndex].letter === "D" || pieces[pieceIndex].letter === "C") ||
        (pieces[pieceIndex].class === "king" && pieces[pieceIndex].check !== true) )
        
        ) && 
        
        pieces[pieceIndex].moved === false && pieces[pieceIndex].pinned === false


    
    ) === true) return true
}
function secondMoves (){

    if ((
        (
        pieces[pieceIndex].class === "knight" || pieces[pieceIndex].class === "bishop" || pieces[pieceIndex].class === "queen" ||
        (pieces[pieceIndex].class === "pawn" && (pieces[pieceIndex].letter !== "F" || pieces[pieceIndex].letter !== "G")) ||
        (pieces[pieceIndex].class === "king" && pieces[pieceIndex].check !== true)
        
        ) && 
        
        pieces[pieceIndex].pinned === false 
    
    ) === true) return true
}
function evaluateAttackPotential (){

    evaluation = []

    teamAttackPotential.forEach(attack => {
        evaluation.push([attack,0])
    })

for( i = 0 ; i < evaluation.length ; i++){


enenmyAttackPotential.forEach(attack => {
    if (attack === evaluation[i][0]){
        evaluation[i][1] -= 2

    }
})
teamAttackPotential.forEach(attack => {
    if (attack === evaluation[i][0]){
        evaluation[i][1] += 2

    }
})
squares.forEach(square => {
    if (square.cord === evaluation[i][0] && square.occupied === enenmy){
        evaluation[i][1] += 2

            if(square.value > evaluation[i][1]){
                evaluation[i][1] += 3
            } else if (square.value < evaluation[i][1]){
                evaluation[i][1] -= 2
            } else { 
                evaluation[i][1] += 1 
            }


    }
})}


for( i = 0 ; i < evaluation.length ; i++){

    evaluation.forEach(value => {

        if (evaluation[i][1] >= value[1]){

            highValueMove = evaluation[i][0]
        }
    })

}

}

///////////////////////

function makeRandomMoves(){

pieces = playerTurn === "white" ? whitePieces : blackPieces

pieceIndex = Math.floor((Math.random() * pieces.length))

do {
    pieceIndex = Math.floor((Math.random() * pieces.length))

    autoMove(pieces[pieceIndex])

} while (legalSquares.length === 0)

legalMoveIndex = Math.floor((Math.random() * legalSquares.length))

squares.forEach(square => {
    if (square.cord === legalSquares[legalMoveIndex]){
        square.engineMove(pieces[pieceIndex])
    }})
    
    turnCount++
    
    console.log("turnCount",turnCount,"maxValue",maxValue)
}
function openingsIncluded(){

    // console.log("////////////////////ENGINE/////////////////")

        ////////////////////////////////////////////////////////////////////////////////////////////// variables

pieces = playerTurn === "white" ? whitePieces : blackPieces
enenmy = playerTurn === "white" ? "black" : "white"
king = playerTurn === "white" ? whiteKing : blackKing
realm = playerTurn === "white" ? blackKingRealm : whiteKingRealm
zone = playerTurn === "white" ? blackKingZone : whiteKingZone

teamAttackPotential = playerTurn === "white" ? 
    currentWhiteAttackPotential : currentBlackAttackPotential
enenmyAttackPotential = playerTurn === "white" ? 
    currentBlackAttackPotential : currentWhiteAttackPotential

castle = false
opening = false
potentialEngineMoves = []
evaluation = []
maxValue = 0
bestMoves = []
currentPiece = undefined

    /////////////////////////////////////////////////////////////////////////////////////////////////// find piece / potential

    do {

        // stage = turnCount < 16 ? 7 : pieces.length
    
        // pieceIndex = Math.floor((Math.random() * stage))
    
        // if (turnCount < 10 && firstMoves()) 
        // {(autoMove(pieces[pieceIndex])), opening = true}
        // else if (turnCount < 16 && firstMoves()) 
        // {(autoMove(pieces[pieceIndex])), opening = true}
        // else if (turnCount > 16 && secondMoves()) 
        // {(autoMove(pieces[pieceIndex])), opening = true}
        // else 
        {enginePotential()}
        // console.log("doLoop")
    
    } while (legalSquares.length === 0)
    
        evaluation = []

    if (opening === true && legalSquares != "exitEngineLoop"){ 
    
        legalSquares.forEach(square => { // opening piece
            evaluation.push([square,pieces[pieceIndex],0]) // possibleCord, piece, moveValue
        })
    
    } else {

        potentialEngineMoves.forEach(move => { // all pieces
    

            evaluation.push(move)
        })
    
    }
    
    /////////////////////////////////////////////////////////////////////////////////////////////////// evaluate


for( i = 0 ; i < evaluation.length ; i++){

enenmyAttackPotential.forEach(attack => { //dont move into attack
    if (attack === evaluation[i][0]){
        evaluation[i][2] -= 60
    }
})
enenmyAttackPotential.forEach(attack => { // move out of attack
    if (attack === evaluation[i][1].cord){
        evaluation[i][2] += 110
    }
})
teamAttackPotential.forEach(attack => { // move into defened squares
    if (attack === evaluation[i][0]){
        evaluation[i][2] += 20
    }
})
squares.forEach(square => {// capture enenmies for good exchanges
    if (square.cord === evaluation[i][0] && square.occupied === enenmy){
        evaluation[i][2] += 120 

            if(square.value > evaluation[i][1].value){
                evaluation[i][2] += (60 + (square.value * 20))
            }
            else if(square.value === evaluation[i][1].value){
                evaluation[i][2] += 80
            }
            else if(square.value < evaluation[i][1].value){
                evaluation[i][2] -= (square.value * 10)
            }
    }

})

if ((evaluation[i][0] === "C5" || evaluation[i][0] === "D5" || evaluation[i][0] === "E5" || evaluation[i][0] === "F5" ||
    evaluation[i][0] === "C4" || evaluation[i][0] === "D4" || evaluation[i][0] === "E4" || evaluation[i][0] === "F4") 
    && turnCount > 25){
        evaluation[i][2] +=60
    } //take center

    openFiles.forEach(file => { // rooks in open files
        if (evaluation[i][0][0] === file && evaluation[i][1].class === "rook" && evaluation[i][1].cord[0] !== file){
            evaluation[i][2] += 150
        }
    })

    if(evaluation[i][0][1] >= 6 && evaluation[i][1].class === "pawn" && evaluation[i][1].team === "white"){evaluation[i][2] += 40}
    if(evaluation[i][0][1] <= 3 && evaluation[i][1].class === "pawn" && evaluation[i][1].team === "black"){evaluation[i][2] += 40}
    // push pawns

realm.forEach(square => { // attack king realm
    if(square === evaluation[i][0]){
        evaluation[i][2] +=60
    }
})


zone.forEach(square => { // attack king zone
    if(square === evaluation[i][0]){
        evaluation[i][2] +=80
    }
})


if (turnCount < 20 && (evaluation[i][1].class === "rook" || evaluation[i][1].class === "king" )) {evaluation[i][2] -=150}
if ((evaluation[i][1].turnCount - turnCount) < 3){evaluation[i][2] -=100} //dont move twice

}




//    [0 possibleCord, 1 piece , 2 moveValue]


    /////////////////////////////////////////////////////////////////////////////////////////////////// find bext value moves


    evaluation.forEach(value => { // find max value
        if( value[2] > maxValue ){
            maxValue = value[2]
        }
    })

    evaluation.forEach(value => {

        if (value[2] === maxValue){  // push high value move onto array
            bestMoves.push([value[0],value[1]])}
    })



bestMovesIndex = Math.floor((Math.random() * bestMoves.length)) //select a high value move


    /////////////////////////////////////////////////////////////////////////////////////////////////// castle

engineCastle()

    //////////////////////////////////////////////////////////////////////////////////// random move incase no best moves


if (bestMoves.length === 0 ){ // random move incase no best moves

    do {
        pieceIndex = Math.floor((Math.random() * pieces.length))
    
        autoMove(pieces[pieceIndex])
    
    } while (legalSquares.length === 0)
    
    legalMoveIndex = Math.floor((Math.random() * legalSquares.length))

    bestMovesIndex = 0
    bestMoves.push([legalSquares[legalMoveIndex],pieces[pieceIndex]])

} 

    /////////////////////////////////////////////////////////////////////////////////////////////////// set selected piece to current team piece


        currentPiece = bestMoves[bestMovesIndex][1]
        if(playerTurn === "white"){currentPieceWhite = currentPiece}
        else {currentPieceBlack = currentPiece}


 

// console.log("futureWhiteAttack:",futureWhiteAttackPotential,"futureBlackAttack:",futureBlackAttackPotential,)
// console.log("legalSquares:",legalSquares,"potentialMoves:",potentialMoves,"evaluation:",evaluation,"bestMoves:",bestMoves,"maxvalue",maxValue)
// console.log("currentPiece",currentPiece,"bestCord:",bestMoves[bestMovesIndex][0],"turnCount",turnCount)

    /////////////////////////////////////////////////////////////////////////////////////////////////// move select to high value sqaure

if (castle === false){

        squares.forEach(square => {
    if (square.cord === bestMoves[bestMovesIndex][0]){
        square.engineMove(currentPiece)
    }})



}

    ///////////////////////////////////////////////////////////////////////////////////////////////////

turnCount++

} 
function makeIntelligentMoves(){

    // console.log("////////////////////ENGINE/////////////////")

        ////////////////////////////////////////////////////////////////////////////////////////////// variables

pieces = playerTurn === "white" ? whitePieces : blackPieces
enenmy = playerTurn === "white" ? "black" : "white"
king = playerTurn === "white" ? whiteKing : blackKing
realm = playerTurn === "white" ? blackKingRealm : whiteKingRealm
zone = playerTurn === "white" ? blackKingZone : whiteKingZone

teamAttackPotential = playerTurn === "white" ? 
    currentWhiteAttackPotential : currentBlackAttackPotential
enenmyAttackPotential = playerTurn === "white" ? 
    currentBlackAttackPotential : currentWhiteAttackPotential

castle = false
opening = false
potentialEngineMoves = []
evaluation = []
maxValue = 0
bestMoves = []
currentPiece = undefined

    /////////////////////////////////////////////////////////////////////////////////////////////////// find piece / potential

        enginePotential()

        potentialEngineMoves.forEach(move => { // all pieces
    
            evaluation.push(move)
        })
    
    /////////////////////////////////////////////////////////////////////////////////////////////////// evaluate


for( i = 0 ; i < evaluation.length ; i++){

enenmyAttackPotential.forEach(attack => { //dont move into attack
    if (attack === evaluation[i][0]){
        evaluation[i][2] -= 100
    }
})
enenmyAttackPotential.forEach(attack => { // move out of attack
    if (attack === evaluation[i][1].cord){
        evaluation[i][2] += 110
    }
})
teamAttackPotential.forEach(attack => { // move into defened squares
    if (attack === evaluation[i][0]){
        evaluation[i][2] += 20
    }
})
squares.forEach(square => {// capture enenmies for good exchanges
    if (square.cord === evaluation[i][0] && square.occupied === enenmy){
        evaluation[i][2] += 120 

            if(square.value > evaluation[i][1].value){
                evaluation[i][2] += (60 + (square.value * 20))
            }
            else if(square.value === evaluation[i][1].value){
                evaluation[i][2] += 80
            }
            else if(square.value < evaluation[i][1].value){
                evaluation[i][2] -= (square.value * 10)
            }
    }

})

if ((evaluation[i][0] === "D5" || evaluation[i][0] === "E5" ||
    evaluation[i][0] === "D4" || evaluation[i][0] === "E4") 
    && turnCount < 10){
        evaluation[i][2] += 30
    } //take center opening


if ((evaluation[i][0] === "C5" || evaluation[i][0] === "D5" || evaluation[i][0] === "E5" || evaluation[i][0] === "F5" ||
    evaluation[i][0] === "C4" || evaluation[i][0] === "D4" || evaluation[i][0] === "E4" || evaluation[i][0] === "F4") 
    && turnCount < 30){
        evaluation[i][2] +=30
    } //control center mid game

if ((evaluation[i][0] === "C5" || evaluation[i][0] === "D5" || evaluation[i][0] === "E5" || evaluation[i][0] === "F5" ||
    evaluation[i][0] === "C4" || evaluation[i][0] === "D4" || evaluation[i][0] === "E4" || evaluation[i][0] === "F4") 
    && turnCount < 40){
        evaluation[i][2] +=30
    } //take center mid game

    openFiles.forEach(file => { // rooks in open files
        if (evaluation[i][0][0] === file && evaluation[i][1].class === "rook" && evaluation[i][1].cord[0] !== file){
            evaluation[i][2] += 100
        }
    })

    if(evaluation[i][0][1] >= 6 && evaluation[i][1].class === "pawn" && evaluation[i][1].team === "white"){evaluation[i][2] += 100}
    if(evaluation[i][0][1] <= 3 && evaluation[i][1].class === "pawn" && evaluation[i][1].team === "black"){evaluation[i][2] += 100}
    // push pawns

realm.forEach(square => { // attack king realm
    if(square === evaluation[i][0]){
        evaluation[i][2] +=90
    }
})


zone.forEach(square => { // attack king zone
    if(square === evaluation[i][0]){
        evaluation[i][2] +=120
    }

    teamAttackPotential.forEach(attack => { // move into defened squares for check mate potential
        if (attack === square){
            evaluation[i][2] += 500
        }})
})


if (turnCount < 20 && (evaluation[i][1].class === "rook" || evaluation[i][1].class === "king" )) {evaluation[i][2] -=150}
if (turnCount < 40 && evaluation[i][1].class === "king" ) {evaluation[i][2] -=150}
if ((evaluation[i][1].turnCount - turnCount) < 3){evaluation[i][2] -=100} //dont move twice

}




//    [0 possibleCord, 1 piece , 2 moveValue]


    /////////////////////////////////////////////////////////////////////////////////////////////////// find bext value moves


    evaluation.forEach(value => { // find max value
        if( value[2] > maxValue ){
            maxValue = value[2]
        }
    })

    evaluation.forEach(value => {

        if (value[2] === maxValue){  // push high value move onto array
            bestMoves.push([value[0],value[1]])}
    })



bestMovesIndex = Math.floor((Math.random() * bestMoves.length)) //select a high value move


    /////////////////////////////////////////////////////////////////////////////////////////////////// castle
if (maxValue < 100){

engineCastle()

}


    //////////////////////////////////////////////////////////////////////////////////// random move incase no best moves


if (bestMoves.length === 0 ){ // random move incase no best moves

    do {
        pieceIndex = Math.floor((Math.random() * pieces.length))
    
        autoMove(pieces[pieceIndex])
    
    } while (legalSquares.length === 0)
    
    legalMoveIndex = Math.floor((Math.random() * legalSquares.length))

    bestMovesIndex = 0
    bestMoves.push([legalSquares[legalMoveIndex],pieces[pieceIndex]])

} 

    /////////////////////////////////////////////////////////////////////////////////////////////////// set selected piece to current team piece


        currentPiece = bestMoves[bestMovesIndex][1]
        if(playerTurn === "white"){currentPieceWhite = currentPiece}
        else {currentPieceBlack = currentPiece}


 

//  console.log("futureWhiteAttack:",futureWhiteAttackPotential,"futureBlackAttack:",futureBlackAttackPotential,)
//  console.log("legalSquares:",legalSquares,"potentialMoves:",potentialMoves,"evaluation:",evaluation,"bestMoves:",bestMoves,"maxvalue",maxValue)
//  console.log("currentPiece",currentPiece,"bestCord:",bestMoves[bestMovesIndex][0],"turnCount",turnCount)

    /////////////////////////////////////////////////////////////////////////////////////////////////// move select to high value sqaure

if (castle === false){

        squares.forEach(square => {
    if (square.cord === bestMoves[bestMovesIndex][0]){
        square.engineMove(currentPiece)
    }})



}

    ///////////////////////////////////////////////////////////////////////////////////////////////////

turnCount++

console.log("turnCount",turnCount,"maxValue",maxValue)

} 
