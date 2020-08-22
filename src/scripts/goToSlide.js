function goToSlide(ref) {
	let id = -ref / 70;

	const imageContent = document.querySelector(".imageContent");
	imageContent.style.transform = `translate(${ref}vw)`;

	const activeCircle = document.querySelector(".activeImage");
	if (activeCircle) activeCircle.classList.toggle("activeImage");

	const navCircle = document.querySelector(`#img${id}`);
	navCircle.classList.toggle("activeImage");
}

export { goToSlide };
