document.getElementById("add-task-button").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById("task-list").appendChild(li);
    taskInput.value = ""; // Clear the input field
});
