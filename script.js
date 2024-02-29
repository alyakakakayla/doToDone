var input = document.getElementById('add-item');
var doList = document.getElementById('task-list');
var doneList = document.getElementById('finished-list');
const listItem = document.querySelector('li');

//document getelementbyclass 'checked' style display none
document.getElementById('finished-list').style.display="none";
document.getElementById('delete-all').style.display="none";
document.getElementById("show-done").addEventListener("click", showDone);
document.getElementById("show-do").addEventListener("click", showDo);
document.getElementById("add-button").addEventListener("click", addItem); //no inline js allowed in html for chrome extensions
document.getElementById('delete-all').addEventListener("click", deleteAll);
document.getElementById('confirm').addEventListener("click", confirmClear);
document.getElementById('deny').addEventListener("click", denyClear);

function confirmClear() {
    document.getElementById('alert-delete').style.display="none";
    let elements = document.getElementsByClassName("checked");
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    //document.getElementById('alert-empty').style.display="block";
    saveDoneData();
}

function denyClear() {
    document.getElementById('alert-delete').style.display="none";
}

function deleteAll() {
    if (doneList.children.length = 0) {
        return;
    } else if (doneList.children.length > 0){
        document.getElementById('alert-delete').style.display="block";
    }
}

function addItem() {
    if (input.value === '') {
        document.getElementById('alert-message').style.display="block";
    } else  if (!input.value.trim().length) {
        document.getElementById('alert-message').style.display="block";
        input.value = '';
    } else {
        if (input.value.length > 30) {
            let newInput = input.value.slice(0, 30);
            let li = document.createElement("li");
            li.innerHTML = newInput + "...";
            doList.appendChild(li);
            input.value = '';
        } else {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            doList.appendChild(li);
            input.value = '';
        }
        if (document.getElementById('alert-message').style.display="block") {
            document.getElementById('alert-message').style.display="none";
        }
    }
    saveDoData();
}

doList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")) {
            doneList.appendChild(e.target); 
            saveDoData();
            saveDoneData();
        }
    }
})

doneList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (!e.target.classList.contains("checked")){
            doList.appendChild(e.target);
            /* if (doneList.children.length > 0) {
                document.getElementById('alert-empty').style.display="none";
            } else {
                document.getElementById('alert-empty').style.display="block";
            } */
            saveDoData();
            saveDoneData();
        }
    }
    if (document.getElementById('alert-delete').style.display="block") {
        document.getElementById('alert-delete').style.display="none";
    }
})

function showDone() {
    document.getElementById('add-container').style.display="none";
    document.getElementById('task-list').style.display="none";
    document.getElementById('finished-list').style.display="block";
    document.getElementById('delete-all').style.display="block"; //shows clear button regardless of list items or not
    if (document.getElementById('alert-delete').style.display="block") {
        document.getElementById('alert-delete').style.display="none";
    }
    if (document.getElementById('alert-message').style.display="block") {
        document.getElementById('alert-message').style.display="none";
    }
    /* if (!document.getElementById('finished-list').hasChildNodes()){
        document.getElementById('alert-empty').style.display="block";
    } else if (document.getElementById('finished-list').hasChildNodes()) {
        document.getElementById('alert-empty').style.display="none";
    } */
    /* if (doneList.children.length > 0) {
        document.getElementById('alert-empty').style.display="none";
        displayDoneData();
    } else {
        document.getElementById('alert-empty').style.display="block";
    } */
    input.value = '';
    displayDoneData();
}

function showDo() {
    document.getElementById('alert-empty').style.display="none";
    document.getElementById('delete-all').style.display="none";
    document.getElementById('add-container').style.display="flex";
    document.getElementById('task-list').style.display="block";
    document.getElementById('finished-list').style.display="none";
    if (document.getElementById('alert-delete').style.display="block") {
        document.getElementById('alert-delete').style.display="none";
    }
    if (document.getElementById('alert-message').style.display="block") {
        document.getElementById('alert-message').style.display="none";
    }
    displayDoData();
}

//saves
function saveDoData() {
    localStorage.setItem("doData", doList.innerHTML);
}

function saveDoneData() {
    localStorage.setItem("doneData", doneList.innerHTML);
}

//loads
function displayDoData() {
    doList.innerHTML = localStorage.getItem("doData");
}

function displayDoneData() {
    doneList.innerHTML = localStorage.getItem("doneData");
}

//show do list on start
displayDoData();