 function myfunction(){
    var a =document.getElementById("select1").value;
    var b =document.getElementById("select2").value;
    var t=document.getElementById("money").value;
    var resul1=0;
    var resul2=0;
    var sum=0;
    switch(a) {
        case "nuocsuoi":{
            resul1= t-15000;
            document.getElementById("resul").innerHTML=resul1;
            break;
        }
        case "coca":{
            resul1=t-17000;
            document.getElementById("resul").innerHTML=resul1;
        }
       case "7up":{
            resul1=t-17000;
            document.getElementById("resul").innerHTML=resul1;
       }
       case "pessi":{
            resul1=t-17000;
            document.getElementById("resul").innerHTML=resul1;
       }
       case "camep":{
            resul1=t-17000;
            document.getElementById("resul").innerHTML=resul1;
       }
      
    }
    switch(b) {
        case "smallfruit":{
            resul2= t-20000;
            document.getElementById("resul").innerHTML=resul2;
        }
        case "bigfruit":{
            resul2= t-30000;
            document.getElementById("resul").innerHTML=resul2;
        }
        case "grapefruit": {
            resul2= t-20000;
            document.getElementById("resul").innerHTML=resul2;
        }
    }
}