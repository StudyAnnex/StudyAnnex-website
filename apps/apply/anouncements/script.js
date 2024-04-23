document.querySelectorAll('.anouncement').forEach((value)=>{
  let announceNum = value.dataset.announce;
  const descriptionElement = document.querySelector(`.js-description-${announceNum}`);
  if(descriptionElement.style.display === "none"){
    descriptionElement.style.display = "block";
  }
  else{
    descriptionElement.style.display = "none";
  }
});