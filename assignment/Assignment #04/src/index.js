document.getElementById("app").innerHTML = "<h1>Hello!</h1>";

const h1 = document.querySelector("div#app h1");
// I used "Color Picker" to find a similar color.
const colors = ["#20a890", "#348ed1", "orange", "#8f50ac"];

const superEventHandler = {
  handleMouseEnter() {
    h1.innerTextd = "The mouse is here!";
    h1.style.color = colors[0];
  },

  handleMouseLeave() {
    h1.innerText = "The mouse is gone!";
    h1.style.color = colors[1];
  },

  handleWindowResize() {
    h1.innerText = "You just resized!";
    h1.style.color = colors[2];
  },

  handleContextMenu() {
    h1.innerText = "That was a right click!";
    h1.style.color = colors[3];
  },
};

h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
