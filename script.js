const submitButton = document.querySelector("#submitButton");
console.log(submitButton)

submitButton.addEventListener("click", function(){
    const todoInput = document.querySelector("#todoInput").value
    const todoList = document.querySelector("#todoList")
    console.log(todoInput , todoList)


    const newItem = document.createElement("li")
    newItem.textContent = todoInput
    newItem.classList.toggle("todoItem")
    const btn = document.createElement("button")
    const ferdigBtn = btn
    const slettBtn = btn
    ferdigBtn.textContent("Ferdig")
    slettBtn.textContent("Slett")
    newItem.appendChild(btn);
    todoList.appendChild(newItem);
    event.preventDefault();
})
