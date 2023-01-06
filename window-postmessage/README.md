# Window.postMessage() example

This page demonstrates usage of the [`Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API, with and without the `transfer` option.

## Page elements

### Top level

The top-level page contains two [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) elements and a "Reset" button. The button just reloads the whole page, so you can try the example out again.

### Frame 1

The `<iframe>` on the left, "Frame 1", creates an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and initializes it. It displays the value in a [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) element.

The click handler for the "Send buffer" button uses `postMessage()` to send the buffer to the `<iframe>` on the right, "Frame 2". If the "Transfer?" box is checked, then the buffer is sent with the `transfer` option.

After sending the buffer, the click handler refreshes the `<div>` with the value of the buffer.

### Frame 2

The `<iframe>` on the right, "Frame 2", listens for the message, and updates its [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) with the value received.

## Usage

When the page is first loaded, Frame 1 displays "42", the value of the buffer. Frame 2 displays nothing.

Try clicking "Send buffer", with "Transfer?" unchecked. The value "42" will appear in Frame 2.

You can click "Send buffer" again and again, and each time the buffer is sent to Frame 2, and the value is shown.

Now try checking "Transfer?" and clicking "Send buffer". The value will appear in Frame 2 as before, but now the value in Frame 1 is "undefined". This is because we transferred the buffer to Frame 2, so it is no longer available in Frame 1. Also, we disable the "Send buffer" button, because we can't send it again.
