var inputElements = document.querySelectorAll("input[data-format]");
inputElements.forEach(input => {
	let m = new IMask(input, {
		mask: input.getAttribute("data-format")
	});
});
