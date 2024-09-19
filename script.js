const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

const yardWork1 = document.getElementById("yardWork1");
const yardWork2 = document.getElementById("yardWork2");
const yardWork3 = document.getElementById("yardWork3");

let yardWorkPairs = [yardWork1, yardWork2, yardWork3];

const handyman1 = document.getElementById("handyman1");
const handyman2 = document.getElementById("handyman2");
const handyman3 = document.getElementById("handyman3");

let handymanPairs = [handyman1, handyman2, handyman3];

const changePics = function () {
  let visibleIdx;

  for (let i = 0; i < handymanPairs.length; i++) {
    const htmlElem = handymanPairs[i];

    if (htmlElem.style.display !== "none") {
      if (this.id === "rightArrow") {
        if (i === handymanPairs.length - 1) visibleIdx = 0;
        else visibleIdx = i + 1;
      } else {
        if (i === 0) visibleIdx = handymanPairs.length - 1;
        else visibleIdx = i - 1;
      }

      htmlElem.style.display = "none";

      break;
    }
  }

  handymanPairs[visibleIdx].style.display = "flex";
};

rightArrow.addEventListener("click", changePics.bind(rightArrow));
leftArrow.addEventListener("click", changePics.bind(leftArrow));

const menuContentObj = {
  yardWorkBtn: {
    btn: document.getElementById("yardWorkBtn"),
    div: document.getElementById("yardWorkContent"),
  },
  haulingBtn: {
    btn: document.getElementById("haulingBtn"),
    div: document.getElementById("haulingContent"),
  },
  handymanBtn: {
    btn: document.getElementById("handymanBtn"),
    div: document.getElementById("handymanContent"),
  },
};

const menuBtnIds = Object.keys(menuContentObj);

for (const menuBtnId of menuBtnIds) {
  menuContentObj[menuBtnId].btn.addEventListener("click", function () {
    for (const menuBtnId of menuBtnIds) {
      const menuBtn = menuContentObj[menuBtnId].btn;
      const contentDiv = menuContentObj[menuBtnId].div;

      if (contentDiv === menuContentObj[this.id].div) {
        contentDiv.style.display = "flex";
        menuBtn.style.backgroundColor = "black";
        menuBtn.style.color = "white";
      } else {
        contentDiv.style.display = "none";
        menuBtn.style.backgroundColor = "lightgray";
        menuBtn.style.color = "black";
      }
    }
  });
}

const yardWorkBtn = document.getElementById("yardWorkBtn");
yardWorkBtn.click();
