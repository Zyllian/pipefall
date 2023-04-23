(function () {
  "use strict";

  const pipefall = document.getElementById("pipefall");
  const now = document.getElementById("play-now");

  const play = () => {
    console.log("pipefall!");
    pipefall.play();
  };

  now.addEventListener("click", play);
})();
