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
                //This calls the checkAnswer function
                checkAnswer();
                // Handle Non-Submit Buttons:
                // If the clicked button does not have a data-type attribute equal to "submit," it retrieves the value of the data-type attribute and shows an alert with a template string indicating which type of button was clicked.
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    // Allows user to press enter instead of click submit.
    // Listens for a key down event. every event generates a object which is being passed into the event handler.
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            // Check the key property, if the key that was pressed is "Enter" then run checkAnswer function.
            if (event.key ==="Enter") {
                checkAnswer();
            }
        })
    //This starts an addition game as soon as the page is loaded. It is the default game so need to add it to the dom content loaded event listener. The rungame("addition"  is inside of the event listener but outside of the for loop)
    runGame("addition");
});


/** 
 * The main game "loop,", called when the script is first loaded and after the user's answer has been processed
 */
// gameType is being supplied as the parameter of the function. i.e. passing the game type into the parameter as an arguement.
function runGame(gameType) {

    // Each time runGame function is called it will set the value to an empty string, effectively clearly the answer box. 
    document.getElementById("answer-box").value = "";

    //sets the cursor to inside the answer box. Sets the answer box to the focus.
    document.getElementById("answer-box").focus();

    let num1, num2;
    //creates two random numbers between 1 and 25
    if (gameType === "multiply" || gameType === "division") {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
    } else {
        // Keep the original range for addition and subtraction
        num1 = Math.floor(Math.random() * 25) + 1;
        num2 = Math.floor(Math.random() * 25) + 1;
    }

    // check the gametype parameter if it is equal to addition it will display addition question. Otherwise it will display an error.
    if (gameType ==="addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1,num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    }else {
        alert(`unknown game type: ${gameType}`);
        // this is logged to the console.
        throw `unknown game type: ${gameType}, Aborting!`};
} 

/** checks the answer against the first element in the returned calculcatedCorrectAnswer array  */
function checkAnswer() {
    // because it is an input element need to get value from it, Cant use innerText for this. This takes the value from the user input and stores it in the variable "userAnswer".
    //Retrieving the answer from the DOM
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    // This assigns calculatedAnswer variable an  array that was assigned in calculatedCorrectedAnswer function. 
    //Calculating the correct answer from the correctAnswer function.
    let calculatedAnswer = calculateCorrectAnswer();
    // This is the comparison.
    // setting an iscorrect variable that will either be true or false.
    let isCorrect = userAnswer === calculatedAnswer[0];

    // if it is true congratulate the user. if it is false provide the correct answer. 
    if (isCorrect) {
        alert("Hey! you got it right!");
        // calls the function to increment correct answer score.
        incrementScore();
    } else {
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
         // calls the function to increment wrong answer tally..
        incrementWrongAnswer()
    }

    // Lastly need to auto run another game of the same time.
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc) directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // read the value from the dom and store it in variable. innerText will get the value of the element.
    
    // First get the values back from the DOM. Using parseInt function to make sure value is treated as an integer (whole number). By default when JS gets data from the dom it retuns it as a string, which you cant use in mathematical operations and it needs to be a number. Thats why using parseInt. 
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    // Need to calculate correct answer based on game type and we are determining game type by the operator. This says that if the operator is a "+" sign it must be the addition game. 
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }else {
        alert(`unimplemented operator ${operator}`);
        throw `unimpletemented operator ${operator}. Aborting!`;
    }
}

/** Gets the current score from the DOM and increments it by 1 */

// Need to tell correctAnswer() to call the following two functions at the appropriate time. 
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    // putting the double plus before the variable means JS will get the ID of score, then set the inner text to one plus old score. 
    document.getElementById("score").innerText = ++oldScore;
}

/** Gets the current incorrect answers from the DOM and increments it by 1 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    // IDs are in the question area of the html.
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    // Use JS tenary operator to make sure the larger number is on the left so you dont get a negative result. Which is bigger: opperand1 or operand2? if operand1 is bigger, return that. if operand2 is bigger, return that instead. 
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}