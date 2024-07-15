document.addEventListener("DOMContentLoaded", function () {
	const imageContainer = document.querySelector(".container");
	const zoomImage = document.querySelector(".resume");

	function zoomEffect(e) {
		const { left, top, width, height } = imageContainer.getBoundingClientRect();
		const x =
			(e.touches ? e.touches[0].pageX : e.pageX) - left - window.pageXOffset;
		const y =
			(e.touches ? e.touches[0].pageY : e.pageY) - top - window.pageYOffset;

		const xPercent = (x / width) * 100;
		const yPercent = (y / height) * 100;

		zoomImage.style.transform = `translate(-${xPercent}%, -${yPercent}%) scale(2)`; // Adjust the scale as needed
	}

	function resetZoom() {
		zoomImage.style.transform = "translate(-50%, -50%) scale(1)";
	}

	imageContainer.addEventListener("mousemove", zoomEffect);
	imageContainer.addEventListener("mouseleave", resetZoom);

	imageContainer.addEventListener("touchmove", zoomEffect);
	imageContainer.addEventListener("touchend", resetZoom);
});
