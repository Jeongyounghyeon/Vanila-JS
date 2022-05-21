const quotes = [
  {
    quote: "To marry is to halve your rights and double your duties.",
    author: "Arthur Schopenhaur",
  },
  {
    quote: "He makes no friend who never made a foe.",
    author: "Alfred, Lord Tennyson",
  },
  {
    quote: "Common sense is the collection of prejudices acquired by age 18.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes.",
    author: "Albert Einstein",
  },
  {
    quote: "Nothing is more despicable than respect based on fear.",
    author: "Albert Camus",
  },
  {
    quote:
      "Television has proved that people will look at anything rather than each other.",
    author: "Ann Landers",
  },
  {
    quote:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "Love does not consist in gazing at each other, but in looking together in the same direction.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Business? It's quite simple. It's other people's money.",
    author: "Alexandre Dumas",
  },
  {
    quote: "I would as soon leave my son a curse as the almighty dollar.",
    author: "Andrew Carnegie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
