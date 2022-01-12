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


    // Part 6


    // Part 7


    // Part 8


    // Part 9




});
