function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        // Handling the error
        console.error("An error occurred:", error.message);
        return "Error: " + error.message;
    } finally {
        console.log("Cleanup tasks, if any.");
    }
}

// Test cases
console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(8, 0)); // Output: Error: Division by zero is not allowed.
console.log(divideNumbers(15, 3)); // Output: 5
