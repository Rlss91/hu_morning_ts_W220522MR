import { RealEstate } from "./models/RealEstate.model.js";
export {
  realEstateArr,
  donotTouchRealEstateArr,
  initRealestateArrays,
  changeRealEstateArr,
};
/*
    this file will initialize the data
    we use this file to simulate data from server
*/
let realEstateArr: RealEstate[];

let donotTouchRealEstateArr: RealEstate[];

const initRealestateArrays = (): void => {
  let realEstateJsonString = localStorage.getItem("realEstateArr");
  if (realEstateJsonString) {
    realEstateArr = JSON.parse(realEstateJsonString) as RealEstate[];
    /*
      json.parse can convert any json data to any object or array.
      we want to convert/check json data from localstorage to the correct type.
      "as" try to convert data to correct data type
    */
  } else {
    realEstateArr = [];
  }
  // donotTouchRealEstateArr = _.cloneDeep(realEstateArr) as RealEstate[];
  donotTouchRealEstateArr = JSON.parse(
    JSON.stringify(realEstateArr)
  ) as RealEstate[]; // same as deep copy
};
initRealestateArrays();

const changeRealEstateArr = (newRealEstateArr: RealEstate[]): void => {
  realEstateArr = newRealEstateArr;
};

//[{"title":"villa","price":200000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/house-gf551a4fec_1920.jpg","id":1},{"title":"mantion","price":2000000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/pexels-chris-goodwin-32870.jpg","id":2},{"title":"snowwhite","price":150001,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/pexels-pixabay-280222.jpg","id":3},{"title":"adams castle","price":300000000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/villa-g891a73c21_1920.jpg","id":4},{"title":"loft","price":1250000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/house-gf14c5e267_1280.jpg","id":5},{"title":"lake house","price":1000000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/lake-g901a60927_1280.jpg","id":6},{"title":"mountain house","price":1500000,"imgUrl":"http://127.0.0.1:5500/realestate_project_ts/public/assets/imgs/mountains-g3c8089815_1920.jpg","id":7}]
