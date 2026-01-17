function addTask() {
    let project = document.getElementById("project").value;
    let task = document.getElementById("task").value;
    let deadline = document.getElementById("deadline").value;
    let status = document.getElementById("status").value;

    if (project === "" || task === "" || deadline === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("taskList");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = project;
    row.insertCell(1).innerHTML = task;
    row.insertCell(2).innerHTML = deadline;
    row.insertCell(3).innerHTML = status;

    document.getElementById("project").value = "";
    document.getElementById("task").value = "";
    document.getElementById("deadline").value = "";
}