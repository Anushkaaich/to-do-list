const inputBox = document.querySelector("#input-box");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector("#add-btn");
let taskCount = 0;
addBtn.addEventListener("click", addTask);
function addTask(){
    if(inputBox.value.trim() ===''){
       
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        taskCount += 1;
        updateCount();
        saveData();
    }
};

taskList.addEventListener("click", function(e){
    if(e.target.nodeName==="LI"){
        if(e.target.classList.contains("checked")){
            taskCount += 1;
        }else taskCount -= 1;
        e.target.classList.toggle("checked");
        updateCount();
        saveData();
    }else if(e.target.nodeName==="SPAN"){
        if (!e.target.parentElement.classList.contains("checked")) {
            taskCount -= 1;
        }
        e.target.parentElement.remove();
        updateCount();
        saveData();
    }
});

const count = document.querySelector(".count-value");
function updateCount() {
    if(taskCount<0) taskCount = 0;
    count.innerText = taskCount;
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
    localStorage.setItem("taskCount", taskCount);
}
function showData(){
    taskList.innerHTML = localStorage.getItem("data");
    taskCount = parseInt(localStorage.getItem("taskCount")) || 0;
    updateCount();
}   
showData();