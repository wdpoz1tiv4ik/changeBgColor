let colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn=document.querySelector('.btn');
let color=document.querySelector('.color');
btn.addEventListener('click',changeBgColor);
function changeBgColor(){
    let advice='#';
    for(let i=0;i<6;i++){
        advice+=colors[randomNumber()];
    }
    document.body.style.backgroundColor=advice;
    color.textContent=advice;
}

function randomNumber(){
    return Math.floor(Math.random()*colors.length)
}