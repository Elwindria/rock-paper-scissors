/* all const */

const aside = document.querySelector("aside");
const rules = document.querySelector(".rules-btn");
const btn_close_rules = document.querySelector(".close-rules");
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const section = document.querySelector(".extra");

console.log(body);

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