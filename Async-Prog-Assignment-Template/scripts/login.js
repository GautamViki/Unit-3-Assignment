let user = JSON.parse(localStorage.getItem("UserData"));
console.log(user);

document.querySelector("form").addEventListener("submit", logInFun);

function logInFun() {
  event.preventDefault();
  let inputEmail = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  // console.log(inputEmail,pass);
  let flag=false;
  user.map(function (el) {
    // console.log(el.name);
   
    if(inputEmail==el.email && pass==el.password){
        console.log("success");
        window.open("index.html" ,"_self");
        flag=true;
    }
    
  });
  if(flag==false){
    alert("invalid Credentials");
}
document.querySelector("#email").value="";
document.querySelector("#pass").value="";
}
