const inputEl = document.getElementById("validation-input")
const enumerateEl = inputEl.getAttribute("data-length")

inputEl.addEventListener("blur", function () {
	if (this.value.length != enumerateEl) {
		this.classList.add("invalid")
		this.classList.remove("valid")
	}
	else {
		this.classList.add("valid")
		this.classList.remove("invalid")
	}
})

//! Другий варіант, а третій як на уроці було але не використовував його
// const enumerateEl = Number(inputEl.getAttribute("data-length"))

// inputEl.addEventListener("blur", function () {
// 	if (this.value.length !== enumerateEl) {
// 		this.classList.add("invalid")
// 		this.classList.remove("valid")
// 	}
// 	else {
// 		this.classList.add("valid")
// 		this.classList.remove("invalid")
// 	}
// })