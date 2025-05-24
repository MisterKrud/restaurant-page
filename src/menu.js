
const menu = () =>{
const bananaImage = "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

const content = document.getElementById("content")
const homeHeader = document.createElement("h2");
const buttons = document.querySelectorAll("button")
buttons[1].setAttribute("class","active");
buttons[2].classList.remove("active")
buttons[0].classList.remove("active")

homeHeader.textContent = 'The Banana Stand';
const menuHeader = document.createElement("h3");
menuHeader.textContent = 'Our Menu'
const headerImage = document.createElement("img");
headerImage.src = bananaImage;
headerImage.setAttribute("style", "width: 300px;")
const headerDiv = document.createElement('div')
headerDiv.setAttribute("class", "header-div")

const breakfastDiv = document.createElement("div")
breakfastDiv.setAttribute("class","menu")
const lunchDiv = document.createElement("div");
lunchDiv.setAttribute("class", "menu");
const dessertsDiv = document.createElement("div")
dessertsDiv.setAttribute("class","menu")

content.appendChild(headerDiv)
headerDiv.appendChild(homeHeader);
headerDiv.appendChild(headerImage);
headerDiv.appendChild(menuHeader);
headerDiv.appendChild(breakfastDiv);
headerDiv.appendChild(lunchDiv);
headerDiv.appendChild(dessertsDiv);


class MenuItem {
    constructor(name, info, category, price){
        this.name = name;
        this.category = category;
        this.info = info;
        this.price = price;
        // this.picture = picture;
        MenuItem.pushToMenu.this;
    }

    static menuItems = []

  static  pushToMenu(){
    MenuItem.menuItems.push(item);
    }


};


const menuItems = [
    new MenuItem("Elvis Sandwich", "Bacon, banana & peanut butter on white bread", "Lunch", 18),
    new MenuItem("Crispy banana fritters", "Indonesian style banana fritters cooked in sesame batter", "Dessert",  "Lunch", 22),
    new MenuItem("Upside-down banana cake", "With maple-caramel sauce", "Dessert", 18),
    new MenuItem("Banana Ice Cream", "Ice cream made with ripe bananas and milk, chocolate and tahini", "Dessert", 20),
    new MenuItem("Banana Bread", "Toasted with butter", "Breakfast", 12),
    new MenuItem("Bircher Muesli", "Made overnight with Apple and Banana", "Breakfast", 16),
    new MenuItem("Banana Pizza", "Don't knock it until you've tried it!", "Lunch", 22),
    new MenuItem("Pancakes", "Sweet, fuffy, American style banana pancakes", "Dessert",15),
    new MenuItem("Banana cinnamon porridge", "With yoghurt, fruit and yur choice of sweetener", "Breakfast", 18),
    new MenuItem("Chicken tikka masala", "The well-loved crowd pleaser with a banana twist", "Lunch", 24),
    new MenuItem("Banana Lasagne", "Traditional Italian lasagne made on durham wheat and banana","Lunch", 24),
    new MenuItem("Cereal", "Your choice of breakfast cereal, topped with delicious banana slices","Breakfast", 12)
]

menuItems.forEach((item) => {
  const itemCard =   document.createElement("div");
  itemCard.setAttribute("class", "item-card");
  dessertsDiv.appendChild(itemCard)
    const itemName = document.createElement("h4");
    itemName.setAttribute("class","item-name");
    itemName.textContent = item.name;
    itemCard.appendChild(itemName)
    const itemInfo = document.createElement("p");
    itemInfo.setAttribute("class", "item-info");
   itemInfo.textContent = item.info;
    itemCard.appendChild(itemInfo)

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "item-price");
    itemPrice.textContent = item.price;
    itemCard.appendChild(itemPrice)
})





return headerDiv;

}

export { menu }

