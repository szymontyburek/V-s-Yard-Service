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

leftArrow.addEventListener("click", function () {
  let visibleIdx;

  for (let i = 0; i < yardWorkPairs.length; i++) {
    const htmlElem = yardWorkPairs[i].elem;

    if (htmlElem.style.display !== "none") {
      if (i === 0) visibleIdx = yardWorkPairs.length - 1; //changed
      else visibleIdx = i - 1; //changed

      htmlElem.style.display = "none";

      break;
    }
  }

  const pair = yardWorkPairs[visibleIdx];
  pair.elem.style.display = pair.display;
});

const yardWorkBtn = document.getElementById("yardWorkBtn");
const yardWorkContent = document.getElementById("yardWorkContent");

const haulingBtn = document.getElementById("haulingBtn");
const haulingContent = document.getElementById("haulingContent");

const handymanBtn = document.getElementById("handymanBtn");
const handymanContent = document.getElementById("handymanContent");

const menuContentObj = {
  yardWorkBtn: { btn: yardWorkBtn, div: yardWorkContent },
};

yardWorkBtn.addEventListener("click", function () {
  const menuBtns = Object.keys(menuContentObj);

  for (let i = 0; i < menuBtns.length; i++) {
    const btnId = menuBtns[i];
    const menuBtn = menuContentObj[btnId].btn;
    const contentDiv = menuContentObj[btnId].div;

    if (menuContentObj[this.id].div === contentDiv) {
      contentDiv.style.display = "block";
      menuBtn.style.backgroundColor = "black";
      menuBtn.style.color = "white";
    } else {
      contentDiv.style.display = "none";
      menuBtn.style.backgroundColor = "lightgray";
      menuBtn.style.color = "black";
    }
  }
});

yardWorkBtn.click();
