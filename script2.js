function calculatePayment() {
    var distance = document.getElementById('distance').value;
    var ratePerKm = 7.5; 
    var amount = distance * ratePerKm;
    document.getElementById('paymentAmount').textContent = "Amount to be Paid: " + amount.toFixed(2);
  }