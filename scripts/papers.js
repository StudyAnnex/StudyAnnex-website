import generateId from "./utils/generatingId.js";

import grade10papers2020Sept from "./data/papers/grade 10/september 2022.js";

import grade11papers2022Nov from "./data/papers/grade 11/november 2022.js";

import grade12papers2022Nov from "./data/papers/grade 12/november 2022.js";
import grade12papers2022Sep from "./data/papers/grade 12/september 2022.js";
import grade12papers2021Nov from "./data/papers/grade 12/november 2021.js";
import grade12papers2020Nov from "./data/papers/grade 12/november 2020.js";

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
    
    //Note!
    //Alternative in case shit goes sideways
    try {
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


document.querySelector('.select-icon').addEventListener('click', ()=>{
  document.getElementById('selectGrade').touch;
});



const selectGrade = document.getElementById('selectGrade');
const section12 = document.getElementById('section12');
const section11 = document.getElementById('section11');
const section10 = document.getElementById('section10');


selectGrade.addEventListener('change', function() {
  const selectedOption = selectGrade.value;
  
  if (selectedOption === '12') {
    section12.style.display="flex";
    section11.style.display="none";
    section10.style.display="none";
  } else if (selectedOption === '11') {
    section11.style.display="flex";
    section12.style.display="none";
    section10.style.display="none";
  } else if(selectedOption === '10'){
    section10.style.display="flex";
    section11.style.display="none";
    section12.style.display="none";
  }
});