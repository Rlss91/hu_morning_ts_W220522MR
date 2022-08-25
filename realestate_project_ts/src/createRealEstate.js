import { donotTouchRealEstateArr } from "./dataInitialization.js";
let newId = 1;
if (donotTouchRealEstateArr.length > 0) {
    newId = donotTouchRealEstateArr[donotTouchRealEstateArr.length - 1].id + 1;
}
const handleCreateRealEstateSubmit = (event) => {
    event.preventDefault();
    let realestateInput = document.querySelector("#realestateInput");
    let urlInput = document.querySelector("#urlInput");
    let priceInput = document.querySelector("#priceInput");
    if (!realestateInput || !urlInput || !priceInput) {
        return;
    }
    donotTouchRealEstateArr = [
        ...donotTouchRealEstateArr,
        new RealEstate(realestateInput, +priceInput, urlInput, newId),
    ];
    newId++;
    localStorage.setItem("realEstateArr", JSON.stringify(donotTouchRealEstateArr));
    console.log("donotTouchRealEstateArr", donotTouchRealEstateArr);
};
