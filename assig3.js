const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }};
    
    var buttonGetCon = document.getElementById("buttonGet")
    buttonGetCon.addEventListener("click", function(event) {
        event.preventDefault()
        var inputNegara = document.getElementById("inputCountry")
        var inputTanggal = document.getElementById("inputDate")
        negara = inputNegara.value
        tanggal = inputTanggal.value
        fetch(`https://covid-193.p.rapidapi.com/history?country=${negara}&day=${tanggal}`, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("negara").innerHTML = response.response[0].country
            document.getElementById("activeCas").innerHTML = response.response[0].cases.active
            document.getElementById("newCas").innerHTML = response.response[0].cases.new
            document.getElementById("recoveredCase").innerHTML = response.response[0].cases.recovered
            document.getElementById("totalCas").innerHTML = response.response[0].cases.total
            document.getElementById("totalDeaths").innerHTML = response.response[0].deaths.total
            document.getElementById("totalTest").innerHTML = response.response[0].tests.total 
        })
        .catch(err => {
            alert("sorry your country and date is not defined, please try again!")
        });
    })
    