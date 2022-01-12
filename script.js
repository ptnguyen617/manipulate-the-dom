let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
    // Random quote of the day generator
    const randomQuote = function () {
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();

    // Do all of your work inside the document.addEventListener  

    /* 
    Part 1
      DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element.
      Remember there are a couple of ways to query id. Change the text of the title to something shorter.
   */
    let newTitle = document.querySelector('#main-title');
    newTitle.textContent = 'Dom-Torento'

    /* 
      Part 2
      Select the body and change the background-color to a new color of your choice.
  */
    const bodyElement = document.querySelector('body')
    bodyElement.style.backgroundColor = "lightblue"

    /* 
     Part 3
     Select DOM's Favorite Things list and remove the last list item.
     */
    const domFavThings = document.getElementById('favorite-things');
    domFavThings.removeChild(domFavThings.lastElementChild);


    /*
    Part 4
    Select all .special-title class  elements and change their font-sizeto 2rem. 
    Remember you might have to iterate through the list of elements
     */
    const specialTitle = document.querySelectorAll(".special-title");
    for (let title of specialTitle) {
        title.style.fontsize = '2rem'
    }


    /*
    Part 5
    Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
    */
    const pastRace = document.getElementById('past-races');
    pastRace.removeChild(pastRace.children[3]);

    //Creating New DOM Elements
    /*
    Part 6
    Let's add to DOM's Past Races list. Create a new <li> element, 
    change the new <li> text to the name of a city, and append it to the Past Races list.
    */
    const newListRace = document.createElement('li');
    newListRace.textContent = "Saigon"
    pastRace.appendChild(newListRace);

    /*
    Part 7
    Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
    */
    const newDivElement = document.createElement("div");
    const mainDiv = document.querySelector(".main");

    newDivElement.classList.add("blog-post");
    newDivElement.classList.add("purple");

    const h2Element = document.createElement('h1');
    const pElememt = document.createElement("p");

    h2Element.textContent = "Saigon";
    pElememt.textContent = "Sub-marine aircraft 2000 Feet deep under water";

    mainDiv.appendChild(newDivElement);//parent appenchChild
    newDivElement.appendChild(h2Element);
    newDivElement.appendChild(pElememt);

    // Part 8
    /* Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
    */
    const randomQuoteElement = document.getElementById('quote-title');
    randomQuoteElement.addEventListener('click', (evt) => {
        randomQuote()
    })

    /*Part 9
    Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
    
    The mouseout handler should toggle the class .purple
    The mouseenter handler should toggle the class .red
    */
    const blogPostElement = document.querySelectorAll(".blog-post");
    blogPostElement.forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
            item.classList.remove('red');
            item.classList.add('purple');
        })
        item.addEventListener('mouseenter', (evt) => {
            item.classList.remove('purple');// turn off purppe
            item.classList.remove('red');//turn on red
        })
    })
    const blogPostEl = document.querySelectorAll(".blog-post");
    console.log(blogPostEl)
    // for(let blogPost of blogPostEl) {
    //   blogPost.addEventListener ('mouseout', (evt) => {
    //     blogPost.classList.toggle("red")
    //     blogPost.classList.toggle("purple")
    //   })
    //   blogPost.addEventListener ('mouseenter', (evt) => {
    //     blogPost.classList.toggle("purple") // 
    //     blogPost.classList.toggle("red") // 
    //   })
    // }

    blogPostEl.forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
            item.classList.remove("red")
            item.classList.add("purple")
        })
        item.addEventListener('mouseenter', (evt) => {
            item.classList.remove("purple") // turn off purple (removes)
            item.classList.add("red") // turn on red
        })
    })

});




