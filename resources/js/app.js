import './bootstrap';

async function addItem(list) {
    let text = item.value;
    console.log(text);

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
        });
        response = await response.json();

        //if(text.length > 0){
        let div = document.createElement("div");
        let delButton = document.createElement("img");
        delButton.src = "/image/erase.png"
        delButton.width = 40;
        delButton.height = 40;
        delButton.className = "delButton";
        delButton.innerHTML = "del";
        delButton.onclick = function() {
            div.remove();
        }
        div.className = "listItem";
        div.innerHTML = text;
        div.appendChild(delButton);
        list.appendChild(div);
        item.value = '';
        return response;
        //}
}

async function show(list) {
    let response = await fetch(`${window.origin}`, {
        method: "GET"
    })

    console.log(response);
    //let div = document.createElement("div");
    //let delButton = document.createElement("img");
    //delButton.src = "assets/icon/erase.png"
    //delButton.width = 40;
    //delButton.height = 40;
    //delButton.className = "delButton";
    //delButton.innerHTML = "del";
    //delButton.onclick = function() {
    //    div.remove();
    //}
    //div.className = "listItem";
    //div.innerHTML = input.value;
    //div.appendChild(delButton);
    //list.appendChild(div);
}

var list = document.getElementById("list");
var btn = document.getElementById("addButton");
var item = document.getElementById("content");

btn.onclick = function() {
    addItem(list);
    show(list);
}