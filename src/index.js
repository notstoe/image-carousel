import { slideRight, slideLeft } from "./scripts/passSlide";

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

leftBtn.addEventListener("click", slideLeft);
rightBtn.addEventListener("click", slideRight);

const defaultCircle = document.querySelector("#img0");
defaultCircle.classList.toggle("activeImage");
