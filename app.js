// making a function for wait
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(200).then(function () {
//   console.log("Done");
// });

// now making a small app with callback (setTimeout)

const box = document.querySelector(".box");

async function animate(e) {
  // change the text to GO when clicked
  const el = e.currentTarget;
  el.textContent = "GO";

  await wait(200);
  // Make it a circle after 2secs
  el.classList.add("circle");
  await wait(500);
  // Make it red after 0.5s
  el.classList.add("red");
  await wait(500);
  // Make it square after 0.25s
  el.classList.remove("circle");
  await wait(500);
  // Make it purple after 0.3s
  el.classList.add("purple");
  await wait(500);
  // fade away the box
  el.classList.add("fade");
}

box.addEventListener("click", animate);

// box.addEventListener("click", function (e) {
//   const boxEl = e.currentTarget;

//   wait(2000).then(() => boxEl.classList.add("circle"));

//   // fade out after 0.5s
//   // finish
// });
