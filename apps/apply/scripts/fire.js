const firebaseConfig = {
  apiKey: "AIzaSyDDsiamxGsv0-Yq50piyA5OpYUXKsNw1nY",
  authDomain: "study-annex-forms.firebaseapp.com",
  databaseURL: "https://study-annex-forms-default-rtdb.firebaseio.com",
  projectId: "study-annex-forms",
  storageBucket: "study-annex-forms.appspot.com",
  messagingSenderId: "910987945641",
  appId: "1:910987945641:web:251bbdd0146de7fae3ebb8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
const surveyFormDB = firebase.database().ref('surveyForm');

document.getElementById('surveyForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  //let question = getElementVal('');
  let answer = getElementVal('answer');
  console.log('Hellooooo');
  
  saveAnswer(answer);
};

const saveAnswer = (answer)=>{
  let newSurveyForm = surveyFormDB.push();

  newSurveyForm.set({
    answer : answer
    /*,
    more :efce*/
  });
}
const getElementVal = (id) =>{
  return document.getElementById(id).value;
}