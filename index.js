var amount,
price

function discount() {
  amount = document.getElementById('amount').value
  price = amount * 0.75
  document.getElementById('price').innerHTML = "$" + price

}
