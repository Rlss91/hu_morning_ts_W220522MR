import { realEstateArr } from "../dataInitialization";

const initializeCardsGrid = (): void => {
  let cardsGridContainer = document.getElementById("cardsGridContainer");
  if (cardsGridContainer === null) {
    return;
  }
  cardsGridContainer.innerHTML = "";
  for (let realEstateItem of realEstateArr) {
    cardsGridContainer.innerHTML += `
        <div class="col">
            <div class="card">
            <img src="${realEstateItem.imgUrl}" class="card-img-top" alt="${realEstateItem.title}">
            <div class="card-body">
                <h5 class="card-title">${realEstateItem.price}$</h5>
                <p class="card-text">${realEstateItem.title}</p>
            </div>
            </div>
        </div>
        `;
  }
};
initializeCardsGrid();

export { initializeCardsGrid };
