import { realEstateArr, donotTouchRealEstateArr } from "../dataInitialization";
import { RealEstate } from "../models/RealEstate.model";

const initializeList = (): void => {
  let listContainer = document.getElementById("listContainer");
  if (listContainer === null) {
    return;
  }
  listContainer.innerHTML = "";
  for (let realEstateItem of realEstateArr) {
    listContainer.innerHTML += `
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
                onclick="handleModalPopupClick(${realEstateItem.id})"
                >
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
        </div>
        `;
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

export { initializeList, handleModalPopupClick };
