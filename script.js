var totalBill = Number(document.getElementById('total').value);
var split = Number(document.getElementById("split").value);
var tip = Number(document.getElementById('tip').value);

const calculate = () => {
    var tipPercent = tip/100;
    var newBill = (totalBill * tipPercent) + totalBill;
    var billPerPerson = newBill / split;
    document.getElementById("output").innerHTML = "$" + billPerPerson.toFixed(2);
}

document.getElementById("button").addEventListener("click", calculate);
