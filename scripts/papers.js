import generateId from "./utils/generatingId.js";

import grade10papers2020Sept from "./data/papers/grade 10/september 2022.js";

import grade11papers2022Nov from "./data/papers/grade 11/november 2022.js";

import grade12papers2022Nov from "./data/papers/grade 12/november 2022.js";
import grade12papers2022Sep from "./data/papers/grade 12/september 2022.js";
import grade12papers2021Nov from "./data/papers/grade 12/november 2021.js";
import grade12papers2020Nov from "./data/papers/grade 12/november 2020.js";

import technicalScieProvincePapers2023Sep from "./data/papers/provincial/technical sciences.js";

import physicsProvincePapers2023Sep from "./data/papers/provincial/physical sciences.js";

import allPapers from "./data/papers/all papers.js";


createGradeSection(gradeContent(grade12papers2022Nov)+gradeContent(grade12papers2022Sep)+gradeContent(grade12papers2021Nov)+gradeContent(grade12papers2020Nov), '12');

createGradeSection(gradeContent(grade11papers2022Nov), '11');

createGradeSection(gradeContent(grade10papers2020Sept), '10');

function createGradeSection(papersListHTML, grade){
  const contentContainerElement = document.querySelector('.js-content-container');

  let sectionHTML = `<section id="section${grade}" class="section">`;

  sectionHTML += papersListHTML;

  sectionHTML += '</section>';

  contentContainerElement.innerHTML += sectionHTML;
};

function gradeContent(papersSource){
  let papersTitle = `
    <div class="js-papers-title grade-${papersSource[0]["grade"]}-title">
    ${'Grade '+papersSource[0]["grade"]+' '+ papersSource[0]["month"]+ ' '+papersSource[0]["year"]}
    </div>
  `;
  let papersList='';
  papersSource.forEach((value)=>{
    papersList +=`
      <div class="paper-container">
        <div class="paper-${value.grade} js-paper" data-catergory="${value.catergory}">
          ${value.title}
        </div>  
        <div class="download-paper-button-${value.grade} js-download-button" data-paper-id="${value.paperId}" data-catergory="${value.catergory}">
          
            <img class="download-icon" src="icons/download-icon.png">
          
        </div>
      </div>
    `;
  });

  papersTitle += papersList;

  return papersTitle;
};


document.querySelector('.js-content-container').innerHTML += `<div class="section-container js-section-container"> </div>`;

provincial(physicsProvincePapers2023Sep);
provincial(technicalScieProvincePapers2023Sep);
addEventsOnProvince();

function provincial(papersSource){
  const contentContainerElement = document.querySelector('.js-content-container');
  let papersListHTML=`
      <div id="${papersSource[0].subject}" class="provincial-section">
  `;

  papersListHTML +=`<div class="provincialTitle">`+ papersSource[0]['subject']+`</div>`;
  let i = 0;
  papersSource.forEach((value)=>{
    i++;
    papersListHTML +=`
    <div class="paper-wrapper js-paper-wrapper${value.paperId}">
      <div class="title-container">
        <span class="boldify-span">${value.province+':</span>&nbsp;'+value.year}<span class="drop-icon"><img src="../icons/angle-down round.png" class="js-drop-icon-mage" data-image="${value.paperId}"></span>
      </div>
      <div class="papers-list js-papers-list${value.paperId}">
        <hr/>
        <div class="paper js-paper">
          <a href="${value.paper1Link}" download="paper downloaded">Paper 1</a>
        </div>
        <div class="paper js-paper">
          <a href="${value.memo1Link}">Memo 1</a>
        </div>
        <div class="paper js-paper">
        <a href="${value.paper2Link}">Paper 2</a>
        </div>
        <div class="paper js-paper">
        <a href="${value.memo2Link}">Memo 2</a>
        </div>
      </div>
    </div>
    `;
  });
  papersListHTML += `
      </div>
    `;
    document.querySelector('.js-section-container').innerHTML +=papersListHTML;
  
};


function addEventsOnProvince(){
  let dropDownElement = document.querySelectorAll('.js-drop-icon-mage');

  let i = 0;
  
  dropDownElement.forEach((drop)=>{
      
    drop.addEventListener('click', ()=>{
      i++;
      i = drop.dataset.image;
      //drop.classList.add(`js-paper${i}`);
      let papersListElement = document.querySelector(`.js-papers-list${i}`);
      
      if((papersListElement.style.display === 'none')||(papersListElement.style.display==='')){
        
        papersListElement.style.display = "block";
        drop.style.rotate = '180deg';
      } else {
        papersListElement.style.display = "none";
        drop.style.rotate = '0deg';
      }
    });
  });
}



