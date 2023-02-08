
const   API_URl ="https://5f871d4b49ccbb0016176fe1.mockapi.io/ai";
function callAPI(endpoint, method ="GET", body){
    return axios({
        method: method,
        url: `${API_URl}/${endpoint}`,
        data:body,
    }
    ).catch((err) => {
        console.log(err);
      });
}

var id;
function save() {
    let hotel =[];
    callAPI("hotels", "GET", null).then((res) =>{
            hotel = res.data;
    })
    for (let i = 0; i <= hotel.length; i++){
        id =i;
    }
    var name =document.getElementById("nameproduct").value;
    var price =document.getElementById("priceproduct").value  | 0;
    var note=document.getElementById("noteproduct").value;
    var detail =document.getElementById("detailproduct").value;
    let img =document.getElementById("imgproduct").value;
    let image = img.split("\\")[2];
    if (name | detail| note| (price != "")){
        var oneProduct = {
            id: id,
            name: name,
            price: price,
            note: note,
            detail: detail,
            img: "images/"+ image,
        };
        
        callAPI("hotels", "POST", oneProduct).then((response) =>  {
            show();
            alert("Them phong vao roi thang cho");
        }); 
    }   else{
        reset();    
    }

};
