(function () {
  "use strict";

  const pipefall = document.getElementById("pipefall");
  const now = document.getElementById("play-now");
  const playAtRandom = document.getElementById("play-at-random");
  const randomChance = document.getElementById("random-chance");

  playAtRandom.checked = false;

  const play = () => {
    console.log("pipefall!");
    pipefall.play();
  };

  now.addEventListener("click", play);

  for (let pipe of document.querySelectorAll(".pipe")) {
    pipe.addEventListener("click", play);
  }

  function random(max) {
    return Math.floor(Math.random() * max);
  }

  let timeSincePlay = 0;
  setInterval(() => {
    if (playAtRandom.checked) {
      timeSincePlay += 1;
      if (timeSincePlay >= 60) {
        const v = random(randomChance.value);
        if (v === 0) {
          play();
          timeSincePlay = 0;
        }
      }
    } else {
      timeSincePlay = 0;
    }
  }, 1000);
})();
