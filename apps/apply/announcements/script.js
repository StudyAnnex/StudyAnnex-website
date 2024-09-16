/*document.querySelectorAll('.anouncement').forEach((value)=>{
  let announceNum = value.dataset.announce;
  const descriptionElement = document.querySelector(`.js-description-${announceNum}`);
  if(descriptionElement.style.display === "none"){
    descriptionElement.style.display = "block";
  }
  else{
    descriptionElement.style.display = "none";
  }
});*/

const announcement = document.querySelector(".announcement-1")
announcement.addEventListener('click', ()=>{
  
  const description = document.querySelector('.description-1');

  if(description.style.display==="block"){
    description.style.display = "none";
  } else {
    description.style.display = "block";
  }
});


const announcement2 = document.querySelector(".announcement-2")
announcement2.addEventListener('click', ()=>{
  
  const description2 = document.querySelector('.description-2');

  if(description2.style.display==="block"){
    description2.style.display = "none";
  } else {
    description2.style.display = "block";
  }
});


const announcement3 = document.querySelector(".announcement-3")
announcement3.addEventListener('click', ()=>{
  
  const description3 = document.querySelector('.description-3');

  if(description3.style.display==="block"){
    description3.style.display = "none";
  } else {
    description3.style.display = "block";
  }
});


const announcement4 = document.querySelector(".announcement-4")
announcement4.addEventListener('click', ()=>{
  
  const description4 = document.querySelector('.description-4');

  if(description4.style.display==="block"){
    description4.style.display = "none";
  } else {
    description4.style.display = "block";
  }
});


const announcement5 = document.querySelector(".announcement-5")
announcement5.addEventListener('click', ()=>{
  
  const description5 = document.querySelector('.description-5');

  if(description5.style.display==="block"){
    description5.style.display = "none";
  } else {
    description5.style.display = "block";
  }
});


const announcement6 = document.querySelector(".announcement-6")
announcement6.addEventListener('click', ()=>{
  
  const description6 = document.querySelector('.description-6');

  if(description6.style.display==="block"){
    description6.style.display = "none";
  } else {
    description6.style.display = "block";
  }
});
