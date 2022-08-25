import { realEstateArr, donotTouchRealEstateArr, initRealestateArrays, changeRealEstateArr, } from "./dataInitialization.js";
import { selectedIdToEditRealestate, initializeList, } from "./components/listContainer.component.js";
import { initializeCardsGrid } from "./components/cardsGridContainer.component.js";
import { nextCarselaImage, previousCarselaImage, } from "./components/carusela.component.js";
var EModeDisplay;
(function (EModeDisplay) {
    EModeDisplay[EModeDisplay["CARUSELA"] = 0] = "CARUSELA";
    EModeDisplay[EModeDisplay["GRID"] = 1] = "GRID";
    EModeDisplay[EModeDisplay["LIST"] = 2] = "LIST";
})(EModeDisplay || (EModeDisplay = {}));
var ESortDisplay;
(function (ESortDisplay) {
    ESortDisplay[ESortDisplay["ASC"] = 0] = "ASC";
    ESortDisplay[ESortDisplay["DESC"] = 1] = "DESC";
})(ESortDisplay || (ESortDisplay = {}));
window.addEventListener("load", () => {
    let selectDisplayModeCaruselaBtn = document.getElementById("selectDisplayModeCaruselaBtn");
    let selectDisplayModeGridBtn = document.getElementById("selectDisplayModeGridBtn");
    let selectDisplayModeListBtn = document.getElementById("selectDisplayModeListBtn");
    let caruselaNextBtn = document.getElementById("caruselaNextBtn");
    let caruselaPrevBtn = document.getElementById("caruselaPrevBtn");
    let realEstatFilterTextBoxInput = document.getElementById("realEstatFilterTextBoxInput");
    let selectDisplaySortAscBtn = document.getElementById("selectDisplaySortAscBtn");
    let selectDisplaySortDescBtn = document.getElementById("selectDisplaySortDescBtn");
    let modelEditSaveBtn = document.getElementById("modelEditSaveBtn");
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
    if (caruselaNextBtn !== null) {
        caruselaNextBtn.addEventListener("click", () => {
            nextCarselaImage();
        });
    }
    if (caruselaPrevBtn !== null) {
        caruselaPrevBtn.addEventListener("click", () => {
            previousCarselaImage();
        });
    }
    if (realEstatFilterTextBoxInput !== null) {
        realEstatFilterTextBoxInput.addEventListener("input", (event) => {
            handleFilterByNameInput(event);
        });
    }
    if (selectDisplaySortDescBtn !== null) {
        selectDisplaySortDescBtn.addEventListener("click", () => {
            handleSortClick(ESortDisplay.DESC);
        });
    }
    if (selectDisplaySortAscBtn !== null) {
        selectDisplaySortAscBtn.addEventListener("click", () => {
            handleSortClick(ESortDisplay.ASC);
        });
    }
    if (modelEditSaveBtn) {
        modelEditSaveBtn.addEventListener("click", () => {
            handleSaveEditClick();
        });
    }
});
let selectModeDisplayNow = "caruselaContainer";
const handleSelectModeClick = (selectModeNum) => {
    let selectModeDisplayNowElement = document.getElementById(selectModeDisplayNow);
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
    let selectModeDisplayNowElement2 = document.getElementById(selectModeDisplayNow);
    if (selectModeDisplayNowElement2 === null) {
        return;
    }
    selectModeDisplayNowElement2.classList.remove("d-none");
};
const handleSortClick = (sortDir) => {
    if (sortDir == ESortDisplay.DESC) {
        realEstateArr.sort((a, b) => a.price - b.price);
        localStorage.setItem("sortDir", ESortDisplay.DESC + "");
    }
    if (sortDir == ESortDisplay.ASC) {
        realEstateArr.sort((a, b) => b.price - a.price);
        localStorage.setItem("sortDir", ESortDisplay.ASC + "");
    }
    initializeList();
    initializeCardsGrid();
};
const handleFilterByNameInput = (event) => {
    if (event === null || event.target === null) {
        return;
    }
    let value = event.target.value;
    changeRealEstateArr(donotTouchRealEstateArr.filter((item) => item.title.includes(value)));
    initializeList();
    initializeCardsGrid();
};
const initPageLoad = () => {
    let selectModeFromls = localStorage.getItem("selectMode");
    if (selectModeFromls) {
        let selectModeFromlsEnum = selectModeFromls;
        handleSelectModeClick(selectModeFromlsEnum);
    }
    let sortDirFromls = localStorage.getItem("sortDir");
    if (sortDirFromls) {
        let sortDirFromlsEnum = sortDirFromls;
        handleSortClick(sortDirFromlsEnum);
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
    let realestateItem = donotTouchRealEstateArr.find((item) => item.id === selectedIdToEditRealestate);
    if (realestateItem) {
        realestateItem.title = realestateInput.value;
        realestateItem.price = +priceInput.value;
        realestateItem.imgUrl = urlInput.value;
        localStorage.setItem("realEstateArr", JSON.stringify(donotTouchRealEstateArr));
        initRealestateArrays();
        initPageLoad();
    }
};
