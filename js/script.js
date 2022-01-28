/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/


/*** 
 * The `quotes` array is a multidimensinal array that nests the quotes used in the functions below.
***/
const quotes = [
  {
    quote:"The greater the difficulty, the more glory in surmounting it.",
    source:"Epicurus",
    citation:"unknown",
    year:"341",
    tag:["fruits of our labor"]  
  },
  {
    quote:"The only thing I know is that I know nothing",
    source:"Socrates",
  },
  {
    quote:"The mind is furnished with ideas by experience alone.",
    source:"John Locke",
  },
  {
    quote:"virtue is nothing else than right reason.",
    source:"Seneca The Younger",
  },
  {
    quote:"Liberty consists in doing what one desires",
    source:"John Stuart Mill",
  },
]

/***
 * The `getRandomQuote` function picks a random quote from above using the math.floor and math.random to select an integer that represents a quote.
***/
const getRandomQuote = () => {
  let randomPick = Math.floor(Math.random() * quotes.length)
  return quotes[randomPick]
}

/***
 * The `printQuote` function displays a random quote on the screen, and if it has special appends then they will appear as well with the If statements below. 
***/
const printQuote = () => {
  randomQuote = getRandomQuote()

  let html = `<p class="quote">${ randomQuote.quote }</p><p class="source">${ randomQuote.source }`

  if (randomQuote.citation) {
    html += `<span class="citation">${ randomQuote.citation }</span>`
  }

  if (randomQuote.year) {
    html += `<span class="year">${ randomQuote.year }</span>`
  }

  if (randomQuote.tag) {
    html += `<span class="tag">${ randomQuote.tag.join(", ") }</span>`
  }

  html += `</p>`

  document.querySelector('#quote-box').innerHTML = html
}

// setBg snags a random integer to represent a random color on screen with the quotes. (CSS Tricks)
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

// The setInterval function allows the rgb and quotes to cycle back through the math functions above to change every 10 seconds.
setInterval(printQuote, 10000)
setInterval(setBg, 10000)



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", setBg, false);