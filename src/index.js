import { slideRight, slideLeft } from "./scripts/passSlide";
import { goToSlide } from "./scripts/goToSlide";

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

const slideBtns = document.querySelectorAll(".slideBtns");
slideBtns.forEach((slideBtn) => {
	slideBtn.addEventListener("click", (e) => {
		const ref = e.target.id.replace("img", "");
		goToSlide(ref*(-70));
	});
});

leftBtn.addEventListener("click", slideLeft);
rightBtn.addEventListener("click", slideRight);

const defaultCircle = document.querySelector("#img0");
defaultCircle.classList.toggle("activeImage");
