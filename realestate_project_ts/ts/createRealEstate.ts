import {
  donotTouchRealEstateArr,
  changeDonotTouchRealEstateArr,
} from "./dataInitialization.js";
import { RealEstate } from "./models/RealEstate.model.js";

let newId = 1; // if donotTouchRealEstateArr is empty the first id will be 1
if (donotTouchRealEstateArr.length > 0) {
  //if donotTouchRealEstateArr id not empty
  // then we will go to the last cell and add 1 to the last id and we will store it in the newID
  newId = donotTouchRealEstateArr[donotTouchRealEstateArr.length - 1].id + 1;
}

const handleCreateRealEstateSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  // let realestateInput = document.querySelector("#realestateInput").value;
  // let urlInput = document.querySelector("#urlInput").value;
  // let priceInput = document.querySelector("#priceInput").value;

  let realestateInput = document.querySelector(
    "#realestateInput"
  ) as HTMLInputElement;
  let urlInput = document.querySelector("#urlInput") as HTMLInputElement;
  let priceInput = document.querySelector("#priceInput") as HTMLInputElement;

  if (!realestateInput || !urlInput || !priceInput) {
    return;
  }

  // donotTouchRealEstateArr = [
  //   ...donotTouchRealEstateArr,
  //   new RealEstate(realestateInput, +priceInput, urlInput, newId),
  // ];
  changeDonotTouchRealEstateArr([
    ...donotTouchRealEstateArr,
    new RealEstate(
      realestateInput.value,
      +priceInput.value,
      urlInput.value,
      newId
    ),
  ]);
  /*
    add new realestate to donotTouchRealEstateArr array,
    we will create new realestate object using RealEstate class.
    we convert priceInput from string to number by adding + before priceInput.
  */
  newId++; // if the user want to add more then 1 realestate then we need to setup the next id
  localStorage.setItem(
    "realEstateArr",
    JSON.stringify(donotTouchRealEstateArr)
  );
  /*
    this JSON.stringify(donotTouchRealEstateArr) will convert donotTouchRealEstateArr array to json string,
    so we can store it in the local storage.
    localStorage.setItem will store the json string in the local storage with key realEstateArr.
  */
  console.log("donotTouchRealEstateArr", donotTouchRealEstateArr);
};

window.addEventListener("load", () => {
  let createRealestateSubmitForm = document.getElementById(
    "createRealestateSubmitForm"
  );
  if (createRealestateSubmitForm) {
    createRealestateSubmitForm.addEventListener(
      "submit",
      (event: SubmitEvent) => {
        handleCreateRealEstateSubmit(event);
      }
    );
  }
});
