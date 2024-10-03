let inputBox=document.querySelector("#boxInp");
let ListContainer=document.querySelector("#LC");

function addTask(){
    if(inputBox.value===''){
        document.querySelector(".error").innerHTML="You must Add Task!";
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    Ls();
}

ListContainer.addEventListener("click",function(ele){
    if(ele.target.tagName==="LI"){
        ele.target.classList.toggle("checked");
        document.getElementById('success').play();
        Ls();
    }
    else if(ele.target.tagName==="SPAN"){
        let item = ele.target.parentElement;
        item.classList.add('removed');
        setTimeout(function() {
            item.remove(); 
            Ls();
        }, 500);
    }
},false);


function Ls(){
    localStorage.setItem("data",ListContainer.innerHTML);
}
function showL(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
showL();