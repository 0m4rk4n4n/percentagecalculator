var nn1=document.getElementById("n1");
var nn2=document.getElementById("n2");
var form=document.getElementById("cl");

form.addEventListener("submit",function()
                      {
    if(!nn1.value ||!nn2.value)
    {alert("PLease Enter valid values");
     event.preventDefault();}
     
    else if(isNaN(nn1.value) || isNaN(nn2.value))
    {
        alert("PLease Enter numbers only");
         event.preventDefault();
    }
      else if(parseFloat(nn1.value)<0|| parseFloat(nn2.value)<0)
    {
        alert("PLease Enter positive numbers only");
         event.preventDefault();
    }
      else
                      {
                         var result= (parseFloat(n1.value)/parseFloat(n2.value))*100;
                         document.getElementById("d").innerHTML="Result= "+result+"%";
                          event.preventDefault();
                      }
});
var val=document.getElementById("pr");
val.addEventListener("submit",fun2());
function fun2()
{
    window.print();
    event.preventDefault();
}