document.querySelectorAll('.js-download-button').forEach((button)=>{
  button.addEventListener('click', ()=>{
    const paperId = button.dataset.paperId;
    let matchingLink;
    let matchingTitle;
    allPapers.forEach((value)=>{
      if(value.paperId === paperId){
        matchingTitle = value.title;
        matchingLink = value.downloadLink;
        if(matchingLink.includes('.zip')){
          matchingTitle +='.zip';
        } else if(matchingLink.includes('.pdf')){
          matchingTitle +='.pdf';
        }
      }
    });

    window.location.href = matchingLink;

    
    //Note!
    //Alternative in case shit goes sideways
    /*try {
      fetch('https://cors-anywhere.herokuapp.com/'+matchingLink)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = matchingTitle;
      link.click();
    });
    } catch (error) {
      console.log('Err');
    }
    setTimeout(()=>{
      console.log(console.clear());
    },25);
    */

  });
});


//Apply paper filter

document.querySelectorAll('.js-paper').forEach((paper)=>{
  const paperCatergory = paper.dataset.catergory;
  if (paperCatergory === 'Commerce') {
    paper.classList.add('js-paper-commerce');
  } else if (paperCatergory === 'Mathematics Science') {
    paper.classList.add('js-paper-mathematics-Science');
  } else if (paperCatergory === 'Technology') {
    paper.classList.add('js-paper-technology');
  } else if (paperCatergory === 'Arts') {
    paper.classList.add('js-paper-arts');
  } else if (paperCatergory === 'Language') {
    paper.classList.add('js-paper-language');
  }
});


document.querySelectorAll('.js-download-button').forEach((button)=>{
  const paperCatergory = button.dataset.catergory;
  if (paperCatergory === 'Commerce') {
    button.classList.add('js-download-button-commerce');
  } else if (paperCatergory === 'Mathematics Science') {
    button.classList.add('js-download-button-mathematics-Science');
  } else if (paperCatergory === 'Technology') {
    button.classList.add('js-download-button-technology');
  } else if (paperCatergory === 'Arts') {
    button.classList.add('js-download-button-arts');
  } else if (paperCatergory === 'Language') {
    button.classList.add('js-download-button-language');
  }
});


const extraPaper = document.querySelector('.js-extra-papers');
extraPaper.addEventListener('click', ()=>{
  const provincialSection = document.querySelectorAll('.provincial-section');
  const provSectionCont = document.querySelector('.section-container');
  const extraSelect = document.querySelector('.extra-select');
  

  if(extraSelect.style.flexDirection !== 'row-reverse'){
    provincialSection.forEach(provSec => {
      provSec.style.display = "flex";
    });
    extraSelect.style.flexDirection = 'row-reverse';
    section12.style.display = 'none';
    section11.style.display = 'none';
    section10.style.display = 'none';
    provSectionCont.style.display = 'flex';
    extraSelect.innerHTML = 'Exams <img class="provincialIcon js-provincialIcon" src="images/icons/next.png">';
    const extraImg = document.querySelector('.js-provincialIcon');
    extraImg.style.rotate = '180deg';
  }else{
    provincialSection.forEach(provSec => {
      provSec.style.display = "none";
    });
    extraSelect.style.flexDirection = 'row';
    section12.style.display = 'block';
    section11.style.display = 'block';
    section10.style.display = 'block';
    provSectionCont.style.display = 'none';
    extraSelect.innerHTML = 'Provincial <img class="provincialIcon" src="images/icons/next.png">';
  }
  

});




const selectGrade = document.getElementById('selectGrade');
const section12 = document.getElementById('section12');
const section11 = document.getElementById('section11');
const section10 = document.getElementById('section10');
const physicalScience = document.getElementById('Physical Sciences');
const technicalScience = document.getElementById('Technical Sciences');
const provSectionCont = document.querySelector('.section-container');
const extraSelect = document.querySelector('.extra-select');
const provTitle = document.querySelector('.provincialTitle');
const techProv = document.getElementById('Technical Sciences');
const phyProv = document.getElementById('Physical Sciences');


selectGrade.addEventListener('change', function() {
  const selectedOption = selectGrade.value;
  
  if (selectedOption === '12') {
    section12.style.display="flex";
    section11.style.display="none";
    section10.style.display="none";
    provSectionCont.style.display = 'none';
  } else if (selectedOption === '11') {
    section11.style.display="flex";
    section12.style.display="none";
    section10.style.display="none";
    provSectionCont.style.display = 'none';
  } else if(selectedOption === '10'){
    section10.style.display="flex";
    section11.style.display="none";
    section12.style.display="none";
    provSectionCont.style.display = 'none';
  } else if(selectedOption === 'ProvincialPhy'){
    hideNotProvincial();

    

    const provSection = document.querySelector('.provincial-section');
    provSection.style.display = 'flex';
    techProv.style.display = 'none';
    phyProv.style.display = 'block';
  }else if(selectedOption === 'ProvincialTech'){
    hideNotProvincial();

    const provSection = document.querySelector('.provincial-section');
    provSection.style.display = 'flex';
    techProv.style.display = 'block';
    phyProv.style.display = 'none';
    
  }
  
  function hideNotProvincial(){
    
    provTitle.style.display = 'none';
    section10.style.display="none";
    section11.style.display="none";
    section12.style.display="none";
    //physicalScience.style.display="block";
    //technicalScience.style.display="block";
    provSectionCont.style.display = 'flex';
    
  }
});