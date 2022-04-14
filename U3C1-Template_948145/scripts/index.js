//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",addProductFun);


var productArray=JSON.parse(localStorage.getItem("data"))||[];
function addProductFun(){
    event.preventDefault();
    let brand=document.querySelector("#product_brand").value;
    let name=document.querySelector("#product_name").value;
    let price=document.querySelector("#product_price").value;
    let img_url=document.querySelector("#product_image").value;
    console.log(brand,name,price,img_url);

    function productObj(brand,name,price,img_url){
        this.name=name
        this.brand=brand
        this.price=price
        this.img_url=img_url
    }
    let pro1=new productObj(brand,name,price,img_url);
    productArray.push(pro1);
    console.log(productArray);
    localStorage.setItem("data",JSON.stringify(productArray));

}
