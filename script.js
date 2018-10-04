let listGro = document.getElementById("list");
let aButton = document.getElementById("add");
let cButton = document.getElementById("clear");
let tasks = document.getElementsByTagName("li");

aButton.onclick = function addItem() {
    let newThing = prompt("What do you want to add?"); // asking what the person wants

    if (newThing) { // checking if the user actually added something
        let newItemList = document.createElement("li"); //create item list
        newItemList.className = "item";
        let newItemListText = document.createTextNode(newThing); // create text
        newItemList.appendChild(newItemListText); // append text
        newItemList.onclick = function removeTask() {
            newItemList.parentNode.removeChild(newItemList);
            console.log("removed");
        }
        listGro.appendChild(newItemList); // append new element
        console.log(`New task added\nNumber of tasks in the list: ${tasks.length}`);
    } else {
        alert("You can't add nothing");
    }
};

cButton.onclick = function clearList() {
    var conf = confirm("Are you sure you want to clear the list?");
    if (conf && tasks.length != 0) {
        while(tasks.length > 0) {
            tasks[0].parentNode.removeChild(tasks[0]);
        }
    }
};