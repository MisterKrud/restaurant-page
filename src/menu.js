
const menu = () =>{
const bananaImage = "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

const content = document.getElementById("content")
const homeHeader = document.createElement("h2");




homeHeader.textContent = 'The Banana Stand';
const menuHeader = document.createElement("h3");
menuHeader.textContent = 'Our Menu'
const headerImage = document.createElement("img");
headerImage.src = bananaImage;
headerImage.setAttribute("style", "width: 300px;")
const headerDiv = document.createElement('div')
headerDiv.setAttribute("class", "header-div")

const entreeDiv = document.createElement("div")
entreeDiv.setAttribute("class","menu")
const mainsDiv = document.createElement("div");
mainsDiv.setAttribute("class", "menu");
const dessertsDiv = document.createElement("div")
dessertsDiv.setAttribute("class","menu")


content.appendChild(headerDiv)
headerDiv.appendChild(homeHeader);
headerDiv.appendChild(headerImage);
headerDiv.appendChild(menuHeader);
headerDiv.appendChild(entreeDiv);
headerDiv.appendChild(mainsDiv);
headerDiv.appendChild(dessertsDiv);




return headerDiv;

}

export { menu }

