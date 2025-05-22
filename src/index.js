import  "./styles.css"
import { home } from "./home.js"  
import { menu } from "./menu.js"


const buttons = document.querySelectorAll("button")
const content = document.getElementById("content")
const homeButton = buttons[0];
const menuButton = buttons[1];
const aboutButton = buttons[2];
console.log(buttons[2])

homeButton.addEventListener("click", () =>{
    content.innerHTML = '';
    content.appendChild(home())
})

menuButton.addEventListener("click", () =>{
    content.innerHTML = '';
    content.appendChild(menu());
})
console.log("It's all up and running");