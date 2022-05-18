document.body.innerHTML = "<h1>Hello!</h1>";

function handleWindowResize() {
  const currentWidth = window.innerWidth;

  if (currentWidth < 800) {
    document.body.style.backgroundColor = "#2e8cd5";
  } else if (currentWidth < 1000) {
    document.body.style.backgroundColor = "#904eac";
  } else {
    document.body.style.backgroundColor = "#eebc12";
  }
}

handleWindowResize();
window.addEventListener("resize", handleWindowResize);
