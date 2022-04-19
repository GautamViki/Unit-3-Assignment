// function checkTans(){
//     return false;
// }
// const myPromise=new Promise(function(resolve,reject){
//     let tranStatus=false;

//     setTimeout(function(){
//         tranStatus=checkTans();
//         if(tranStatus===true){
//             resolve("successfull");
//         }
//         else{
//             reject("reject");
//         }
//     },3000);
// })
// // console.log("hfjshgjhjshgj");
// myPromise.then(function(fes){
//     console.log(fes);
// }).catch(function(des){
//     console.log(des);
// })

// let a="abcd";
// let p="pqrs";
// let x="xyza";

// function download(url){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log(`downloading ${url}`);
//             resolve(url);
//         },3000)
//     })
// }

// function process(url){
//     console.log(`processing ${url}`);
// }

// download(a).then(function(url){
//     process(a);

//     download(p).then(function(url){
//         process(p);

//         download(x).then(function(url){
//             process(x)
//         });
//     });
// })

// async function main(){
//     let d1=await download(a);
//     process(d1);

//     let d2=await download(p);
//     process(d2);

//     let d3=await download(x);
//     process(d3);
// }

// main();

// document.querySelector("form").addEventListener("submit",sendData);
// let orderArr=JSON.parse(localStorage.getItem("OrderData"))||[];
// // console.log(orderArr);
// function sendData(){
//     event.preventDefault();
//     let form= document.querySelector("form");

//     let img=form.img.value;

//     let name=form.name.value;

//     let order=new orderObj(img,name);
//     console.log(order);
//     orderArr.push(order);
//     localStorage.setItem("OrderData",JSON.stringify(orderArr));
//     form.img.value=null;
//     form.name.value=null;
// }
// function orderObj(img,name){
//     this.imgURL=img;
//     this.name=name;
// }
let getOrder=
[
  {
    "imgURL": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Mutton-Keema-Samosa-Recipe-1.jpg",
    "name": "Samosa"
  },
  {
    "imgURL": "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg",
    "name": "Briyani "
  },
  {
    "imgURL": "https://im.rediff.com/getahead/2020/sep/29burnt-garlic-chilli-maggi.jpg",
    "name": "Maggi "
  },
  {
    "imgURL": "https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Coffee "
  },
  {
    "imgURL": "https://img-global.cpcdn.com/recipes/7e6737e519a3e27b/400x400cq70/photo.jpg",
    "name": "Tea "
  },
  {
    "imgURL": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg&q=60",
    "name": "Sandwich "
  },
  {
    "imgURL": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/lassi.jpg",
    "name": "Lassi "
  },
  {
    "imgURL": "https://imgmedia.lbb.in/media/2019/01/5c2f84d1d5b20859433ee25e_1546618065799.jpg",
    "name": "Pizza "
  },
  {
    "imgURL": "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2019-11/15951---Vegetable-Spring-Rolls.jpg",
    "name": "Rolls "
  },
  {
    "imgURL": "https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg",
    "name": "Burger"
  }
];

// let getOrder = JSON.parse(localStorage.getItem("OrderData"));
let count=0;
function orderNow() {
    count++;
    let orderNum=`Order Number #${count}`;
  let order = document.getElementById("dish").value;
  let status = "open";
  let time = Math.random() * 10 * 1000;
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status === "open") {
        resolve(order);
      } else {
        reject();
      }
    }, time);
  });

  myPromise.then(function (res) {
    console.log(res);
    for (let i = 0; i < getOrder.length; i++) {
        let para=document.createElement("h3");
        para.innerText=orderNum;
      let name = getOrder[i].name.trim();
      let img = document.createElement("img");
      img.style.width = "350px";
      img.style.height = "450px";
      img.style.margin="auto";
      if (res === name) {
        document.getElementById("display").innerText = "";
        img.src = getOrder[i].imgURL;
        console.log(img.src);
        document.getElementById("display").append(para,img);
      }
    }
  });
}
