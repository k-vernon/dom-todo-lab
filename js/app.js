console.log("sanity")

const inputElement = document.getElementById("input")
console.log(inputElement)
const buttonElement = document.getElementById("submit-button")
console.log(buttonElement)
const ulElement = document.getElementById("todo-list")
console.log(ulElement)
const resetElement = document.getElementById("reset-button")


buttonElement.addEventListener("click", function(){
    if (inputElement.value.trim() === ""){
        return;
    }
    const li = document.createElement("li")
    console.log(li)
    li.textContent = inputElement.value
    ulElement.appendChild(li)
    inputElement.value = ""
})


resetElement.addEventListener("click", function(){
    ulElement.innerHTML = "";
})


ulElement.addEventListener("click", handleClick)

function handleClick(evt){
    evt.target.remove()
}

