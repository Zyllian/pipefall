(function () {
  "use strict";

  const fallKey = "falls";

  const pipefall = document.getElementById("pipefall");
  const now = document.getElementById("play-now");
  const playAtRandom = document.getElementById("play-at-random");
  const randomChance = document.getElementById("random-chance");

  playAtRandom.checked = false;

  function getFalls() {
    let falls;
    try {
      falls = parseInt(localStorage.getItem(fallKey));
    } catch {
      falls = 0;
    }
    if (Number.isNaN(falls)) {
      falls = 0;
    }
    return falls;
  }

  const updateFalls = () => {
    const falls = getFalls();
    for (const fall of document.querySelectorAll(".fall-count")) {
      fall.innerText = falls;
    }
  };

  const play = () => {
    pipefall.play();
    const falls = getFalls() + 1;
    localStorage.setItem(fallKey, falls);
    updateFalls();
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
        const v = random(randomChance.value * 60);
        if (v === 0) {
          play();
          timeSincePlay = 0;
        }
      }
    } else {
      timeSincePlay = 0;
    }
  }, 1000);
  updateFalls();
})();
