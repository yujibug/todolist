const body = document.querySelector("body"),
    IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `https://cdn.jsdelivr.net/gh/yujibug/todolist//images/${imgNumber}.jpg`;
    image.addEventListener("load", function(event){
        image.classList.add("bgImage");
        body.appendChild(image);
    });
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER+1);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();