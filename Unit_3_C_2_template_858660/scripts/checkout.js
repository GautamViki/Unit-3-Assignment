let form=document.querySelector("form");
form.addEventListener("submit",submitOrder);

function submitOrder(){
    event.preventDefault();
    console.log("*********")

    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let address=document.getElementById("address").value;
    console.log(name,number,address);

    if(name=="" || number=="" || address==""){
        alert("null value");
        return;
    }
    else{
        setTimeout(function(){
            alert("Your order is accepted");
        },0)
        setTimeout(function(){
            alert("Your order is being Packed");
        },3000)
        setTimeout(function(){
            alert("Your order is in transit");
        },8000)
        setTimeout(function(){
            alert("Your order is out for delivery");
        },10000)
        setTimeout(function(){
            alert("Order delivered")
        },12000)

    }
}