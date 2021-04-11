const clockContainer = document.querySelector(".js-clock"), 
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
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