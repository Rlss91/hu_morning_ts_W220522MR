export { realEstateArr, donotTouchRealEstateArr, initRealestateArrays };
let realEstateArr;
let donotTouchRealEstateArr;
const initRealestateArrays = () => {
    let realEstateJsonString = localStorage.getItem("realEstateArr");
    if (realEstateJsonString) {
        realEstateArr = JSON.parse(realEstateJsonString);
    }
    else {
        realEstateArr = [];
    }
    donotTouchRealEstateArr = JSON.parse(JSON.stringify(realEstateArr));
};
initRealestateArrays();
console.log("here");
