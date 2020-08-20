// console.log("Starting");

// setTimeout(() => {
//   console.log("Running");
// }, 3000);

// console.log("Ending");

// now making a small app with callback (setTimeout)

const box = document.querySelector(".box");

box.addEventListener("click", function (e) {
  const boxEl = e.currentTarget;
  // change the text to GO when clicked
  boxEl.textContent = "GO";

  // Make it a circle after 2secs
  setTimeout(function () {
    boxEl.classList.add("circle");

    // Make it red after 0.5s
    setTimeout(function () {
      boxEl.classList.add("red");

      // Make it square after 0.25s
      setTimeout(function () {
        boxEl.classList.remove("circle");
        // Make it purple after 0.3s
        setTimeout(function () {
          boxEl.classList.add("purple");
          // fade out after 0.5s
          setTimeout(function () {
            boxEl.classList.add("fade");
            // finish
          }, 500);
        }, 300);
      }, 300);
    }, 500);
  }, 2000);
});
