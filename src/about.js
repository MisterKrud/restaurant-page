const about = () => {

const bananaImage = "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

const content = document.getElementById("content")
const homeHeader = document.createElement("h2");
const buttons = document.querySelectorAll("button")
buttons[2].setAttribute("class","active");
buttons[1].classList.remove("active")
buttons[0].classList.remove("active")

const headline = document.createElement("div")
headline.innerHTML = "<h3>Our Story</h3>"

const storyTextDiv = document.createElement("div")
storyTextDiv.setAttribute("class", "ourstory")

const storyText = document.createElement("p");
storyText.setAttribute("id","story-text")

storyText.innerHTML = "From humble beginnings, the banana-stand stood as a testament to hard-work, dedication and ingenuity. Today, we are proud to serve the finest banana-based culinary delights money can buy. Whether you want to stop in for a sweet snack, or treat the whole gang to a full lunch, we've got you covered. <span><strong><em>'It's not just delcious, it's healthy!</em></strong></span>"

homeHeader.textContent = 'The Banana Stand';

class Quote {
    constructor(quote, name, city){
        this.quote = quote;
        this.name = name;
        this.city = city;
    }
}

const quotes = [
  new Quote('“I came for the pancakes, but stayed for the banana lasagne. Who knew?!”', 'Chloe R.', 'Melbourne'),
  new Quote('“Every bite is a-peeling. Five stars isn’t enough!”', 'Dylan K.', 'Sydney'),
  new Quote('“Their bircher muesli made me cry a little. Tears of joy. And cinnamon.”', 'Ava T.', 'Brisbane'),
  new Quote('“The Elvis Sandwich changed my life. I quit my job and started a band.”', 'Jordan M.', 'Perth'),
  new Quote('“They told me not to knock the banana pizza. I didn’t listen. I regret everything... except the second slice.”', 'Ravi S.', 'Hobart'),
  new Quote('“From banana bread to tikka masala—with banana?!—every dish is bizarrely brilliant.”', 'Sienna L.', 'Newcastle'),
  new Quote('“If potassium were a love language, this place would be poetry.”', 'Leo F.', 'Adelaide'),
  new Quote('“I wasn’t sure what to expect, but now I’m writing this from my new favourite spot. I’m never leaving.”', 'Harper W.', 'Darwin'),
  new Quote('“The upside-down cake turned my day right-side up. Highly recommend!”', 'Imogen C.', 'Canberra'),
  new Quote('“I told my grandma about the banana tikka masala. She laughed. Then she tried it. Now she runs their fan club.”', 'Ethan B.', 'Gold Coast')
];


const quoteRandomiser = () => {
    let n = Math.random()
}

content.appendChild(homeHeader);
content.appendChild(headline);
content.appendChild(storyTextDiv);
storyTextDiv.appendChild(storyText)









































return homeHeader;



}

export { about }