const images = [
  "background1.jpeg",
  "background2.jpeg",
  "background3.jpeg",
  "background4.jpeg",
  "background5.jpeg",
  "background6.jpeg",
  "background7.jpeg",
  "background8.jpeg",
  "background9.jpeg",
  "background10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
