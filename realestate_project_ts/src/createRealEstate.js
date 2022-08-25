import { donotTouchRealEstateArr, changeDonotTouchRealEstateArr, } from "./dataInitialization.js";
import { RealEstate } from "./models/RealEstate.model.js";
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
    changeDonotTouchRealEstateArr([
        ...donotTouchRealEstateArr,
        new RealEstate(realestateInput.value, +priceInput.value, urlInput.value, newId),
    ]);
    newId++;
    localStorage.setItem("realEstateArr", JSON.stringify(donotTouchRealEstateArr));
    console.log("donotTouchRealEstateArr", donotTouchRealEstateArr);
};
window.addEventListener("load", () => {
    let createRealestateSubmitForm = document.getElementById("createRealestateSubmitForm");
    if (createRealestateSubmitForm) {
        createRealestateSubmitForm.addEventListener("submit", (event) => {
            handleCreateRealEstateSubmit(event);
        });
    }
});
