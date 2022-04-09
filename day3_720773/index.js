//This information should be stored in 4 different objects.
//  All of this objects should be stored in localstorage in advance. 
// Their localstorage key should be their respective names.
//   For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )
var scopeArr = ["Scope determines the visibility and accessibility of a variable",
      "The three types of scope are local ,global,block scope",
      "Variables declared Globally (outside any function) have Global Scope",
      "Variables declared within a JavaScript function, become LOCAL to the function.",
      "Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope."]

var hoistingArr = ["Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope",
      " a variable can be declared after it has been used",
      "In other words; a variable can be used before it has been declared.",
      "JavaScript only hoists declarations, not initializations."]

var constructArr = ["A constructor is a special function that creates and initializes an object instance of a class",
      " In JavaScript, a constructor gets called when an object is created using the new keyword",
      "The purpose of a constructor is to create a new object and set values for any existing object properties.",
      "When the this keyword is used in a constructor, it refers to the newly created object:"]

var protoArr = ["The prototype is an object that is associated with every functions and objects by default in JavaScript",
      "Every function includes prototype object by default.",
      "All JavaScript objects inherit properties and methods from a prototype.",
      "The JavaScript prototype property allows you to add new properties to object constructors"]
//Information should be retrieved from localstorage only, avoid hard coding data.
localStorage.setItem("scope", JSON.stringify(scopeArr));
localStorage.setItem("hoisting", JSON.stringify(hoistingArr));
localStorage.setItem("constructorFunction", JSON.stringify(constructArr));
localStorage.setItem("prototype", JSON.stringify(protoArr));

document.querySelector("#scope").addEventListener("click", scopeFun);
var ul = document.createElement("ul");
// var sc = [];
function scopeFun() {
      ul.innerText="";
      var sc = JSON.parse(localStorage.getItem("scope"));
      for (var i = 0; i < scopeArr.length; i++) {
            var li = document.createElement("li");
            li.innerText = sc[i];
            ul.append(li);
      }
      document.querySelector("body").append(ul);
}

document.querySelector("#hoisting").addEventListener("click", hoistingFun);
function hoistingFun() {
      ul.innerText="";
      var hoist = JSON.parse(localStorage.getItem("hoisting"));
      for (let i = 0; i < hoist.length; i++) {
            var li = document.createElement("li");
            li.innerText = hoist[i];
            ul.append(li);
      }
      document.querySelector("body").append(ul);
}

document.querySelector("#constructor").addEventListener("click",constructFun);
function constructFun(){
      ul.innerText="";
      var constr=JSON.parse(localStorage.getItem("constructorFunction"));
      for(let i=0;i<constr.length;i++){
            let li=document.createElement("li");
            li.innerText=constr[i];
            ul.append(li);
      }
      document.querySelector("body").append(ul);
}

document.querySelector("#proto").addEventListener("click",protoFun);
function protoFun(){
      ul.innerText="";
      var prot=JSON.parse(localStorage.getItem("prototype"));
      for(let i=0;i<prot.length;i++){
            let li=document.createElement("li");
            li.innerText=prot[i];
            ul.append(li);
      }
      document.querySelector("body").append(ul);
}