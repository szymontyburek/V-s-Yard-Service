const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");

const prevWorks = Array.from(document.querySelectorAll(".prevWork"));

idToArray = {
  weedControlContent: [
    document.getElementById("weedControl1"),
    document.getElementById("weedControl2"),
    document.getElementById("weedControl3"),
  ],
  handymanContent: [
    document.getElementById("handyman1"),
    document.getElementById("handyman2"),
    document.getElementById("handyman3"),
  ],
  trimmingContent: [
    document.getElementById("trimming1"),
    document.getElementById("trimming2"),
    document.getElementById("trimming3"),
  ],
};

const changePics = function () {
  let visibleIdx;
  let sections;

  for (const html of prevWorks) {
    if (html.style.display !== "none") {
      sections = idToArray[html.id];
      break;
    }
  }

  for (let i = 0; i < sections.length; i++) {
    const htmlElem = sections[i];

    if (htmlElem.style.display !== "none") {
      if (this.id === "rightArrow") {
        if (i === sections.length - 1) visibleIdx = 0;
        else visibleIdx = i + 1;
      } else {
        if (i === 0) visibleIdx = sections.length - 1;
        else visibleIdx = i - 1;
      }

      htmlElem.style.display = "none";

      break;
    }
  }

  sections[visibleIdx].style.display = "flex";
};

rightArrow.addEventListener("click", changePics.bind(rightArrow));
leftArrow.addEventListener("click", changePics.bind(leftArrow));

const menuContentObj = {
  weedControlBtn: {
    btn: document.getElementById("weedControlBtn"),
    div: document.getElementById("weedControlContent"),
  },
  trimmingBtn: {
    btn: document.getElementById("trimmingBtn"),
    div: document.getElementById("trimmingContent"),
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
        menuBtn.style.cssText = "background-color: #e4e4e4; color: black;";
      } else {
        contentDiv.style.display = "none";
        menuBtn.style.cssText =
          "background-color: var(--truckColor); color: white;";
      }
    }
  });
}

const weedControlBtn = document.getElementById("weedControlBtn");
weedControlBtn.click();
