var input = document.getElementById('add-item');
var listContainer = document.getElementById('task-list');

document.getElementById("add-button").addEventListener("click", addItem); //no inline js allowed in html for chrome extensions

function addItem() {
    if (input.value === '') {
        document.getElementById('alert-message').style.display="block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        input.value = '';
        if (document.getElementById('alert-message').style.display="block") {
            document.getElementById('alert-message').style.display="none";
        }
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
})