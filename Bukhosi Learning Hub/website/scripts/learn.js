    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAEXmhnrZs2YpL-OLbZ2tp78SNVTdsi80I",
      authDomain: "bukhosi-learning-hub.firebaseapp.com",
      projectId: "bukhosi-learning-hub",
      storageBucket: "bukhosi-learning-hub.firebasestorage.app",
      messagingSenderId: "444459719123",
      appId: "1:444459719123:web:3f719cd57ecc1b5a21b726",
      measurementId: "G-V13MLEQ3KN"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    function getIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    }

    async function loadPaper() {
      const id = getIdFromUrl();
      const display = document.getElementById("paperDisplay");

      if (!id) {
        display.textContent = "No paper ID provided.";
        return;
      }

      const docRef = doc(db, "questionPapers", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        display.textContent = "Paper not found.";
        return;
      }

      const paper = docSnap.data();
      display.innerHTML = `
        <div class="paperCard">
          <h2>${paper.title}</h2>
          <p><strong>Grade:</strong> ${paper.grade} &nbsp; <strong>Subject:</strong> ${paper.subject}</p>
          <img src="${paper.questionPaperUrl}" alt="question paper" style="max-width:100%; height:auto;"><br><br>
          <button id="toggleBtn">Show Answer</button>
          <div id="answerArea" style="display:none; margin-top:10px;">
            <img src="${paper.memoImageUrl}" alt="memo" style="max-width:100%; height:auto;"><br><br>
            <video src="${paper.videoUrl}" controls style="max-width:100%;"></video>
          </div>
        </div>
      `;

      const btn = document.getElementById("toggleBtn");
      const ans = document.getElementById("answerArea");
      btn.onclick = () => {
        if (ans.style.display === "none") {
          ans.style.display = "block";
          btn.textContent = "Hide Answer";
        } else {
          ans.style.display = "none";
          btn.textContent = "Show Answer";
        }
      };
    }

    loadPaper();