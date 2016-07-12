function Diner(dishes, dinerBill) {
  this.meal = [dishes];
  this.bill = dinerBill;
};

function totalBill(tax, tip) {
  this.tax = tax;
  this.tip = tip;
};

var Kevin = new Diner("Rib combo", 14.59);
var Pat = new Diner("Salmon & baked potato meal", 15.90);

console.log("Kevin's initial meal is " + Kevin.meal);

// Add dish to meal
Kevin.meal.push("Breadsticks");
// Add cost of new dish to diner's bill
Kevin.bill += 1.00;

console.log("Kevin's meal with another dish added: " + Kevin.meal);
console.log("Kevin's bill without tax and tip: $" + Kevin.bill);
console.log("Pat's bill without tax and tip: $" + parseFloat(Pat.bill).toFixed(2));

// 9.25% tax rate, 15% tip
var payment = new totalBill(.0925, .15);

// toFixed(2) ensures that result is in correct format for US dollars
console.log("Total without tax for Kevin is: $" + parseFloat(Kevin.bill).toFixed(2));
console.log("Total without tax for Pat is: $" + parseFloat(Pat.bill).toFixed(2));

console.log("Total without tax for both is: $" + parseFloat(Kevin.bill + Pat.bill).toFixed(2));

console.log("Tax (9.25%) is: $" + parseFloat((Kevin.bill + Pat.bill) * payment.tax).toFixed(2));

console.log("Total with tax = $" + parseFloat(Kevin.bill + Pat.bill + ((Kevin.bill + Pat.bill) * payment.tax)).toFixed(2));

console.log("Tip (15%) is: $" + parseFloat((Kevin.bill + Pat.bill) * payment.tip).toFixed(2));

// Print total bill for everyone, tax + tip included
$('.total_bill').html("The total bill (both Pat and Kevin) with tax and tip factored in, comes to $" + parseFloat(Kevin.bill + Pat.bill + ((Kevin.bill + Pat.bill) * payment.tax) + ((Kevin.bill + Pat.bill) * payment.tip)).toFixed(2) + ".");

// Print breakdown of what each diner owes
$('.diner_breakdown tbody').html('<tr><td>Food total</td><td>$' + Kevin.bill + '</td><td>$' + Pat.bill.toFixed(2) + '</td></tr><tr><td>Tax total</td><td>$' + parseFloat(Kevin.bill * payment.tax).toFixed(2) + '</td><td>$' + parseFloat(Pat.bill * payment.tax).toFixed(2) + '</td></tr><tr><td>Tip total</td><td>$' + parseFloat(Kevin.bill * payment.tip).toFixed(2) + '</td><td>$' + (Pat.bill * payment.tip).toFixed(2) + '</td></tr>');
