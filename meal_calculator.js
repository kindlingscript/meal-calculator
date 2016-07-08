function Diner(dishes, dinerBill) {
  this.meal = [dishes];
  this.bill = dinerBill;
};

// inherit dinerBill/bill from Diners to calculate total w/tax & tip factored in?
function totalBill(tax, tip) {
  this.tax = tax;
  this.tip = tip;
}

var Kevin = new Diner("Rib combo", 14.59);
var Pat = new Diner("Salmon & baked potato meal", 15.90);

console.log("Kevin's initial meal is " + Kevin.meal);

Kevin.meal.push("Breadsticks");
Kevin.bill += 1.00;

console.log("Kevin's meal with another dish added: " + Kevin.meal);
console.log("Kevin's bill without tax and tip: $" + Kevin.bill);
console.log("Pat's bill without tax and tip: $" + parseFloat(Pat.bill).toFixed(2));

// 9.25% tax rate, 15% tip
var payment = new totalBill(.0925, .15);

console.log("Total without tax is: $" + parseFloat(Kevin.bill + Pat.bill).toFixed(2));

console.log("Tax (9.25%) is: $" + parseFloat((Kevin.bill + Pat.bill) * payment.tax).toFixed(2));

console.log("Total with tax = $" + parseFloat(Kevin.bill + Pat.bill + ((Kevin.bill + Pat.bill) * payment.tax)).toFixed(2));

console.log("Tip (15%) is: $" + parseFloat((Kevin.bill + Pat.bill) * payment.tip).toFixed(2));

console.log("Total with tax AND tip = $" + parseFloat(Kevin.bill + Pat.bill + ((Kevin.bill + Pat.bill) * payment.tax) + ((Kevin.bill + Pat.bill) * payment.tip)).toFixed(2));
