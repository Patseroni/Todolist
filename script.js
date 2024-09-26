
const addTaskInput = document.querySelector("#addTask");
const addBtn = document.querySelector("#addBtn");
const removeTaskDiv = document.querySelector("#removeTaskDiv");
const list = document.querySelector("ul");
const infoBox = document.querySelector("strong");
const nrOfcompleted = document.querySelector("#nrOfCompleted p");
const taskArray = [];
let counter = 0;


addBtn.addEventListener("click", function () {

    if (addTaskInput.value.length > 0) {
        infoBox.innerText = "";
    }
    else {
        infoBox.innerText = "You can't add an empty task to the list";
        return;
    }

    //An li element is created in the ul-list
    const liElement = document.createElement("li");
    liElement.innerText = addTask.value;
    list.appendChild(liElement);

    //A button is created inside a div
    const removeTaskBtn = document.createElement("button");
    removeTaskBtn.innerText = "Remove";
    removeTaskDiv.appendChild(removeTaskBtn);

    addTask.value = "";
    taskArray.push(addTaskInput.value);

    liElement.addEventListener("click", function () {

        if (liElement.getAttribute("class") == "completed") {
            liElement.setAttribute("class", "");
            counter--;
        }
        else {
            liElement.setAttribute("class", "completed");
            counter++;
        }
        nrOfcompleted.textContent = `Completed tasks: ${counter}`;

    });

    removeTaskBtn.addEventListener("click", function () {
        liElement.remove();
        removeTaskBtn.remove();
    });

});









