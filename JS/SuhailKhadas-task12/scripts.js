// Principal amount
let principal = 40000;

// Rate of interest
let rate = 0.08;

// Compounded per year
let compounds = 12;

// Time in years
let years = 3;

let amount = principal * (1 + (rate / compounds)) ** (compounds * years);

let compoundInterest = amount - principal;

let message = "The compound interest after " + years + " years is: " + compoundInterest;


console.log(message);