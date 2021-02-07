
function check()
{
    area=document.getElementById("mydiv");
    box=area.getElementsByTagName("input");
    data=area.getElementsByTagName("p");
    for(i=0;i<box.length;i++)
    {
    data[i].innerHTML=box[i].value;
    /*data[i].style.color="brown";
    data[i].style.backgroundColor="yellow";*/
    data[i].className="myclass"
    }

}