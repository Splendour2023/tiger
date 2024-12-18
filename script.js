// Fetching real-time Bitcoin price
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    const priceElement = document.querySelector('#btc-price');
    priceElement.innerHTML = `$${data.bitcoin.usd}`;
  });
