// Create a function to check motorists' speed.
function checkSpeed() {
    // Prompt the user to input the speed
    let speed = prompt("Enter the speed of the motorist:");

    // Convert the input to a number
    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
        return;
    }

    // Declaring 70 as the speed limit hence making it a constant variable.
    const speedLimit = 70;
    // Setting the multiple used to calculate the points to be deducted.
    const kmAboveLimit = 5;
    // Setting the max points for a license to be suspended.
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Math.floor function helps us round off to the nearest integer.
        const points = Math.floor((speed - speedLimit) / kmAboveLimit);
        if (points > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Call the function
checkSpeed();
