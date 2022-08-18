"use strict";
let caruselaActivePhoto;
const initializeCaruselaImages = () => {
    let caruselaDiv = document.getElementById("caruselaDiv");
    for (let realEstateItem of realEstateArr) {
        caruselaDiv.innerHTML += `
    <img src="${realEstateItem.imgUrl}" class="d-none" alt="${realEstateItem.title}" id="carusela_img_${realEstateItem.id}">
    `;
    }
    if (document.getElementById("carusela_img_1")) {
        document.getElementById("carusela_img_1").classList.remove("d-none");
    }
    caruselaActivePhoto = 1;
};
initializeCaruselaImages();
const nextCarselaImage = () => {
    document
        .getElementById(`carusela_img_${caruselaActivePhoto}`)
        .classList.add("d-none");
    if (caruselaActivePhoto + 1 <= realEstateArr.length) {
        caruselaActivePhoto++;
    }
    else {
        caruselaActivePhoto = 1;
    }
    document
        .getElementById(`carusela_img_${caruselaActivePhoto}`)
        .classList.remove("d-none");
};
const previousCarselaImage = () => {
    document
        .getElementById(`carusela_img_${caruselaActivePhoto}`)
        .classList.add("d-none");
    if (caruselaActivePhoto - 1 >= 1) {
        caruselaActivePhoto--;
    }
    else {
        caruselaActivePhoto = realEstateArr.length;
    }
    document
        .getElementById(`carusela_img_${caruselaActivePhoto}`)
        .classList.remove("d-none");
};
