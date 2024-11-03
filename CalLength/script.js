// Function to calculate length excluding spaces
function calculateLength() {
    // Get the text input from the input field
    const userInput = document.getElementById("userInput").value;
    
    // Remove spaces and calculate the length of the resulting string
    const lengthExcludingSpaces = userInput.replace(/\s/g, "").length;
    
    // Update the result in the <span> element
    document.getElementById("result").textContent = lengthExcludingSpaces;
}

// Add an event listener to the button to trigger the calculation on click
document.getElementById("calculateButton").addEventListener("click", calculateLength);
