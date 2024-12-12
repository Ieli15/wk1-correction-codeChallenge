# Code Challenge 1
##  Student Grade Generator (Toy Problem)
This JavaScript program calculates and displays a student's grade based on their marks (0-100) using a ternary operator. It prompts the user to enter marks, validates the input, and determines the grade according to predefined criteria. The resulting grade is displayed to the user via an alert.

Features

Prompts the user to input marks between 0 and 100.

Validates the input to ensure it is a valid number within the specified range.

Uses a compact and efficient ternary operator to determine the grade.

Displays the student's grade or an appropriate error message if the input is invalid.

Grade Criteria

The grades are determined as follows:

A: Marks greater than 79

B: Marks between 60 and 79 (inclusive)

C: Marks between 50 and 59 (inclusive)

D: Marks between 40 and 49 (inclusive)

E: Marks below 40

### How to Use

Open the Hjavascript file in a web browser(console) or code editor.

When prompted, enter a numeric value between 0 and 100 representing the student's marks.

The program will validate the input and display one of the following:

The student's grade (A, B, C, D, or E).

An error message if the input is invalid (e.g., not a number or outside the 0-100 range).

### Code Explanation

Input Handling

The program uses prompt() to get the user's input for the student's marks.

Number() converts the input to a numerical value.

Validation: The if statement checks if the input is:

A valid number (!isNaN(marks)), and

Within the range of 0 to 100 (marks >= 0 && marks <= 100).

If the input is invalid, an alert prompts the user to enter a valid value.

Grade Calculation: The program uses a ternary operator for concise grade evaluation based on the marks entered:

let grade = marks > 79 ? 'A' :
            marks >= 60 ? 'B' :
            marks >= 50 ? 'C' :
            marks >= 40 ? 'D' : 'E';

This ensures a single-line grade evaluation without multiple if-else blocks.

Output :The resulting grade is displayed to the user using an alert().

Sample Execution

Example 

Input: 85
Output: "The student's grade is: A"

## Speed Detector
This program determines whether a motorist is driving within the speed limit or exceeding it, and calculates demerit points based on the excess speed. If the points exceed a threshold, the motorist's license is suspended.

### Usage
Speed Input: The program prompts the user to input the motorist's speed.
Validation: The input is validated to ensure it is a positive number.
Logic:
If the speed is within the speed limit (70 km/h or less), the program outputs Ok.
If the speed exceeds the limit:
Demerit points are calculated as (speed - speedLimit) / 5, rounded down to the nearest integer.
If the points exceed 12, the program outputs License suspended.
Otherwise, it outputs the calculated points.

### Constants
speedLimit: The maximum speed limit (70 km/h).
kmAboveLimit: The number of kilometers above the speed limit that result in one demerit point (5 km).
maxPoints: The maximum number of demerit points allowed before the license is suspended (12 points).
Function
checkSpeed(): Prompts the user for the speed.
Validates the input to ensure it is a non-negative number.
Uses conditional logic to determine whether the speed is within the limit or exceeds it.
Calculates demerit points if the speed exceeds the limit and checks if the license should be suspended.
Usage
Run the script in a browser or any JavaScript runtime that supports prompt and console.log.
When prompted, enter the motorist's speed as a numeric value.
The program will output one of the following:
Ok: If the speed is within the limit.
Points: X: Where X is the number of demerit points for exceeding the speed limit.
License suspended: If the demerit points exceed the maximum allowed.

### Example usage
Input: Enter the speed of the motorist: 180
Output: License suspended

## Net Salary Calculator
### Inputs
The program prompts the user to input:

Basic Salary - The employee's base salary.
Benefits - Additional income provided as part of the employee's compensation.
Calculations
Gross Salary:
Gross Salary
=
Basic Salary
+
Benefits
Gross Salary=Basic Salary+Benefits
Deductions:
PAYE Tax: Tax is calculated based on the gross salary using the following brackets:
10% for the first 24,000.
25% for income between 24,001 and 32,333.
30% for income above 32,333.
NHIF Contributions: Deduction is based on a fixed table:
For gross salaries <= 5,999: Ksh 150.
For gross salaries >= 40,000: Ksh 1,200.
[Intermediate values vary as per the NHIF scale.]
NSSF Contribution:
NSSF Deduction +Basic Salary ×6%
NSSF Deduction=Basic Salary×6%

Net Salary= Gross Salary−PAYE Tax + NHIF Contribution + NSSF Contribution
Net Salary=Gross Salary−(PAYE Tax+NHIF Contribution+NSSF Contribution)
Outputs
The program logs the following results in the console:
Gross Salary
PAYE Tax
NHIF Deduction
NSSF Deduction
Net Salary
