const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes 
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function inint(){
    getTime();
    setInterval(getTime, 1000);
}

inint()