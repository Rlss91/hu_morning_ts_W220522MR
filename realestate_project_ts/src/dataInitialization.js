"use strict";
let realEstateArr;
let donotTouchRealEstateArr;
const initRealestateArrays = () => {
    realEstateArr = localStorage.getItem("realEstateArr");
    if (realEstateArr) {
        realEstateArr = JSON.parse(realEstateArr);
    }
    else {
        realEstateArr = [];
    }
    donotTouchRealEstateArr = _.cloneDeep(realEstateArr);
};
initRealestateArrays();
