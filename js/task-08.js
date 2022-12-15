//* Хотів спробувати обійти elements щоб можна було використати довільну к-сть інпутів (тут працюємо тільки з двома, а якщо більше?)
//* Це інші два варіанти виконання але без повідомлення

const form = document.querySelector(".login-form")

function handleSubmit(event) {
	event.preventDefault();

	// const elements = Array.from(event.currentTarget.elements)
	// const formData = elements.reduce((acc, { name, value }) => {
	// 	if (name) {
	// 		acc[name] = value;
	// 	}
	// 	return acc;
	// }, {})

	const {
		elements: { email, password }
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all the fields!");
	}
	console.log({
		email: email.value,
		password: password.value
	});


	// const formData = {};
	// new FormData(event.currentTarget).forEach((value, name) => {
	// 	formData[name] = value;
	// })
	
	event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);