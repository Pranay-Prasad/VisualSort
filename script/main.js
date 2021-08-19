//dropdown navbar
function drp(){
    var x = document.getElementById("main");
    if(x.className === "navb"){
        x.className += " respo";
    }
    else{
        x.className = "navb";
    }
}
//Bars
const rang = document.querySelector(".range")
rang.addEventListener('input',function () {
    genratebars(parseInt(rang.value)+4);
})
const container = document.querySelector(".container");
function genratebars(num = 50){
    deleteChild();
    for(let i = 0; i < num;i++){
        const value = Math.floor(Math.random() * 120) + 1;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 3}px`;
        bar.style.width = `${(1 / num) * 450}px`;
        bar.style.marginLeft = `${(1 / num) * 100}px`;
        bar.style.transform = `translatez(${i * 5}px)`;
        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        bar.appendChild(barLabel);
        container.appendChild(bar);
    }
}
genratebars();
function genrate(){
    window.location.reload();
}
function deleteChild() {
    const bar = document.querySelector(".container");
    bar.innerHTML = '';
}
//sorting switch 
function bubbl(){
    document.getElementById("txt").innerHTML = "bubble";
}
function Selec(){
    document.getElementById("txt").innerHTML = "select";
}
function merg(){
    document.getElementById("txt").innerHTML = "heap";
}
function quic(){
    document.getElementById("txt").innerHTML = "quick";
}
//swith according to alo choosed
function sort(){
    var t = document.getElementById("txt").innerHTML;
    if(t == "bubble")
        bubble();
    else if(t == "select")
        selection();
    else if(t == "heap")
        heap();
    else if(t == "quick")
        quick();
    else
        alert("select a sorting algorithm");
}
//Enable and disable buttons while running the algo
function disable(){
    document.getElementById("jm1").disabled = true;
    document.getElementById("jm2").disabled = true;
    document.getElementById("jm3").disabled = true;
    document.getElementById("jm4").disabled = true;
    document.getElementById("jm5").disabled = true;
    document.getElementById("jm6").disabled = true;
    document.getElementById("jm7").disabled = true;
}

function enable(){
    document.getElementById("jm1").disabled = false;
    document.getElementById("jm2").disabled = false;
    document.getElementById("jm3").disabled = false;
    document.getElementById("jm4").disabled = false;
    document.getElementById("jm5").disabled = false;
    document.getElementById("jm6").disabled = false;
    document.getElementById("jm7").disabled = false;
}