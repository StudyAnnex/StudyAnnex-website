
const section1 = document.querySelector('.js-section1');
const section2 = document.querySelector('.js-section2');
const section3 = document.querySelector('.js-section3');

document.querySelector(".js-section1-button").addEventListener('click', ()=>{
  section1.style.display = "none";
  section2.style.display = "block";
  window.location.href = 'finished';
  window.location.replace('finished');
});


document.querySelector(".js-section2-button").addEventListener('click', ()=>{
  if(rating==""){

  }else{
    section2.style.display = "none";
    section3.style.display = "block";
  }
});


document.querySelector(".js-section3-button").addEventListener('click', ()=>{
  console.log('Ypoh');
});


const rate1 = document.querySelector('.rate1');
const rate2 = document.querySelector('.rate2');
const rate3 = document.querySelector('.rate3');
const rate4 = document.querySelector('.rate4');
const rate5 = document.querySelector('.rate5');

const emoji = document.querySelector('.js-emoji');

let rating = "";

rate1.addEventListener('click', ()=>{
  emoji.innerText = "😑";
  rating = "1";
});
rate2.addEventListener('click', ()=>{
  emoji.innerText = "🤐";
  rating = "2";
});
rate3.addEventListener('click', ()=>{
  emoji.innerText = "🤔";
  rating = "3";
});
rate4.addEventListener('click', ()=>{
  emoji.innerText = "😏";
  rating = "4";
});
rate5.addEventListener('click', ()=>{
  emoji.innerText = "😮";
  rating = "5";
});

const rightArrow1 = document.querySelector('.js-right1');
const rightArrow2 = document.querySelector('.js-right2');
const rightArrow3 = document.querySelector('.js-right3');

const leftContent1 = document.querySelector('.js-left1');
const leftContent2 = document.querySelector('.js-left2');
const leftContent3 = document.querySelector('.js-left3');


rightArrow1.addEventListener('click', ()=>{
  leftContent1.style.width = "0px";
});
rightArrow2.addEventListener('click', ()=>{
  leftContent2.style.width = "0px";
});
rightArrow3.addEventListener('click', ()=>{
  leftContent3.style.width = "0px";
});
