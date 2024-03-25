const checkInput = () => {
    let input = document.querySelector('#taskInput').value;
    let buttom = document.querySelector('#taskBtn');
    if (input !== "") {
        buttom.disabled = false;
    } else {
        buttom.disabled = true;
    }
}

const addTask = () => {
    let task = document.querySelector('#taskInput').value;
    let Li = document.createElement('Li');
    Li.textContent = task;
    document.querySelector('#taskList').appendChild(Li);
    document.querySelector('#taskInput').value = "";
    document.querySelector('#taskBtn').disabled = true;
}