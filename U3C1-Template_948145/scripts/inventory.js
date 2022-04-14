var getData=JSON.parse(localStorage.getItem("data"));
// console.log(getData);

// console.log("******************************************")
getData.map(function(el,idx){
let box=document.createElement("div");

    
    let brand=el.brand;
    let b=document.createElement("p");
    let name=el.name;
    let n=document.createElement("p");
    let price=el.price;
    let p=document.createElement("p");
    let imgUrl=el.img_url;
    let i=document.createElement("img");
    i.style.width="150px";
    i.style.height="200px";
    i.src=imgUrl;

    b.innerText=`brand ${brand}`;
    n.innerText=name;
    p.innerText=`price   ${price} Rs.`;

    var removeBtn=document.createElement("button");
    removeBtn.innerText="remove";
    removeBtn.addEventListener("click",function(){
        // console.log(el,idx);
        remove(idx)
        
    })

    box.append(i,b,n,p,removeBtn);
    document.querySelector("#products_data").append(box);
    console.log(brand,name,price,imgUrl);
})
function remove(idx){
    console.log(idx);
    getData.splice(idx,1);
    location.reload();
    localStorage.setItem("data",JSON.stringify(getData));
}