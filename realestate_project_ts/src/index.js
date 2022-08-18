"use strict";
console.log(realEstateArr);
let selectModeDisplayNow = "caruselaContainer";
const handleSelectModeClick = (selectModeNum) => {
    document.getElementById(selectModeDisplayNow).classList.add("d-none");
    switch (selectModeNum) {
        case 1:
            selectModeDisplayNow = "caruselaContainer";
            localStorage.setItem("selectMode", "1");
            break;
        case 2:
            selectModeDisplayNow = "cardsGridContainer";
            localStorage.setItem("selectMode", "2");
            break;
        case 3:
            selectModeDisplayNow = "listContainer";
            localStorage.setItem("selectMode", "3");
            break;
    }
    document.getElementById(selectModeDisplayNow).classList.remove("d-none");
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
    let value = event.target.value;
    realEstateArr = donotTouchRealEstateArr.filter((item) => item.title.includes(value));
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
    let realestateInput = document.getElementById("realestateInput").value;
    let urlInput = document.getElementById("urlInput").value;
    let priceInput = document.getElementById("priceInput").value;
    let realestateItem = donotTouchRealEstateArr.find((item) => item.id === selectedIdToEditRealestate);
    if (realestateItem) {
        realestateItem.title = realestateInput;
        realestateItem.price = +priceInput;
        realestateItem.imgUrl = urlInput;
        console.log("donotTouchRealEstateArr", donotTouchRealEstateArr);
        localStorage.setItem("realEstateArr", JSON.stringify(donotTouchRealEstateArr));
        initRealestateArrays();
        initPageLoad();
    }
};
