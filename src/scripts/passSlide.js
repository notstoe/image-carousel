import { goToSlide } from "./goToSlide";

let i = 0;

function slideRight() {
	if (i != -350) {
		i = i - 70;
	} else {
		i = 0;
	}
	goToSlide(i);
}

function slideLeft() {
	if (i != 0) {
		i = i + 70;
	} else {
		i = -350;
	}
	goToSlide(i);
}

export { slideLeft, slideRight };
