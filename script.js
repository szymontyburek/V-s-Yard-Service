const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

const yardWork1 = document.getElementById("yardWork1");
const yardWork2 = document.getElementById("yardWork2");
const yardWork3 = document.getElementById("yardWork3");

let yardWorkPairs = [
  {
    elem: yardWork1,
    display: window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--horizDisplay"),
  },
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
