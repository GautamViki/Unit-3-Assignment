// Store cart items in local storage with key: "items"
const url = "https://grocery-masai.herokuapp.com/items";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    // console.log("@@@@@@@@")
    console.log(res.data);
    displayItems(res.data);
    // console.log("********")
  })
  .catch(function (err) {
    console.log(err);
  });

function displayItems(data) {
  data.map(function (el, idx) {
    let box = document.createElement("div");
    // box.style.border = "1px solid blue";
    // box.style.alignItems="center";
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
    btn.setAttribute("id", "add_to_cart");
    
    // let button=document.getElementById("add_to_cart");
    btn.innerText = "add to cart";
    btn.addEventListener("click", function () {
      console.log(idx);
      addCartFun(idx);
    });

    detrail.append(name, price);
    box.append(img, detrail, btn);

    document.getElementById("items").append(box);
  });
  let cartArr = JSON.parse(localStorage.getItem("items")) || [];

  let count = document.getElementById("item_count");
  count.innerText = cartArr.length;
 let length=cartArr.length;
  function addCartFun(idx) {
    cartArr.push(data[idx]);
    console.log(cartArr);
    localStorage.setItem("items", JSON.stringify(cartArr));
    // length=cartArr.length;
    count.innerText = cartArr.length;
  }
  
  
}
