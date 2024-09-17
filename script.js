const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

const yardWork1 = document.getElementById("yardWork1");
const yardWork2 = document.getElementById("yardWork2");
const yardWork3 = document.getElementById("yardWork3");

let yardWorkPairs = [
  { elem: yardWork1, display: "block" },
  { elem: yardWork2, display: "flex" },
  { elem: yardWork3, display: "flex" },
];

rightArrow.addEventListener("click", function () {
  let visibleIdx;

  for (let i = 0; i < yardWorkPairs.length; i++) {
    const htmlElem = yardWorkPairs[i].elem;

    if (htmlElem.style.display !== "none") {
      if (i === yardWorkPairs.length - 1) visibleIdx = 0;
      else visibleIdx = i + 1;

      htmlElem.style.display = "none";

      break;
    }
  }

  const pair = yardWorkPairs[visibleIdx];
  pair.elem.style.display = pair.display;
});
