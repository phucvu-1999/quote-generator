// query selector:
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get quote from API
let apiQuotes = [];

function showNewQuote() {
  // Pick a random quote from apiQuotes;
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quote.text.length > 50
    ? quoteText.classList.add("long-text")
    : quoteText.classList.remove("long-text");
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author ? quote.author : "Unknown author";
}

async function getQuotes() {
  const apiUrl = `https://type.fit/api/quotes`;
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    showNewQuote();
  } catch (err) {
    alert(err.message);
    console.log(err.message);
  }
}

getQuotes();

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", showNewQuote);
twitterBtn.addEventListener("click", tweetQuote);
