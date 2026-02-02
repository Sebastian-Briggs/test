// Wait for the button to exist in the DOM
const button = document.getElementById('colorButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    // Change the message text
    message.innerText = "The JS file is connected successfully! 🎉";
    
    // Log to the VS Code / Browser console
    console.log("Button was clicked!");
});