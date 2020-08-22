import { goToSlide } from "./goToSlide";

const imageContent = document.querySelector(".imageContent");

let i = 0;

function slideRight() {
	i = i - 70;
	goToSlide(i);
}

function slideLeft() {
	i = i + 70;
	goToSlide(i);
}

export { slideLeft, slideRight };
