import { realEstateArr } from "../dataInitialization";

let caruselaActivePhoto: number;

const initializeCaruselaImages = (): void => {
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
    carusela_img_1.classList.remove("d-none"); //show the first image
  }
  caruselaActivePhoto = 1; //save in memory that we show the first image
};
initializeCaruselaImages();

const nextCarselaImage = (): void => {
  let carusela_img_selected = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected === null) {
    return;
  }
  carusela_img_selected.classList.add("d-none"); //hide the image by adding class d-none
  if (caruselaActivePhoto + 1 <= realEstateArr.length) {
    //this if check if there is next image
    caruselaActivePhoto++; //next image
  } else {
    //there is not images left
    //set first image
    caruselaActivePhoto = 1;
  }
  //   caruselaActivePhoto =
  //     caruselaActivePhoto + 1 <= realEstateArr.length
  //       ? caruselaActivePhoto++
  //       : (caruselaActivePhoto = 1);
  let carusela_img_selected2 = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected2 === null) {
    return;
  }
  carusela_img_selected2.classList.remove("d-none"); //show the image by removing class d-done
};

const previousCarselaImage = (): void => {
  let carusela_img_selected = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected === null) {
    return;
  }
  carusela_img_selected.classList.add("d-none"); //hide the image by adding class d-none
  if (caruselaActivePhoto - 1 >= 1) {
    caruselaActivePhoto--;
  } else {
    //set last image
    caruselaActivePhoto = realEstateArr.length;
  }
  let carusela_img_selected2 = document.getElementById(
    `carusela_img_${caruselaActivePhoto}`
  );
  if (carusela_img_selected2 === null) {
    return;
  }
  carusela_img_selected2.classList.remove("d-none"); //show the image by removing class d-done
};
