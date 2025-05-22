

const home = () =>{
const bananaImage = "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

const content = document.getElementById("content")
const homeHeader = document.createElement("h2");




homeHeader.textContent = 'The Banana Stand';
const homeSubHeader = document.createElement("p");
homeSubHeader.textContent = 'What can a banana cost? $10??'
const headerImage = document.createElement("img");
headerImage.src = bananaImage;
headerImage.setAttribute("style", "width: 400px;")
const headerDiv = document.createElement('div')
headerDiv.setAttribute("class", "header-div")
const promoText = document.createElement("div")
promoText.setAttribute("id", "promo-text")

promoText.innerHTML = "<h3>Slip over anytime</h3><h4>Split when you're ready</h4><p><em>Check out our menu (above) for a sensational selection of tasty treats<em></p>"
const contactDetails = document.createElement("div");
contactDetails.setAttribute("id","contact-details")
contactDetails.innerHTML = "<p><em>Dietary requirments? Questions? Need answers?</em></p><p><span><strong>Phone: </strong></span>(00) 111 222 33 44</p><p><span><strong>email: </strong></span><href = 'mailto:fake@emailaddress.ooops'>info@thebananastand</p>"


content.appendChild(headerDiv)
headerDiv.appendChild(homeHeader);
headerDiv.appendChild(homeSubHeader);
headerDiv.appendChild(headerImage);
headerDiv.appendChild(promoText);
headerDiv.appendChild(contactDetails);


return headerDiv;

}
home()
export {home}




