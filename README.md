<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess
    </title> 
    <link rel="stylesheet" href="chess.css">
    <script src="chess.js" defer></script>
</head>
<body>

<div class="siteView"><p><b>Welcome to my self playing chess app with an intelligent engine!</b> </p></div>
<p style="margin-left: 10px"> My name is Kevin and I'm a self taught coder. What you see below is the very first personal project I ever attempted!
    It is written with 4000 line of vanilla javascript, minimal html and css.

The point of creating this chess app was not to create yet another chess app, the point was to learn how to code. 
And now that I have proven my aptitude to myself, I am ready to solve more relavent problems with more suitable languages

 My next personal goal it to master python because it is more useful for all things beyond wed development: Iot, ML, cyber-security, data-analytics, and more.</p>


<div class="siteView">
<div id="board">
        <div class="square"id="A8">8</div>
        <div class="square"id="B8">b</div>
        <div class="square"id="C8">c</div>
        <div class="square"id="D8">d</div>
        <div class="square"id="E8">e</div>
        <div class="square"id="F8">f</div>
        <div class="square"id="G8">g</div>
        <div class="square"id="H8">h</div>
        <div class="square"id="A7">7</div>
        <div class="square"id="B7"></div>
        <div class="square"id="C7"></div>
        <div class="square"id="D7"></div>
        <div class="square"id="E7"></div>
        <div class="square"id="F7"></div>
        <div class="square"id="G7"></div>
        <div class="square"id="H7"></div>
        <div class="square"id="A6">6</div>
        <div class="square"id="B6"></div>
        <div class="square"id="C6"></div>
        <div class="square"id="D6"></div>
        <div class="square"id="E6"></div>
        <div class="square"id="F6"></div>
        <div class="square"id="G6"></div>
        <div class="square"id="H6"></div>
        <div class="square"id="A5">5</div>
        <div class="square"id="B5"></div>
        <div class="square"id="C5"></div>
        <div class="square"id="D5"></div>
        <div class="square"id="E5"></div>
        <div class="square"id="F5"></div>
        <div class="square"id="G5"></div>
        <div class="square"id="H5"></div>
        <div class="square"id="A4">4</div>
        <div class="square"id="B4"></div>
        <div class="square"id="C4"></div>
        <div class="square"id="D4"></div>
        <div class="square"id="E4"></div>
        <div class="square"id="F4"></div>
        <div class="square"id="G4"></div>
        <div class="square"id="H4"></div>
        <div class="square"id="A3">3</div>
        <div class="square"id="B3"></div>
        <div class="square"id="C3"></div>
        <div class="square"id="D3"></div>
        <div class="square"id="E3"></div>
        <div class="square"id="F3"></div>
        <div class="square"id="G3"></div>
        <div class="square"id="H3"></div>
        <div class="square"id="A2">2</div>
        <div class="square"id="B2"></div>
        <div class="square"id="C2"></div>
        <div class="square"id="D2"></div>
        <div class="square"id="E2"></div>
        <div class="square"id="F2"></div>
        <div class="square"id="G2"></div>
        <div class="square"id="H2"></div>
        <div class="square"id="A1">1</div>
        <div class="square"id="B1"></div>
        <div class="square"id="C1"></div>
        <div class="square"id="D1"></div>
        <div class="square"id="E1"></div>
        <div class="square"id="F1"></div>
        <div class="square"id="G1"></div>
        <div class="square"id="H1"></div>


        <button id="takeBack">Take Back Move</button>
        <div id="turnBox">It's white's turn!</div>
        <button id="changeTurn" style="font-size: 11px;">Change Turn</button>
        <div id="checkBox"></div>
        <div></div>
        <button id="watchEngine">Watch Engine</button>
        <button id="playEngine">Play Engine</button>
        <button id="playHuman">Play Human</button>
   



    </div>

    </div>

    <div id="runDown">
        <div>
            <p>Things I am proud of:</p>
            <li>The are no hard coded moves, all the moves are made based on evaluations on the current position.</li>
            <li>The engine is intelligent, but not super intelligent, so you can beat it and it's fun to play!</li>
            <li>The engine uses the same data that the game play uses to determine which moves are legal.</li>
            <li>It is my first project ever and my productivity skyrocketed over the 3 months and 200 hours.</li>
            <li>Initially the most basic tasks took hours, and by the end of the project, I would have plans about what I need to accomplish, and I would have one or two possible strategies in mind on how I would solve the problems of the day.</li>
            <li>I enjoyed making progress</li>
        </div>
        <div>
            <p>Things I learned:</p>
            <li>It is better to have all the required data update at the turn change rather than to have portions of the data update when trigger by client events.</li>
            <li>It is better to separate larger functions into different, slightly tweeked functions, rather than try to active certain portions of the function and ignore others.</li>
            <li>Reusing a function that has loops while the functions is still runnning can cause mistakes in the interation count</li>
            <li><b>In the source code you can see how I improved as a programmer over the course of this project. I made the board and pieces first, then I moved onto the unrestricted moved of the pieces. Then I added constraints around legality of moves. Then I added special moves life EnPassent and castling. </b><i>EnPassent has a LOT of parameters. The pawns themselves have the most interacte rules for such plain pieces.</i> 
                <b>Then I started to work on rules around checking the king, which required updated assessment potential board configurations. Then, with that information I was able to use it and evaluate potential moves. Thus giving the board a brain.</b> </li>
        </div>
        <div>
            <p>Things I would improve if I chose to put in more time:</p>
            <li>Use the future position evaluation currently used to check if a move block an attack on the king to evaluate if a future poistion results in check mate, to give the engine a hunting instinct.</li>
            <li>Use future position evaluation to plan combination moves.</li>
            <li>Create a memory for played games that can be used as reference for formations that usually lead victory.</li>
            <li>The are some bugs about pieces sometimes not being able to move to legal squares even though they are highlighted as legal</li>
            <li>The game logic probably still produces more information that is required for the engine and for the legality data, pruning it further would make things run faster and smoother with fewer bugs I am sure.</li>
        </div>
    </div>

    <a href="chessCode.html" style="margin-left: 42vw;">sourceCode</a>

</body>
</html>

