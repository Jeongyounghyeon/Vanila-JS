const clockTitle = document.querySelector(".js-clock");

function happyChristmas() {
  const christmas = new Date("2022-12-25");
  const date = new Date();

  const second = Math.floor((christmas - date) / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);

  clockTitle.innerText = `${day}d ${hour % 60}h ${minute % 60}m ${
    second % 60
  }s`;
}

happyChristmas();
setInterval(happyChristmas, 1000);
