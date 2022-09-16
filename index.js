const bar = document.querySelectorAll(".bars")

const ak = document.querySelectorAll("li")
// ak.forEach(function(item){
// console.log(item.childNodes)
// // item.addEventListener("mouseover",function(){
// //  // console.log("hahaah")
 
//  item.childNodes[1].classList.remove("hidden")
//  console.log(item.childNodes)
//  // item.style.background="white";
// })


bar.forEach(function(item){
console.log(item.classList)
item.addEventListener("mouseover",function(){
 // console.log("hahaah")
 console.log(item.clientHeight)
 if(item.clientHeight<100){
  item.style.background="white";
 }
 else if(item.clientHeight<200){
  item.style.background="green";
 }
 else if(item.clientHeight<400){
  item.style.background="blue";
 }
 item.parentNode.childNodes[1].classList.remove("hidden")
 
 // item.style.background="white";
})
item.addEventListener("mouseout",function(){
 console.log("hahaah")
 console.log()
 item.style.background="hsl(10, 79%, 66%)";
 item.parentNode.childNodes[1].classList.add("hidden")
})
})