const aside = document.querySelector("aside");
const rules = document.querySelector(".rules-btn");
const btn_close_rules = document.querySelector(".close-rules");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const section = document.querySelector(".extra");

let x = 0;

if (localStorage.getItem('storage') != null ){
    x = localStorage.getItem('storage');
    score.innerHTML = x;
}

/* rules */ 

rules.onclick = function() { /*affichage */
    aside.style.zIndex = "1";
    header.style.opacity = "60%";
    main.style.opacity = "60%";
    section.style.opacity = "60%";
    aside.style.opacity = "unset";
}

btn_close_rules.onclick = function() { /*fermeture */
    aside.style.zIndex = "-1";
    header.style.opacity = "100%";
    main.style.opacity = "100%";
    section.style.opacity = "100%";
    aside.style.opacity = "0";
}

/* rules */ 
/* game */

const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
var step_1 = document.querySelector(".step-1");
var step_2 = document.querySelector(".step-2");
const annouce_winner = document.querySelector(".annouce-winner");
const play_again = document.querySelector(".play-again-btn");

const player_pick = document.querySelector(".player-pick");
const img_player_pick = player_pick.children[1];
const computer_pick = document.querySelector(".computer-pick");
const img_computer_pick = computer_pick.children[1];

var img = document.createElement("img");
var div = document.createElement("div");

paper.onclick = function() {gamestart("paper");}
scissors.onclick = function() {gamestart("scissors");}
rock.onclick = function() {gamestart("rock");}

function gamestart (signe) {
    step_1.classList.add("step-1-minimize");
    step_2.classList.add("step-2-minimizer");
    annouce_winner.style.visibility = ("collapse");
    img_player_pick.classList.remove("replace");

    img.src = "icon-"+signe+".svg"; /* caractéristique de l'image */
    img.alt = "option";
    div.classList.add("option");
    div.appendChild(img);

    img_player_pick.classList.add(signe); /* création de l'image */
    img_player_pick.appendChild(div);

    computer(signe);
}

function computer (signe_player) {
    var array = [ "paper", "scissors", "rock" ];
    var nbr_rdm = Math.floor( Math.random() * 3 );
    var signe_computer = array[nbr_rdm];
    
    img_computer_pick.classList.remove("replace");
    var img_computer = document.createElement("img");
    var div_computer = document.createElement("div");

    img_computer.src = "icon-"+signe_computer+".svg"; /* caractéristique de l'image */
    img_computer.alt = "option";
    div_computer.classList.add("option");
    div_computer.appendChild(img_computer);

    img_computer_pick.classList.add(signe_computer); /* création de l'image */
    img_computer_pick.appendChild(div_computer);

    whoWin(signe_player, signe_computer);
}

function whoWin (signe_player, signe_computer) {
    const annouce_winner_text = document.querySelector(".annouce-winner-text");

    annouce_winner.style.visibility = ("visible"); /*Apparition du WhoWin */

    if ( signe_player == signe_computer ){
        annouce_winner_text.innerHTML = "Try Again";
    } else if ( signe_player == "rock" && signe_computer == "paper") {
        annouce_winner_text.innerHTML = "You Lose";
        x--
    } else if ( signe_player == "scissors" && signe_computer == "rock") {
        annouce_winner_text.innerHTML = "You Lose";
        x--
    } else if ( signe_player == "paper" && signe_computer == "scissors") {
        annouce_winner_text.innerHTML = "You Lose";
        x--
    } else {
        annouce_winner_text.innerHTML = "You Win";
        x++
    }

    const score = document.getElementById("score"); /*calcul du score */

    localStorage.setItem("storage", x);

    score.innerHTML = x; /*affichage du score */
}

play_again.onclick = function () { /*reset */
    step_1.classList.remove("step-1-minimize");
    step_2.classList.remove("step-2-minimizer");

    img_player_pick.children[0].remove(); /* Delete des images */
    img_computer_pick.children[0].remove();

    img_player_pick.classList.remove("paper", "scissors", "rock");
    img_computer_pick.classList.remove("paper", "scissors", "rock");
}
/* game */