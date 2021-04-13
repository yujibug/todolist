const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos',
    DELLINE = 'delline';
let toDos = [],
    idNumber = 1;
    clicknumber = 1;

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const check = document.createElement("input");
    const span = document.createElement("span");
    const newID = idNumber++;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    check.setAttribute("type", "checkbox");
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(delBtn);
    check.addEventListener("click", dellineToDo)
    function dellineToDo(event){
        let target = event.target,
            targetLi = target.parentNode;
            targetSpan = targetLi.querySelector("span"),
            checkBox = targetLi.querySelector("input").checked;

        if (checkBox){
            targetSpan.classList.add(DELLINE);
        } else {
            targetSpan.classList.remove(DELLINE);
        }
    }
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSumbit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });  
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSumbit)
}

init();