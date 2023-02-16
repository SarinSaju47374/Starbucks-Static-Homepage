var link;
let circle = document.querySelector(".circle");
let choose = document.querySelector(".choose");
for(i=1;i<=3;i++){
    document.getElementById(i).addEventListener("click",(e)=>{
        link=e.target.src;
        document.getElementById("display").src=link;
        document.querySelector(".circle").style.backgroundColor=e.target.dataset.clr;
    })
}
