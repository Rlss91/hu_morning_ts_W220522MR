import {
  realEstateArr,
  donotTouchRealEstateArr,
  initRealestateArrays,
  changeRealEstateArr,
} from "./dataInitialization.js";
import {
  selectedIdToEditRealestate,
  initializeList,
} from "./components/listContainer.component.js";
import { initializeCardsGrid } from "./components/cardsGridContainer.component.js";
import {
  nextCarselaImage,
  previousCarselaImage,
} from "./components/carusela.component.js";

enum EModeDisplay {
  CARUSELA,
  GRID,
  LIST,
}

enum ESortDisplay {
  ASC,
  DESC,
}

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
  let caruselaNextBtn = document.getElementById("caruselaNextBtn");
  let caruselaPrevBtn = document.getElementById("caruselaPrevBtn");
  let realEstatFilterTextBoxInput = document.getElementById(
    "realEstatFilterTextBoxInput"
  );
  let selectDisplaySortAscBtn = document.getElementById(
    "selectDisplaySortAscBtn"
  );
  let selectDisplaySortDescBtn = document.getElementById(
    "selectDisplaySortDescBtn"
  );
  if (selectDisplayModeCaruselaBtn !== null) {
    selectDisplayModeCaruselaBtn.addEventListener("click", () => {
      handleSelectModeClick(EModeDisplay.CARUSELA);
      /*
        we must create anonymous function here to be able to call handleSelectModeClick with argument.
        if we call handleSelectModeClick with argument here it will execute the function here 1 time
        and will not execute the handleSelectModeClick when the click event will happend.
      */
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
    realEstatFilterTextBoxInput.addEventListener(
      "input",
      (event: Event): void => {
        handleFilterByNameInput(event as InputEvent);
        /*
          addEventListener will always give us general event.
          but we know that this event is typeof InputEvent.
          this is why we will create anonymous function that will accept general event
          and them we will convert it to InputEvent. 
        */
      }
    );
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
});

// console.log(realEstateArr);
// console.log("here");
let selectModeDisplayNow = "caruselaContainer";
const handleSelectModeClick = (selectModeNum: EModeDisplay): void => {
  let selectModeDisplayNowElement =
    document.getElementById(selectModeDisplayNow);
  if (selectModeDisplayNowElement === null) {
    return;
  }
  selectModeDisplayNowElement.classList.add("d-none");
  switch (selectModeNum) {
    case EModeDisplay.CARUSELA:
      //   document.getElementById("caruselaContainer").classList.remove("d-none");
      selectModeDisplayNow = "caruselaContainer";
      localStorage.setItem("selectMode", EModeDisplay.CARUSELA + ""); //convert number to string using number+""
      break;
    case EModeDisplay.GRID:
      //   document.getElementById("cardsGridContainer").classList.remove("d-none");
      selectModeDisplayNow = "cardsGridContainer";
      localStorage.setItem("selectMode", EModeDisplay.GRID + ""); //convert number to string using number+""
      break;
    case EModeDisplay.LIST:
      //   document.getElementById("listContainer").classList.remove("d-none");
      selectModeDisplayNow = "listContainer";
      localStorage.setItem("selectMode", EModeDisplay.LIST + ""); //convert number to string using number+""
      break;
  }
  let selectModeDisplayNowElement2 =
    document.getElementById(selectModeDisplayNow);
  if (selectModeDisplayNowElement2 === null) {
    return;
  }
  selectModeDisplayNowElement2.classList.remove("d-none");
};

const handleSortClick = (sortDir: ESortDisplay): void => {
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

const handleFilterByNameInput = (event: InputEvent): void => {
  if (event === null || event.target === null) {
    return;
  }
  let value = (event.target as HTMLInputElement).value; //convert event.target (that store our element) to input element
  /*
  filter will create new array and remove items that we dont need,
  so to prevent from filter to remove the unwanted items,
  we created donotTouchRealEstateArr to store the RealEstates.
  if we filter from realEstateArr directly 
  the first filter will work, he will remove the unwanted items, but
  on the secound filter the items already removed and it will filter
  from the items that was saved from the previous filter.
  */
  // realEstateArr = donotTouchRealEstateArr.filter((item) =>
  //   item.title.includes(value)
  // );
  // Object.assign(
  //   realEstateArr,
  //   donotTouchRealEstateArr.filter((item) => item.title.includes(value))
  // );
  /*
    we not allowed to change variables that we imported,
    so we will use Object.assign to copy new array to filter,
    this way we trik ts compiler
  */

  changeRealEstateArr(
    donotTouchRealEstateArr.filter((item) => item.title.includes(value))
  );

  //   realEstateArr = donotTouchRealEstateArr.filter((item) => {
  //     return item.title.includes(value);
  //   });
  initializeList();
  initializeCardsGrid();
};

const initPageLoad = () => {
  let selectModeFromls = localStorage.getItem("selectMode");
  if (selectModeFromls) {
    let selectModeFromlsEnum = selectModeFromls as unknown as EModeDisplay;
    handleSelectModeClick(selectModeFromlsEnum);
  }
  let sortDirFromls = localStorage.getItem("sortDir");
  if (sortDirFromls) {
    let sortDirFromlsEnum = sortDirFromls as unknown as ESortDisplay;
    /*
      we get the sort direction from localstorage as string.
      we must convert the string to enum, the syntax to do this is:
      first we convert it to unknow type then we convert it from
      unknow type to our enum.
    */
    handleSortClick(sortDirFromlsEnum);
  }
};

initPageLoad();

const handleSaveEditClick = (): void => {
  let realestateInput = document.getElementById(
    "realestateInput"
  ) as HTMLInputElement;
  let urlInput = document.getElementById("urlInput") as HTMLInputElement;
  let priceInput = document.getElementById("priceInput") as HTMLInputElement;
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
    ); //store as json in localstorage the changes
    initRealestateArrays(); //get the array from the storgae
    initPageLoad(); //recreate the html so we can see the changes
  }
};
