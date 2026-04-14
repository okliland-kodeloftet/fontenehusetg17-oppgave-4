const submitButton = document.querySelector("#submitButton");
console.log(submitButton)

submitButton.addEventListener("click", function(){
    event.preventDefault();
    const todoInput = document.querySelector("#todoInput").value
    const todoList = document.querySelector("#todoList")
    console.log(todoInput , todoList)


    const newItem = document.createElement("li")
    newItem.textContent = todoInput
    newItem.classList.toggle("todoItem")
    const ferdigBtn = document.createElement("button")
    const slettBtn = document.createElement("button")
    ferdigBtn.textContent = "Ferdig"
    slettBtn.textContent = "Slett"
    newItem.appendChild(ferdigBtn);
    newItem.appendChild(slettBtn);
    todoList.appendChild(newItem);
})
