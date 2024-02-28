var input = document.getElementById('add-item');
var doList = document.getElementById('task-list');
var doneList = document.getElementById('finished-list');
// const listItem = document.querySelector('li');

//document getelementbyclass 'checked' style display none
document.getElementById('finished-list').style.display="none";
document.getElementById("show-done").addEventListener("click", showDone);
document.getElementById("show-do").addEventListener("click", showDo);
document.getElementById("add-button").addEventListener("click", addItem); //no inline js allowed in html for chrome extensions

function addItem() {
    if (input.value === '') {
        document.getElementById('alert-message').style.display="block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        doList.appendChild(li);
        input.value = '';
        if (document.getElementById('alert-message').style.display="block") {
            document.getElementById('alert-message').style.display="none";
        }
    }
}

doList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
})

doneList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
})

function showDone() {
    document.getElementById('add-container').style.display="none";
    document.getElementById('task-list').style.display="none";
    document.getElementById('finished-list').style.display="block";
}

function showDo() {
    document.getElementById('add-container').style.display="flex";
    document.getElementById('task-list').style.display="block";
    document.getElementById('finished-list').style.display="none";
}