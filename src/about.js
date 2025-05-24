const about = () => {

const bananaImage = "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

const content = document.getElementById("content")
const homeHeader = document.createElement("h2");
const buttons = document.querySelectorAll("button")
buttons[2].setAttribute("class","active");
buttons[1].classList.remove("active")
buttons[0].classList.remove("active")



homeHeader.textContent = 'The Banana Stand';








































return content;



}

export { about }