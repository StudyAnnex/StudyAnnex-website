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