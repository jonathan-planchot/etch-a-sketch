let container = document.querySelector("#container");
let numberOfBoxPerRow = 16;
let boxArr = [];

let widthContainer = parseFloat(getComputedStyle(container).width);

let widthBox = widthContainer / numberOfBoxPerRow;

let promptButton = document.createElement("button");
promptButton.textContent = "Resize grid";
promptButton.setAttribute("style", "margin : 15px;")
document.body.prepend(promptButton);

promptButton.addEventListener("click", () => {
    const maxLimit = 100;
    let userInput = "";
    while(true) {
        userInput = prompt(`How many squares per row would you like for your grid? (Max ${maxLimit}`, 0);
        if(userInput === null) {
            console.log("User canceled.");
            break;
        } else if(userInput <= maxLimit) {
            console.log("Valid input.");
            break;
        } else {
            alert(`Too big. Please enter a number below ${maxLimit}.`);
        }
    }

    numberOfBoxPerRow = Number(userInput);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let newTotalNumberOfBoxes = numberOfBoxPerRow * numberOfBoxPerRow ;
    let newWidthBox = widthContainer / numberOfBoxPerRow;
    createBoxes(newTotalNumberOfBoxes, newWidthBox);
});

function getRandomIntRgb() {
    let randomRgb;
    return randomRgb = Math.floor(Math.random() * 255);
}

container.addEventListener("mouseover", (event) => {

    if(event.target === container) return;

    let currentOpacity = parseFloat(window.getComputedStyle(event.target).opacity);
    let newOpacity = Math.min(currentOpacity + 0.1, 1);
    event.target.style.backgroundColor = `rgb(${getRandomIntRgb()}, ${getRandomIntRgb()}, ${getRandomIntRgb()})`;
    event.target.style.opacity = newOpacity;

    setTimeout(() => {
        event.target.style.backgroundColor = "";
    }, 800);
});

let totalNumberOfBoxes = numberOfBoxPerRow * numberOfBoxPerRow;

function createBoxes(num, width) {
    for(i = 0; i < num; i++) {
        let box = document.createElement("div");
        container.appendChild(box);
        box.style.width = `${width}px`;
        box.style.height = `${width}px`;
        box.style.opacity = 0;
        boxArr.push(box);
    }
}

createBoxes(totalNumberOfBoxes, widthBox);
