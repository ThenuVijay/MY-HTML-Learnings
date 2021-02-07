function changecolor(){
    date=new Date();
    seconds=date.getSeconds();
    timing=date.toLocaleTimeString();
    x=document.getElementById("P1");
    x.innerHTML=timing;
    if(seconds%2==0){
        x.style.color="white"
    }
    else{
        x.style.color="yellow" 
    }
}
function start(){
    cls=setInterval(changecolor,1000) ; 
}
function stop(){
    clearInterval(cls);  
}