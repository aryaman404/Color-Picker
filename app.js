const colors=["Green", "Red","Blue","Pink","Yellow","Purple","Orange","Cyan","Brown"];

const btn= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function(){
//get randomNumberbetween 0-3
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    

});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}