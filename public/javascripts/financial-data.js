
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json').then(response => {
    console.log(response.data)
    console.log('then')
    printTheChart(response.data.bpi)
    
}).catch(err => {
    console.log('catch')
    console.log('Erreur')
})


function printTheChart(stockData) {
    
    const date = Object.keys(stockData);
    const price = Object.values(stockData);
    console.log(date);
    console.log(price);
   
   
    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'Stock Chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: price
          }
        ]
      }
    }); // closes chart = new Chart()
  } // closes printTheChart()
  