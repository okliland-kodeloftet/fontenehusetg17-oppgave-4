const submitButton = document.querySelector(#submitButton);
console.log(submitButton)

submitButton.addeventListener("click", function() {
    const todoInput = document.querySelector("#todoInput")
    const todoList = document.querySelector("todoList")
    console.log(todoInput , todoList)


    const newItem = document.createElement("li")
    newItem.textContent = userInput
    inputDisplay.appendChild(newItem);
})