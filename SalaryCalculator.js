// Declaration of basicSalary, grossSalary and benefits variables
let basicSalary = Number(prompt("Enter your basic salary:"));
let benefits = Number(prompt("Enter your benefits:"));
let grossSalary = basicSalary + benefits;

if (isNaN(basicSalary) || isNaN(benefits)) {
    console.error("Please enter valid numbers for salary and benefits.");
} else {
    // Arrow function to calculate tax
    const calculateTax = (grossSalary) => {
        if (grossSalary <= 24000) {
            return grossSalary * 0.1; // 10% for salaries <= 24,000
        } else if (grossSalary <= 32333) {
            let tax = 24000 * 0.1; // Tax for the first 24,000
            tax += (grossSalary - 24000) * 0.25; // 25% for the next bracket
            return tax;
        } else {
            let tax = 24000 * 0.1; // Tax for the first 24,000
            tax += (32333 - 24000) * 0.25; // Tax for the next 8,333
            tax += (grossSalary - 32333) * 0.3; // Tax for income above 32,333
            return tax;
        }
    };

    // function to calculate NHIF deduction
    const calculateNHIF = (grossSalary) => {
        if (grossSalary <= 5999) return 150;
        if (grossSalary <= 7999) return 300;
        if (grossSalary <= 11999) return 400;
        if (grossSalary <= 14999) return 500;
        if (grossSalary <= 19999) return 600;
        if (grossSalary <= 24999) return 750;
        if (grossSalary <= 29999) return 850;
        if (grossSalary <= 34999) return 900;
        if (grossSalary <= 39999) return 950;
        return 1200; // Max NHIF for gross salaries >= 40,000
    };

    //  function to calculate NSSF deduction
    function calculateNSSF(basicSalary) {
        return basicSalary * 0.06; // 6% of basic salary
    }

    // Calculate deductions
    let payee = calculateTax(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(basicSalary);

    // Calculate Net Salary
    let netSalary = grossSalary - (payee + nhif + nssf);

    // Output results
    console.log("Gross Salary:", grossSalary);
    console.log("Payee (Tax):", payee);
    console.log("NHIF Deduction:", nhif);
    console.log("NSSF Deduction:", nssf);
    console.log("Net Salary:", netSalary);
}
