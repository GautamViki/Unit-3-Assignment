document.querySelector("form").addEventListener("submit", signUpFun);
let signUpArr = JSON.parse(localStorage.getItem("UserData"))||[];

function signUpFun() {
  event.preventDefault();
  // console.log("in sign fun");
  let form = document.querySelector("form");
  let name = form.name.value.trim();
  let mobile = form.mobile.value.trim();
  let email = form.email.value.trim();
  let pass = form.pass.value.trim();

  if(name=="" || mobile=="" || email =="" || pass==""){
      alert("null value");
      return;
  }

  console.log(name);
  let flag=false;
  signUpArr.map(function(el){
      if(email==el.email){
        flag=true;
      }
  })
  if(flag==false){
    let user = new userObject(name, mobile, email, pass);
    signUpArr.push(user);
  }
  else{
      alert("email is used");
  }
  
//   console.log(name, mobile, email, pass);
//   console.log(signUpArr);
  localStorage.setItem("UserData",JSON.stringify(signUpArr));

  form.name.value='';
  form.mobile.value='';
  form.email.value='';
  form.pass.value='';
}

function userObject(name, mobile, email, password) {
  this.name = name;
  this.mobile = mobile;
  this.email = email;
  this.password = password;
}
