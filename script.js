//your JS code here. If required.
const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");
const message = "We love Programming!";

function startRendering() {
    const speed = parseInt(speedInput.value);
    if (speed < 1 || speed > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    const delay = 500 / speed;
    textElement.innerHTML = "";  // FIXED
    let index = 0;

    function renderedCharacter() {
        if (index < message.length) {
            textElement.innerHTML += message[index];
            index++;
            setTimeout(renderedCharacter, delay);
        }
    }

    renderedCharacter();
}

// FIXED
speedInput.addEventListener("input", startRendering);
