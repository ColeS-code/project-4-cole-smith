/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"The greater the difficulty, the more glory in surmounting it.",
    source:"Epicurus",
    citation:"unknown",
    year: 341,
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
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  let randomPick = math.floor(math.random() * quotes.length)
  return quotes[randomPick]
}

/***
 * `printQuote` function
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
    html += `<span class="tag">${randomQuote.tag}</span>`
  }

  html += `</p>`

  document.querySelector('#quote-box').innerHTML = html
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);