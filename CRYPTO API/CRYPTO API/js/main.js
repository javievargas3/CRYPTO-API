function getcoin() {
    let coin = document.querySelector('#coinName').value;
    fetch(`http://api.coinlayer.com/api/live?access_key=2559aa7e5af8e3b03b15843a6b93cf56&symbols=${coin}&target=USD`)
    
        .then(response => response.json())
        .then(data => {
            console.log(data)
        

        let coin_rate = document.getElementById('coin')
        coin_rate.innerHTML = coin

        const price= data.rates[coin]
        let coin_price = document.getElementById('price')
        coin_price.innerHTML = price

        const rates= data.target
        let coin_rates= document.getElementById('rates')
        coin_rates.innerHTML = rates
        })
    }

