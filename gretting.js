const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings"),
 whatToDoForm = document.querySelector(".js-toDoForm"),
 mainDiv = document.querySelector(".main");
 outerDiv = document.querySelector(".outer");

const USER_LS = "currentUser",
 SHOWING_CN = "showing",
 MOVING_CT = "moving";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSumbit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSumbit);
}

function paintGreeting(text){
    mainDiv.classList.add(MOVING_CT);
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}, What are you doing today?` 
    whatToDoForm.classList.add(SHOWING_CN);
    outerDiv.classList.add(SHOWING_CN);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName()

}

init();