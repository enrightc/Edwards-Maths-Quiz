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
                runGame(gameType);
            }
        });
    }

    //This starts an addition game as soon as the page is loaded. It is the default game so need to add it to the dom content loaded event listener. The rungame("addition"  is inside of the event listener but outside of the for loop)
    runGame("addition");
});


/** 
 * The main game "loop,", called when the script is first loaded and after the user's answer has been processed
 */
// gameType is being supplied as the parameter of the function. i.e. passing the game type into the parameter as an arguement.
function runGame(gameType) {
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    // check the gametype parameter if it is equal to addition it will display addition question. Otherwise it will display an error.
    if (gameType ==="addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        // this is logged to the console.
        throw `unknown game type: ${gameType}, Aborting!`};
} 

function checkAnswer() {

}


function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    // IDs are in the question area of the html.
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}