const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");

const message = "We love Programming!";
let index = 0;
let intervalId = null;

function startRendering() {
    // if no speed given, default is 1
    let speed = parseInt(speedInput.value) || 1;

    // convert speed to delay
    const delay = 500 / speed;

    // clear previous interval
    if (intervalId) clearInterval(intervalId);

    textElement.innerHTML = "";
    index = 0;

    intervalId = setInterval(() => {
        textElement.innerHTML += message[index];
        index++;

        if (index === message.length) {
            clearInterval(intervalId);
        }
    }, delay);
}

// Start typing immediately on page load
startRendering();

// Restart typing whenever speed changes
speedInput.addEventListener("input", startRendering);
