const quotes = [
  {
    quote: "quote1",
    author: "autor1",
  },
  {
    quote: "quote2",
    author: "autor2",
  },
  {
    quote: "quote3",
    author: "autor3",
  },
  {
    quote: "quote4",
    author: "autor4",
  },
  {
    quote: "quote5",
    author: "autor5",
  },
  {
    quote: "quote6",
    author: "autor6",
  },
  {
    quote: "quote7",
    author: "autor7",
  },
  {
    quote: "quote8",
    author: "autor8",
  },
  {
    quote: "quote9",
    author: "autor9",
  },
  {
    quote: "quote10",
    author: "autor10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
