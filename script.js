//when clicking button to add text/task in the list, also add an eventlistener to that text/task.
//when clicking button the text should also get pushed into an array. 
//when deleting text, delete from array.
//Check if user type something and not leaving the input empty, so no empty rows get added.
//appendChild, document.createElement(element ex "li"), .value.

const addTask = document.querySelector("#addTask");
const addBtn = document.querySelector("#addBtn");
const rmBtn = document.querySelector(".removeTaskDiv button");
const list = document.querySelector("ul");
const infoBox = document.querySelector("strong");

//click add task-button and send the input to a new list element.
addBtn.addEventListener("click", function() {

    if(addTask.value.length > 0){
        const liElement = document.createElement("li");
        liElement.innerText = addTask.value;
        list.appendChild(liElement);
        infoBox.innerText = "";

    }
    else{
        infoBox.innerText = "You can't add an empty task to the list";

    }
    

});