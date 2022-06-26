import './bootstrap';

function toggleDropdown(dropdown) {
    if (dropdown.style.display === "none")
        dropdown.style.display = "block";
    else
        dropdown.style.display = "none";
}

function createNote(list, note) {
    if (!document.getElementById(`note${note.id}`)) {
        let div = document.createElement("div");
        let delButton = document.createElement("img");
        delButton.src = "/image/erase.png";
        delButton.width = 40;
        delButton.height = 40;
        delButton.className = "delButton";
        delButton.onclick = function() {
            removeItem(note.id);
            div.remove();
        }
        div.className = "listItem";
        div.innerHTML = note.text;
        div.id = `note${note.id}`;
        div.appendChild(delButton);
        list.appendChild(div);
    }
}

async function show(list) {
    let response = await fetch(`${window.origin}/getData`, {
        method: "GET"
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return data['data'];
    });

    response.forEach(note => {
        //console.log(note);
        createNote(list, note);
    });
}

async function addItem() {
    let text = input.value;

    let response = await fetch(`${window.origin}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        body: JSON.stringify({
            text: `${text}`
            })
        }).then((res) => {
            return res.json();
        })

    input.value = '';
    console.log(`Added note: ${response.text}`);
    show(list);
    return response;
}

async function removeItem(id) {
    let response = await fetch(`${window.origin}/remove`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
        body: JSON.stringify({
            id: `${id}`
            })
        }).then((res) => {
            return res.json();
        });

    console.log(`Removed note: ${response.text}`);
    return response;
}

//document.addEventListener("DOMContentLoaded", function(event) {
//    
//});

const list = document.getElementById("list");
const addButton = document.getElementById("addButton");
const input = document.getElementById("content");
const loginButton = document.getElementById("login-button");
const dropdown = document.querySelector(".dropdown-menu");

show(list);

addButton.onclick = function() {
    addItem(list);
}

loginButton.onclick = function() {
    toggleDropdown(dropdown);
}