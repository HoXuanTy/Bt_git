var Data=[];
function save(){
    var arr ={
        name:document.getElementById("fname").value,
        id:document.getElementById("idp").value,
        namepro: document.getElementById("pname").value,
        qty: document.getElementById("qty").value,
        price:document.getElementById("pri_p").value
    }
    console.log(arr);
    Data.push(arr);
}

function show(){
    var ht="";
    for (i in Data){
        var n = i;
        n++;
        ht += "<tr>";
        ht += "<td>"+n+"</td>";
        ht += "<td>"+Data[i].name+ "</td>";
        ht += "<td>"+Data[i].id+"</td>";
        ht += "<td>"+Data[i].namepro+"</td>";
        ht += "<td>"+Data[i].qty+"</td>";
        ht += "<td>"+Data[i].price+"</td>";
        ht +="<td>"+parseFloat(Data[i].qty)*parseFloat(Data[i].price)+"</td>";
        ht += "</tr>"
    }
    document.getElementById("htb").innerHTML=ht;
}

function  reset(){
    document.getElementById("fname").value="";
    document.getElementById("idp").value="";
    document.getElementById("pname").value="";
    document.getElementById("qty").value="";
    document.getElementById("pri_p").value="";
}