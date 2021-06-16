let form = document.querySelector("#form");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
console.log(list);
let myList = [];
btn.addEventListener("click", function() {
    let valueUser = form.todo.value;
    let myObj = {

        title: valueUser,
        isActive: true
    }
    if (valueUser != "") {
        myList.push(myObj)

    }
    let newDiv = document.createElement("div");
    newDiv.innerText = valueUser;
    newDiv.setAttribute("class", "element");
    list.appendChild(newDiv)


    console.log(myList);
})