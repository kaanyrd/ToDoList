var xButtonDOM = document.getElementsByTagName("li");
var i;
for(i = 0; i<xButtonDOM.length; i++){
    var createSpan = document.createElement("span");
    var xButton = document.createTextNode("x");

    createSpan.className = "close";
    createSpan.append(xButton);
    xButtonDOM[i].append(createSpan);
}
var delTask = document.getElementsByClassName("close");
var i;
for(i = 0; i<delTask.length; i++){
    delTask[i].onclick = function(){
        var divDOM = this.parentElement
        divDOM.style.display = "none"
    }
}
var addButton = document.querySelector("#addButton")
addButton.addEventListener("click", addTask)
function addTask(e){
    e.preventDefault()
    var input = document.querySelector("#inputTask")
    var liDOM = document.createElement("li")
    var ulDOM = document.querySelector("#taskList")

    if(input.value === ""){
   alert("Please write a task !!!")

    }else{
        liDOM.className = "list-group-item"
        liDOM.style.borderTopRightRadius = "1.7rem"
        liDOM.style.borderBottomRightRadius = "1.8rem"
        liDOM.style.borderTopLeftRadius = ".3rem"
        liDOM.style.borderBottomLeftRadius = ".3rem"
        liDOM.style.border = "2px solid black"
        
        liDOM.innerHTML = `${input.value}<span class="close" style="display: ;">x</span>`
        input.value = ""
        ulDOM.append(liDOM)
    }


    




    var delTask = document.getElementsByClassName("close");
var i;
for(i = 0; i<delTask.length; i++){
    delTask[i].onclick = function(){
        var divDOM = this.parentElement
        divDOM.style.display = "none"
    }
}
}
var checkTask = document.querySelector("ul")
checkTask.addEventListener("click", checked)

function checked(e){
    if(e.target = "li"){
        e.target.classList.toggle("checked")
    }
}