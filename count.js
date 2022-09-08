"use strict";

const arrayNumbers = [];
let counter = 0;

function loop() {
  /*  console.log(counter); */

  if (counter < 8) {
    counter++;
    /* counter += 1; */
    arrayNumbers.unshift(counter);
    setTimeout(loop, 1000);
  } else {
    counter++;
    arrayNumbers.unshift(counter);
    arrayNumbers.pop(counter);
    setTimeout(loop, 1000);
  }

  console.log(arrayNumbers);
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", loop);
} else {
  // `DOMContentLoaded` has already fired
  loop();
}
