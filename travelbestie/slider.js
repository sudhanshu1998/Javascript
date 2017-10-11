window.addEventListener("load",init);
var f_num;
var s_num;
var index =1;

function init(){
    f_num = document.getElementById("btn1");
    s_num = document.getElementById("btn2");
    buttons = document.getElementsByTagName("button");
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click",plusIndex );
    }
    autoSlide();
}
function plusIndex(n){
    index = index +1;
    showImage(index);
    
}

function showImage(n){
    var i;
    var x = document.getElementsByClassName("slides");
    if(n> x.length){
        index =1;
    };
    if(n<1){
       index = x.length
       };
    for(i=0;i<x.length;i++)
        {
            x[i].style.display="none";
        }
    x[index-1].style.display ="block";
   

}
//autoslide();
function autoSlide(){
    var i;
    var x = document.getElementsByClassName("slides");
    for(i=0;i<x.length;i++)
        {
            x[i].style.display="none";
        }
    if(index> x.length){index=1}
    x[index-1].style.display ="block";
    index ++;
    setTimeout(autoSlide,5000);
}
