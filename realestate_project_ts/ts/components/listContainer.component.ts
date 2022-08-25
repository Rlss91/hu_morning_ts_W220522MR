import {
  realEstateArr,
  donotTouchRealEstateArr,
} from "../dataInitialization.js";
import { RealEstate } from "../models/RealEstate.model.js";
export { initializeList, handleModalPopupClick, selectedIdToEditRealestate };

const initializeList = (): void => {
  let listContainer = document.getElementById("listContainer");
  if (listContainer === null) {
    return;
  }
  /*
  'innerHtml+=' will recreate the elements each time,
  this way will remove the extra code that we added.
  in our case we added addEventListener.
  we will create variable,
  we will add to this varibale the html as string!
  and then we will user innerHTML = variable
  and then we will munipulate the elements
*/
  let bufferListContainer: string = ""; //variable to store the html as string
  for (let realEstateItem of realEstateArr) {
    bufferListContainer += `
        <div class="row mt-1 border-row">
            <div class="col-3">
                <img src="${realEstateItem.imgUrl}" alt="${realEstateItem.title}" />
            </div>
            <div class="col">
                ${realEstateItem.title}
            </div>
            <div class="col">
                ${realEstateItem.price}
            </div>
            <div class="col-1">
                <!-- Button trigger modal -->
                <button
                type="button"
                class="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#editRealestateModal"
                id="editRealestateBtn${realEstateItem.id}"
                >
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
        </div>
        `; //add the html as string
  }
  listContainer.innerHTML = bufferListContainer; //create the elements from string
  //from here we can munipulate the html elements
  for (let realEstateItem of realEstateArr) {
    let editRealestateBtn = document.getElementById(
      `editRealestateBtn${realEstateItem.id}`
    ); //try to find the btn
    if (editRealestateBtn) {
      //check if the btn was found
      editRealestateBtn.addEventListener("click", () => {
        //tell js what to do when the user click on the btn
        handleModalPopupClick(realEstateItem.id);
      });
    }
  }
};
initializeList();

let selectedIdToEditRealestate: number;

const handleModalPopupClick = (selectedId: number): void => {
  selectedIdToEditRealestate = selectedId;
  let realestateItem = donotTouchRealEstateArr.find(
    (item: RealEstate) => item.id === selectedIdToEditRealestate
  );
  if (realestateItem) {
    let realestateInput = document.getElementById(
      "realestateInput"
    ) as HTMLInputElement;
    let urlInput = document.getElementById("urlInput") as HTMLInputElement;
    let priceInput = document.getElementById("priceInput") as HTMLInputElement;
    if (realestateInput !== null) {
      realestateInput.value = realestateItem.title;
    }
    if (urlInput !== null) {
      urlInput.value = realestateItem.imgUrl;
    }
    if (priceInput !== null) {
      priceInput.value = realestateItem.price + ""; //convert number to string
    }
  }
};
