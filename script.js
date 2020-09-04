
   const apiKey = '64c4c4cc93f3761cfa9d80b9637e1c06';
   const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

function getWetherInfo(currentLoc){
   const url = `${apiBase}?q=${currentLoc}&appid=${apiKey}`;
       fetch(url)
           .then(response => response.json())
           .then(data =>
               console.log(data));
           
}
const serachBtn = document.getElementById("search_button");
serachBtn.addEventListener("click", function(){
    console.log("click")
})

getWetherInfo("New York");