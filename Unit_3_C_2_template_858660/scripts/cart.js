let cartItem=JSON.parse(localStorage.getItem("items"));
console.log(cartItem);



displayCart(cartItem);

function displayCart(cartItem){
    let totalPrice=0;
cartItem.map(function (el, idx) {
    totalPrice=totalPrice+el.price;
    // console.log(totalPrice);

    let box = document.createElement("div");
    box.style.textAlign = "center";
    box.style.padding="20px";
    box.style.paddingBottom="40px"

    box.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";


    let detrail = document.createElement("div");
    detrail.style.display = "flex";
    detrail.style.justifyContent = "space-between";
    detrail.style.padding = "0px 20px";

    let name = document.createElement("p");
    name.innerText = el.name;
    // console.log(el.name)

    let price = document.createElement("p");
    price.innerText = el.price;

    let img = document.createElement("img");
    img.src = el.image;
    img.style.width = "80%";
    img.style.height = "70%";

    let btn = document.createElement("button");
    btn.setAttribute("id", "remove");
    // let button=document.getElementById("add_to_cart");
    btn.innerText = "remove";
    btn.addEventListener("click", function () {
      console.log(idx);
      deleteItem(idx);
    });

    detrail.append(name, price);
    box.append(img, detrail,btn);

    document.getElementById("cart").append(box);
  })
  let displayPrice=document.getElementById("cart_total");
  displayPrice.style.textAlign="right";
  displayPrice.innerText=totalPrice;

//   console.log(totalPrice)
let count=document.getElementById("item_count");
count.innerText=cartItem.length;
}
  function deleteItem(idx){
      document.getElementById("cart").innerText="";
      cartItem.splice(idx,1);
      console.log(cartItem);
      localStorage.setItem("items",JSON.stringify(cartItem));
      displayCart(cartItem);
      
  }
  
