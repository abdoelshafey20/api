
async function get(){
    var data = await fetch("https://jsonplaceholder.typicode.com/photos");
    var result=await data.json();
    var text ="";
    for(var i=0; i<result.length;i++ ){
        var cartonna = `<div class="col-md-4  text-center mb-3">
        <img src="${result[i].url}" class="img-fluid">
        <h2>${result[i].id}</h2>
        <h5>${result[i].title}</h5>
        </div>`;
        text=text + cartonna;

    }
    document.querySelector(".test").innerHTML = text;
}
get();