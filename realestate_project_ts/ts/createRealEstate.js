let newId = 1; // if donotTouchRealEstateArr is empty the first id will be 1
if (donotTouchRealEstateArr.length > 0) {
  //if donotTouchRealEstateArr id not empty
  // then we will go to the last cell and add 1 to the last id and we will store it in the newID
  newId = donotTouchRealEstateArr[donotTouchRealEstateArr.length - 1].id + 1;
}

const handleCreateRealEstateSubmit = (event) => {
  event.preventDefault();
  let realestateInput = document.querySelector("#realestateInput").value;
  let urlInput = document.querySelector("#urlInput").value;
  let priceInput = document.querySelector("#priceInput").value;
  donotTouchRealEstateArr = [
    ...donotTouchRealEstateArr,
    new RealEstate(realestateInput, +priceInput, urlInput, newId),
  ];
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
