import { realEstateArr } from "../dataInitialization.js";
let caruselaActivePhoto;
const initializeCaruselaImages = () => {
  let caruselaDiv = document.getElementById("caruselaDiv");
  if (caruselaDiv === null) {
    return;
  }
  for (let realEstateItem of realEstateArr) {
    caruselaDiv.innerHTML += `
    <img src="${realEstateItem.imgUrl}" class="d-none" alt="${realEstateItem.title}" id="carusela_img_${realEstateItem.id}">
    `;
  }
  let carusela_img_1 = document.getElementById("carusela_img_1");
  if (carusela_img_1) {
    carusela_img_1.classList.remove("d-none");
  }
  caruselaActivePhoto = 1;
};
initializeCaruselaImages();
const nextCarselaImage = () => {
  let carusela_img_selected = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected === null) {
    return;
  }
  carusela_img_selected.classList.add("d-none");
  if (caruselaActivePhoto + 1 <= realEstateArr.length) {
    caruselaActivePhoto++;
  } else {
    caruselaActivePhoto = 1;
  }
  let carusela_img_selected2 = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected2 === null) {
    return;
  }
  carusela_img_selected2.classList.remove("d-none");
};
const previousCarselaImage = () => {
  let carusela_img_selected = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected === null) {
    return;
  }
  carusela_img_selected.classList.add("d-none");
  if (caruselaActivePhoto - 1 >= 1) {
    caruselaActivePhoto--;
  } else {
    caruselaActivePhoto = realEstateArr.length;
  }
  let carusela_img_selected2 = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected2 === null) {
    return;
  }
  carusela_img_selected2.classList.remove("d-none");
};
