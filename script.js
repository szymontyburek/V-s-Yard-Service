const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

const yardWork1 = document.getElementById("yardWork1");
const yardWork2 = document.getElementById("yardWork2");

let yardWorkPairs = [yardWork1, yardWork2];

rightArrow.addEventListener("click", function () {
  let visibleIdx;

  for (let i = 0; i < yardWorkPairs.length; i++) {
    const htmlElem = yardWorkPairs[i];

    if (htmlElem.style.display !== "none") {
      htmlElem.style.display = "none";
      visibleIdx = i + 1;
      break;
    }
  }

  yardWorkPairs[visibleIdx].style.display = "flex";
});
