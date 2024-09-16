document.addEventListener("DOMContentLoaded", function() {
    // Get input fields by their IDs
    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");

    // Attach event listeners to update values dynamically as the user types
    investmentInput.addEventListener("input", function() {
        updateInvestmentValue(this.value);
    });

    interestRateInput.addEventListener("input", function() {
        upadteInterestRateValue(this.value);
    });

    timePeriodInput.addEventListener("input", function() {
        updateTimePeriodValue(this.value);
    });

    // Set the initial values for each field (on page load)
    updateInvestmentValue(investmentInput.value);
    upadteInterestRateValue(interestRateInput.value);
    updateTimePeriodValue(timePeriodInput.value);
});

function updateInvestmentValue(value) {
    // Update the displayed investment value as the user types, formatted with commas for readability
    document.getElementById("investment-value").innerText = `${parseFloat(value).toLocaleString('en-IN')}`;
}

function upadteInterestRateValue(value) {
    // Update the displayed interest rate value and limit it to 1 decimal place
    document.getElementById("interest-rate-value").innerText = `${parseFloat(value).toFixed(1)}%`;
}

function updateTimePeriodValue(value) {
    // Simply update the time period value display
    document.getElementById("time-period-value").innerText = value;
}

function calculateFD() {
    // Get the values from input fields, converting them from string to float
    const principal = parseFloat(document.getElementById("investment").value);
    const rateOfInterest = parseFloat(document.getElementById("interest-rate").value);
    const timePeriod = parseFloat(document.getElementById("time-period").value);

    // Fixed Deposit compounding is quarterly, so n = 4 (number of compounding periods per year)
    const n = 4;

    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const totalAmount = principal * Math.pow((1 + (rateOfInterest / 100) / n), n * timePeriod);

    // Calculate interest earned
    const interestEarned = totalAmount - principal;

    // Update the display values for invested amount, estimated returns, and total value
    document.getElementById("invested-amount").innerText = `₹${principal.toLocaleString('en-IN')}`;
    document.getElementById("estimated-returns").innerText = ` ₹${Math.round(interestEarned).toLocaleString('en-IN')}`;
    document.getElementById("total-value").innerText = ` ₹${Math.round(totalAmount).toLocaleString('en-IN')}`;
}
