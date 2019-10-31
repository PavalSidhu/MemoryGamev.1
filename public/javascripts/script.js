let board = document.getElementsByClassName("cell");
let div = document.getElementsByClassName("container");
let sound;

window.addEventListener('load', () => {
    sound = new Audio("/audio/game.mp3");
});

let score = 0;
let tiles = 3;
let trial = 1;
let numChosen = [];
let countRight = 0;
let difficulty = true;

function preview() {
    let tileChosen = 0;

    for (i = 0; i < tiles; i++) {
        tileChosen = Math.floor((Math.random() * board.length));
        while (numChosen.includes(tileChosen)) {
            tileChosen = Math.floor((Math.random() * board.length));
        }
        numChosen.push(tileChosen);
        board[tileChosen].classList.add('turquoise');
        board[tileChosen].classList.add('cellR')
    }
    setTimeout(rotate, 3000, div[0]);
    setTimeout(select, 3001);

}

function select() {
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', boxclick);
    }
}


function boxclick() {
    if (this.classList.contains("cellR")) {
        countRight++;
        if (countRight == tiles) {
            countRight++;
            this.classList.add("green");
            score++;
            document.getElementsByClassName("Score")[0].innerHTML = "Score: " + score;
            trial++;
            document.getElementsByClassName("Trial")[0].innerHTML = "Trial: " + trial;
            if(difficulty == true) {
                tiles++;
                document.getElementsByClassName("Tiles")[0].innerHTML = "Tiles: " + tiles; 
            } else {
                tiles--;
                document.getElementsByClassName("Tiles")[0].innerHTML = "Tiles: " + tiles;
            }
            sound.play();
            setTimeout(reset, 1000)
        } else {
            this.classList.add("right");
            score++;
            document.getElementsByClassName("Score")[0].innerHTML = "Score: " + score;
        }
    } else {
        if (score <= 1) {
            score--;
            this.classList.add('orange');
            document.getElementsByClassName("Score")[0].innerHTML = "Score: " + score;
            terminate("terminate");
        } else if (score > 1) {
            score--;
            this.classList.add('wrong');
            document.getElementsByClassName("Score")[0].innerHTML = "Score: " + score;
            difficulty = false;
        }
    }
}

function rotate(a) {
    if (a.style.transform == "rotate(90deg)") {
        a.style.transform = "rotate(0deg)"
    } else {
        a.style.transform = "rotate(90deg)";
    }
}

function resetTermination() {
    window.location.href = '/';
    preview();
}

function reset() {
    for (let i = 0; i < board.length; i++) {
        board[i].classList.remove('turquoise');
        board[i].classList.remove('wrong');
        board[i].classList.remove('right');
        board[i].classList.remove('orange');
        board[i].classList.remove('green');
        board[i].classList.remove('cellR')
        board[i].removeEventListener('click', boxclick);
    }
    numChosen = [];
    countRight = 0;
    difficulty = true;
    preview();
}

function terminate(s) {
    localStorage.setItem("score", score);

    if(s == '') {
        let end = confirm("Are you sure you want to terminate?");
        if (end == true) {
            window.location.href = "/summary"
        }
    } else {
        window.location.href = "/summary"
    }

}

// function leaderboard(s) {
    
//     if(s == '') {
//         window.location.href = "/leaderboard"
//     }

// }