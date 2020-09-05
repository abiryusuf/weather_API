    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '64c4c4cc93f3761cfa9d80b9637e1c06';
    

    function getWetherInfo(currentLoc){
        // api.openweathermap.org/data/2.5/weather?q={current location}&appid={your api key}
    const url = `${apiBase}?q=${currentLoc}&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => 
              //console.log(data))
             getData(data))
            
            
    }
    const serachBtn = document.getElementById("search_button");
    serachBtn.addEventListener("click", function(){
        //console.log("click")
        const city = document.getElementById("city").value;
        getWetherInfo(city);
    })

    function getData(data){
        document.getElementById("show_city").innerText = data.name;
        document.getElementById("show_temperature").innerText = data.main.temp;
        document.getElementById("weather_status").innerText = data.weather[0].description;
        document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById("city").value = "";
    }

getWetherInfo("New York");