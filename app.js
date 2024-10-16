console.log("js loaded");

//document.querySelector(#box-container);
const boxContainer = document.getElementById('box-container');
const toggleBtn = document.getElementById('toggle-btn');
const switch_btn = document.getElementById('switch_btn');
const delete_btn = document.getElementById('delete_btn');
const clone_btn = document.getElementById('clone_btn');

toggleBtn.addEventListener('click', processBtnClick);
switch_btn.addEventListener('click', processBtnSwitch);
delete_btn.addEventListener('click', processBtnDelete);
clone_btn.addEventListener('click', processBtnClone);

function processBtnClick(event){
    console.log(event);
    boxContainer.classList.toggle("hidden");
}

function processBtnSwitch(event){
    console.log(event);
    boxContainer.classList.toggle("color");
}


function processBtnDelete(event){
    boxContainer.remove();

}

function processBtnClone(event){
    
}

