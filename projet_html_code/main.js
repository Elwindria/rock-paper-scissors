/* all const */

const aside = document.querySelector("aside");
const rules = document.querySelector(".rules-btn");
const btn_close_rules = document.querySelector(".close-rules");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const section = document.querySelector(".extra");

/* rules */ 

rules.onclick = function() {
    aside.style.zIndex = "1";
    header.style.opacity = "60%";
    main.style.opacity = "60%";
    section.style.opacity = "60%";
    aside.style.opacity = "unset";
}

btn_close_rules.onclick = function() {
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
const all_option_container = document.querySelectorAll(".option-container");
var step_1 = document.querySelector(".step-1");
var step_2 = document.querySelector(".step-2");
const annouce_winner = document.querySelector(".annouce-winner");

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

    computer();
}

function computer () {
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
}

/* game */