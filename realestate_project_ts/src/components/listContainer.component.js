"use strict";
const initializeList = () => {
    let listContainer = document.getElementById("listContainer");
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
let selectedIdToEditRealestate;
const handleModalPopupClick = (selectedId) => {
    selectedIdToEditRealestate = selectedId;
    let realestateItem = donotTouchRealEstateArr.find((item) => item.id === selectedIdToEditRealestate);
    if (realestateItem) {
        document.getElementById("realestateInput").value = realestateItem.title;
        document.getElementById("urlInput").value = realestateItem.imgUrl;
        document.getElementById("priceInput").value = realestateItem.price;
    }
};
