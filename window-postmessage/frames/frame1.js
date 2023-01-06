// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Create an array from the buffer
const int32View = new Int32Array(buffer);
int32View[0] = 42;

// Display the value of the array
const output = document.querySelector("#output");
output.textContent = int32View[0];

const send = document.querySelector("#send");
const transfer = document.querySelector("#transfer");

// When the user clicks "Send", send the buffer to the other window.
// If the user had checked "Transfer?", transfer the buffer.
send.addEventListener("click", () => {
	const target = parent.document.querySelector("#window2").contentWindow;
	if (transfer.checked) {
		target.postMessage(buffer, "*", [buffer]);
		send.disabled = true;
	} else {
		target.postMessage(buffer, "*");
	}
	// Then write the buffer's value into output,
	// or `undefined` if it is undefined
	if (int32View[0] === undefined) {
		output.textContent = "undefined";
	} else {
		output.textContent = int32View[0];
	}
});
