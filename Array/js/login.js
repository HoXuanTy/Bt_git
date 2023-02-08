
    var data=[{
        id:1,
        user:"hoxuanty",
        passwork:"ty123"
    },
    {
        id:2,
        user:"Thaihoang",
        passwork:"hoang123"
    },
    {
        id:3,
        user:"nhat",
        passwork:"nhat123"
    }];
function save(){
    var username=document.getElementById("Inuser").value;
    var userpasswork=document.getElementById("Inpass").value;

    for(let i;i<data.length;i++){
        if(data[i].id==1){
            alert("Dang nhap voi tai khoan 1")
        }else if(data[i].id==2){
            alert("Dang nhap voi tai khoan 2")
        }else if(data[i].id==3){
            alert("Dang nhap voi tai khoan 3")
        }
    }

}