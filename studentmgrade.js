// Javascript code for student marks using the ternary operator

function studentGrade() {
    // Input of student marks
    let marks = prompt("Enter student marks (0-100):");
    
    // Conversion of the input to a number
    marks = Number(marks);

    // Check if the input is valid
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        // Determine the grade using a ternary operator
        let grade = marks > 79 ? 'A' :
                    marks >= 60 ? 'B' :
                    marks >= 50 ? 'C' :
                    marks >= 40 ? 'D' : 'E';

        // Output the grade by using an alert that will prompt the user to input the marks and output the student grade.
        alert(`The student's grade is: ${grade}`);
    } else {
        // Incase the input is not a number or a value between 0-100 this will pop up.
        alert("Please enter a number between 0 and 100.");
    }
}

// Calling the function
studentGrade();

