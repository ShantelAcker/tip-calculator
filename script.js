//variables
var totalBill = Number(document.getElementById('total').innerHTML);
var tipPercent = document.getElementById("tip").value;
var split = Number(document.getElementById("split").value);

//calculations
var tip = totalBill/.15;
var tipValue = bill * (tipPercent / 100);
var newBillEach = (bill + tipValue) / split;
var tipEach = tipValue / split;

//output
console.log(tip);