var arr=[];
function AddItem(){
    var a={
        Name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        Olprice: document.getElementById('Olprice').value,
        category: document.getElementById('category').value,
        information: document.getElementById('infmtion').value,
    }
    console.log(a);
    arr.push(a);
}