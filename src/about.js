const about = () => {
  console.log("rendering about page");
  const bananaImage =
    "https://images.unsplash.com/photo-1608537824648-47d2592bcfd3?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=milo-bunnik-4I_LKUwq3ac-unsplash.jpg";

  const chefImage =
    "https://images.unsplash.com/photo-1621494548002-bfc916172ead?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-div");
  const content = document.getElementById("content");

  const homeHeader = document.createElement("h2");
  const buttons = document.querySelectorAll("button");
  buttons[2].setAttribute("class", "active");
  buttons[1].classList.remove("active");
  buttons[0].classList.remove("active");

  const headline = document.createElement("div");
  headline.setAttribute("id", "headline");
  headline.innerHTML = "<h3>Our Story</h3>";

  const storyTextDiv = document.createElement("div");
  storyTextDiv.setAttribute("class", "ourstory");

  const chefImageDiv = document.createElement("div");
  chefImageDiv.setAttribute("id", "chef-image");

  const storyText = document.createElement("p");
  storyText.setAttribute("id", "story-text");

  storyText.innerHTML =
    "<p>From humble beginnings, the banana-stand stood as a testament to hard-work, dedication and ingenuity.</p><p>Today, we are proud to serve the finest banana-based culinary delights money can buy.</p><p>Whether you want to stop in for a sweet snack, or treat the whole gang to a full lunch, we've got you covered.</p> <p><strong><em>'It's not just delicious, it's healthy!</em></strong></p>";

  homeHeader.textContent = "The Banana Stand";

  const quotesDiv = document.createElement("div");
  quotesDiv.setAttribute("id", "quotes-container");
  quotesDiv.innerHTML = "<h4>What they're saying</h4><hr/>";

  const bananaChef = document.createElement("img");
  bananaChef.src = chefImage;
  bananaChef.setAttribute("style", "width: 200px;");

  const bottomTextDiv = document.createElement("div")
  bottomTextDiv.setAttribute("id", "bottom-text");

  bottomTextDiv.innerHTML = "To get in touch with our team, click the 'home' tab for all the details.<hr />"

  content.appendChild(headerDiv);
  headerDiv.appendChild(homeHeader);

  headerDiv.appendChild(storyTextDiv);
  storyTextDiv.appendChild(headline);

  headerDiv.appendChild(quotesDiv);
  storyTextDiv.appendChild(chefImageDiv);
  chefImageDiv.appendChild(bananaChef);
  storyTextDiv.appendChild(storyText);
  headerDiv.appendChild(bottomTextDiv);
 

  class Quote {
    constructor(quote, name, city) {
      this.quote = quote;
      this.name = name;
      this.city = city;
    }
  }

  const quotes = [
    new Quote(
      "“I came for the pancakes, but stayed for the banana lasagne. Who knew?!”",
      "Chloe R.",
      "Melbourne"
    ),
    new Quote(
      "“Every bite is a-peeling. Five stars isn’t enough!”",
      "Dylan K.",
      "Sydney"
    ),
    new Quote(
      "“Their bircher muesli made me cry a little. Tears of joy. And cinnamon.”",
      "Ava T.",
      "Brisbane"
    ),
    new Quote(
      "“The Elvis Sandwich changed my life. I quit my job and started a band.”",
      "Jordan M.",
      "Perth"
    ),
    new Quote(
      "“They told me not to knock the banana pizza. I didn’t listen. I regret everything... except the second slice.”",
      "Ravi S.",
      "Hobart"
    ),
    new Quote(
      "“From banana bread to tikka masala—with banana?!—every dish is bizarrely brilliant.”",
      "Sienna L.",
      "Newcastle"
    ),
    new Quote(
      "“If potassium were a love language, this place would be poetry.”",
      "Leo F.",
      "Adelaide"
    ),
    new Quote(
      "“I wasn’t sure what to expect, but now I’m writing this from my new favourite spot. I’m never leaving.”",
      "Harper W.",
      "Darwin"
    ),
    new Quote(
      "“The upside-down cake turned my day right-side up. Highly recommend!”",
      "Imogen C.",
      "Canberra"
    ),
    new Quote(
      "“I told my grandma about the banana tikka masala. She laughed. Then she tried it. Now she runs their fan club.”",
      "Ethan B.",
      "Gold Coast"
    ),
  ];

  let quoteArray = [];
  let n;
  const quoteNumberRandomiser = () =>
    (n = Math.floor(Math.random() * quotes.length));
  const featuredQuotes = [];
  const quoteCreator = (() => {
    for (let i = 0; i < 3; i++) {
      quoteNumberRandomiser();
      quoteArray = quotes.splice(n, 1);

      featuredQuotes.push(quoteArray[0]);
      console.log(featuredQuotes[i].quote);
      const featuredQuote = document.createElement("div");
      featuredQuote.setAttribute("class", "featured-quote");
      featuredQuote.innerHTML = `<p><em>${featuredQuotes[i].quote}</em></p><p>${featuredQuotes[i].name} - ${featuredQuotes[i].city}</p><hr/>`; //I'm getting an error here because 'quote' is undefined
      quotesDiv.appendChild(featuredQuote);
    }
  })();

  return headerDiv;
};

export { about };
