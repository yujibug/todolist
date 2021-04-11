const weatherHeader = document.querySelector(".js-weather");
const tempWeather = weatherHeader.querySelector(".tempWeather");
const location = weatherHeader.querySelector(".location");
const API_KEY = '82844600a0969a472189ceab191383f6';
const COORDS = 'coords';

weatherHeader.innerText='test';

function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        tempWeather.innerText = `${temperature}° ${json.weather[0].main}`;
        location.innerText = "test";
        // const icon = new Image();
        // icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
        // icon.classList.add("weatherIcon");
        // weather.appendChild(icon);
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords(){    
    navigator.geolocation.getCurrentPosition(handleGeoSuccess);
}


function loadCords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCords();
}

init();