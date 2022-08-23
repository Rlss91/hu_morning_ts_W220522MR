import {
  realEstateArr,
  donotTouchRealEstateArr,
  initRealestateArrays,
} from "./dataInitialization.js";
import {
  selectedIdToEditRealestate,
  initializeList,
} from "./components/listContainer.component.js";
import { initializeCardsGrid } from "./components/cardsGridContainer.component.js";
var EModeDisplay;
(function (EModeDisplay) {
  EModeDisplay[(EModeDisplay["CARUSELA"] = 0)] = "CARUSELA";
  EModeDisplay[(EModeDisplay["GRID"] = 1)] = "GRID";
  EModeDisplay[(EModeDisplay["LIST"] = 2)] = "LIST";
})(EModeDisplay || (EModeDisplay = {}));
window.addEventListener("load", () => {
  let selectDisplayModeCaruselaBtn = document.getElementById(
    "selectDisplayModeCaruselaBtn"
  );
  let selectDisplayModeGridBtn = document.getElementById(
    "selectDisplayModeGridBtn"
  );
  let selectDisplayModeListBtn = document.getElementById(
    "selectDisplayModeListBtn"
  );
  if (selectDisplayModeCaruselaBtn !== null) {
    selectDisplayModeCaruselaBtn.addEventListener("click", () => {
      handleSelectModeClick(EModeDisplay.CARUSELA);
    });
  }
  if (selectDisplayModeGridBtn !== null) {
    selectDisplayModeGridBtn.addEventListener("click", () => {
      handleSelectModeClick(EModeDisplay.GRID);
    });
  }
  if (selectDisplayModeListBtn !== null) {
    selectDisplayModeListBtn.addEventListener("click", () => {
      handleSelectModeClick(EModeDisplay.LIST);
    });
  }
});
let selectModeDisplayNow = "caruselaContainer";
const handleSelectModeClick = (selectModeNum) => {
  let selectModeDisplayNowElement =
    document.getElementById(selectModeDisplayNow);
  if (selectModeDisplayNowElement === null) {
    return;
  }
  selectModeDisplayNowElement.classList.add("d-none");
  switch (selectModeNum) {
    case EModeDisplay.CARUSELA:
      selectModeDisplayNow = "caruselaContainer";
      localStorage.setItem("selectMode", EModeDisplay.CARUSELA + "");
      break;
    case EModeDisplay.GRID:
      selectModeDisplayNow = "cardsGridContainer";
      localStorage.setItem("selectMode", EModeDisplay.GRID + "");
      break;
    case EModeDisplay.LIST:
      selectModeDisplayNow = "listContainer";
      localStorage.setItem("selectMode", EModeDisplay.LIST + "");
      break;
  }
  let selectModeDisplayNowElement2 =
    document.getElementById(selectModeDisplayNow);
  if (selectModeDisplayNowElement2 === null) {
    return;
  }
  selectModeDisplayNowElement2.classList.remove("d-none");
};
const handleSortClick = (sortDir) => {
  if (sortDir == "⬇️") {
    realEstateArr.sort((a, b) => a.price - b.price);
    localStorage.setItem("sortDir", "⬇️");
  }
  if (sortDir == "⬆️") {
    realEstateArr.sort((a, b) => b.price - a.price);
    localStorage.setItem("sortDir", "⬆️");
  }
  initializeList();
  initializeCardsGrid();
};
const handleFilterByNameInput = (event) => {
  if (event === null || event.target === null) {
    return;
  }
  let value = event.target.value;
  Object.assign(
    realEstateArr,
    donotTouchRealEstateArr.filter((item) => item.title.includes(value))
  );
  initializeList();
  initializeCardsGrid();
};
const initPageLoad = () => {
  let selectModeFromls = localStorage.getItem("selectMode");
  if (selectModeFromls) {
    handleSelectModeClick(+selectModeFromls);
  }
  let sortDirFromls = localStorage.getItem("sortDir");
  if (sortDirFromls) {
    handleSortClick(sortDirFromls);
  }
};
initPageLoad();
const handleSaveEditClick = () => {
  let realestateInput = document.getElementById("realestateInput");
  let urlInput = document.getElementById("urlInput");
  let priceInput = document.getElementById("priceInput");
  if (realestateInput === null || urlInput === null || priceInput === null) {
    return;
  }
  let realestateItem = donotTouchRealEstateArr.find(
    (item) => item.id === selectedIdToEditRealestate
  );
  if (realestateItem) {
    realestateItem.title = realestateInput.value;
    realestateItem.price = +priceInput.value;
    realestateItem.imgUrl = urlInput.value;
    console.log("donotTouchRealEstateArr", donotTouchRealEstateArr);
    localStorage.setItem(
      "realEstateArr",
      JSON.stringify(donotTouchRealEstateArr)
    );
    initRealestateArrays();
    initPageLoad();
  }
};
