
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

class MenuItem {
    constructor(name, info, category, price){
        this.name = name;
        this.category = category;
        this.info = info;
        this.price = price;
        // this.picture = picture;
        MenuItem.pushToMenu.this;
    }

    static menu = []

  static  pushToMenu(){
    MenuItem.menu.push(item);
    }


};


const elvisSandwich = new MenuItem("Elvis Sandwich", "Bacon, banana & peanut butter on white bread", "Lunch", 18)
const crispyFritters = new MenuItem("Crispy banana fritters", "Indonesian style banana fritters cooked in sesame batter", "Dessert",  "Lunch", 22)
const  upsideDownCake = new MenuItem("Upside-down banana cake", "With maple-caramel sauce", "Dessert", 18);
const iceCream = new MenuItem("Banana Ice Cream", "Ice cream made with ripe bananas and milk, chocolate and tahini", "Dessert", 20)
const bananaBread = new MenuItem("Banana Bread", "Toasted with butter", "Breakfast", 12)
const bircherMuesli = new MenuItem("Bircher Muesli", "Made overnight with Apple and Banana", "Breakfast", 16)
const pizza = new MenuItem("Banana Pizza", "Don't knock it until you've tried it", "Lunch", 22)
const pancakes = new MenuItem("Pancakes", "Sweet, fuffy, American style banana pancakes", "Dessert",15);
const porridge = new MenuItem("Banana cinnamon porridge", "With yoghurt, fruit and yur choice of sweetener", "Breakfast", 18);
const tikkaMasala = new MenuItem("Chicken tikka masala", "The well-loved crowd pleaser with a banana twist", "Lunch", 24)
const lasagne = new MenuItem("Banana Lasagne", "Traditional Italian lasagne made on durham what and banana","Lunch", 24);
const cereal = new MenuItem("Cereal", "Your choice of breakfast cereal, topped with delicious banana slices","Breakfast", 12)

menu = [bananaBread, bircherMuesli, porridge,  elvisSandwich, crispyFritters, pizza, tikkaMasala, lasagne, upsideDownCake, iceCream, cereal, pancakes];

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

