//Wait for the DOM to finish loading before running the game.
// Get the button elements and add event listeners to them.

// Event Listener for DOMContentLoaded:
// This code adds an event listener to the document that waits for the DOM content to be fully loaded before executing the specified function. The function inside will run once the DOM is ready.
document.addEventListener("DOMContentLoaded", function() {
    // Get Buttons by Tag Name:
    // he getElementsByTagName method is used to retrieve all the HTML elements with the tag name "button" on the page. The result is stored in the buttons variable, which is essentially an array-like HTMLCollection.
    let buttons = document.getElementsByTagName("button");

    // Iterate Over Buttons:
    // This loop iterates over each button in the buttons collection.
    for (let button of buttons) {
        // Button Click Event Listener:
        // For each button, an event listener is added to listen for a "click" event. When a button is clicked, the function inside the event listener will be executed.
        button.addEventListener("click", function() {
            // Inside the click event handler, it checks if the clicked button has a data-type attribute with the value "submit." If true, it shows an alert saying "You clicked submit!".
            // 'this' refers to the button that was just clicked. 
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
                // Handle Non-Submit Buttons:
                // If the clicked button does not have a data-type attribute equal to "submit," it retrieves the value of the data-type attribute and shows an alert with a template string indicating which type of button was clicked.
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked the ${gameType}`)
            }
        });
    }
});


/** 
 * The main game "loop,", called when the script is first loaded and after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;
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