//Wait for the DOM to finish loading before running the game.
// Get the button elements and add event listeners to them.

// This listens for the DOM content to be loaded and then it will exexcute the function.
document.addEventListener("DOMContentLoaded", function() {
    // using the get elements by tag name method returns all elements that it finds as an array. 
    let buttons = document.getElementsByTagName("button");

        // This syntax is going to go through the buttons array and return each element in the array which will be stored in that variable button on each iteration. 
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // 'this' refers to the button that was just clicked. 
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked the ${gameType}`)
            }
        });
    }
});

function runGame() {

} 

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}