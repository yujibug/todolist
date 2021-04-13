const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes 
    }`;
}

function inint(){
    getTime();
    setInterval(getTime, 1000);
}

inint()