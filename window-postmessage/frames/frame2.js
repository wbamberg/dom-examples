// On receiving a message containing some data,
// create an array from the data and display its value.
window.addEventListener("message", (event) => {
	// Create an array from the buffer
	const int32View = new Int32Array(event.data);
	const output = document.querySelector("#output");
	// This is just a hack so we see the value changing
	output.textContent = "";
	window.setTimeout(() => {
		output.textContent = int32View[0];
	}, 200);
});
