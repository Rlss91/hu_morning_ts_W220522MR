import {
  realEstateArr,
  donotTouchRealEstateArr,
} from "../dataInitialization.js";
export { initializeList, handleModalPopupClick, selectedIdToEditRealestate };
const initializeList = () => {
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
                id="editRealestateBtn${realEstateItem.id}"
                >
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
        </div>
        `;
  }
  for (let realEstateItem of realEstateArr) {
    let editRealestateBtn = document.getElementById(
      `editRealestateBtn${realEstateItem.id}`
    );
    if (editRealestateBtn) {
      editRealestateBtn.addEventListener("click", () => {
        console.log("editRealestateBtn clicked");
        handleModalPopupClick(realEstateItem.id);
      });
    }
  }
};

let selectedIdToEditRealestate;
const handleModalPopupClick = (selectedId) => {
  selectedIdToEditRealestate = selectedId;
  let realestateItem = donotTouchRealEstateArr.find(
    (item) => item.id === selectedIdToEditRealestate
  );
  if (realestateItem) {
    let realestateInput = document.getElementById("realestateInput");
    let urlInput = document.getElementById("urlInput");
    let priceInput = document.getElementById("priceInput");
    if (realestateInput !== null) {
      realestateInput.value = realestateItem.title;
    }
    if (urlInput !== null) {
      urlInput.value = realestateItem.imgUrl;
    }
    if (priceInput !== null) {
      priceInput.value = realestateItem.price + "";
    }
  }
};

initializeList();
