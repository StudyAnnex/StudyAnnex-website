    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

    // Subject icon mapping
    function getSubjectIcon(subject) {
      const icons = {
        'Mathematics': '📐',
        'Physical Science': '🔬',
        'Technical Science': '⚙️',
        'Technical Mathematics': '🧮',
        'Life Sciences': '🧬',
        'Chemistry': '⚗️',
        'Physics': '⚡',
        'Biology': '🌿'
      };
      return icons[subject] || '📚';
    }

    // Get subject class for styling
    function getSubjectClass(subject) {
      const classMap = {
        'Mathematics': 'subject-mathematics',
        'Physical Science': 'subject-physical-science',
        'Technical Science': 'subject-technical-science',
        'Technical Mathematics': 'subject-technical-mathematics'
      };
      return classMap[subject] || '';
    }

    // Generate a short description based on grade and subject
    function generateDescription(grade, subject, paperCount) {
      const descriptions = {
        'Mathematics': `Master mathematical concepts for ${grade}. Build strong foundations in algebra, geometry, and problem-solving techniques.`,
        'Physical Science': `Explore the fundamentals of physics and chemistry for ${grade}. Understand the world through scientific principles.`,
        'Technical Science': `Applied science for technical careers in ${grade}. Bridge theory and practical applications.`,
        'Technical Mathematics': `Practical mathematics for ${grade} technical students. Focus on real-world applications and problem-solving.`,
        'Life Sciences': `Study living organisms and biological processes in ${grade}. Understand life from molecular to ecosystem levels.`,
        'Chemistry': `Dive into chemical reactions and molecular structures for ${grade}. Master the science of matter and its transformations.`,
        'Physics': `Explore the fundamental laws of nature in ${grade}. From mechanics to electromagnetism and beyond.`,
        'Biology': `Comprehensive study of life and living organisms for ${grade}. From cell biology to ecology.`
      };
      
      const baseDesc = descriptions[subject] || `Comprehensive ${subject} course for ${grade} students.`;
      return `${baseDesc} ${paperCount} practice papers available.`;
    }

    async function loadAll() {
      try {
        // Show loading indicator
        document.getElementById("results").innerHTML = '<div class="loading-container"><div class="wave-loader"><div></div><div></div><div></div></div></div>';
        
        console.log("Loading question papers from Firebase...");
        const snapshot = await getDocs(collection(db, "questionPapers"));
        console.log(`Found ${snapshot.size} papers in total`);
        
        if (snapshot.size === 0) {
          document.getElementById("results").innerHTML = '<div class="no-data">No papers found. Upload some via the admin page.</div>';
          return;
        }

        // group by grade -> subject -> array of docs
        const grouped = {};
        snapshot.forEach(docSnap => {
          const data = docSnap.data();
          const grade = data.grade || "Unknown Grade";
          const subject = data.subject || "Unknown Subject";
          
          console.log(`Processing: ${grade} - ${subject} (${data.title || 'Untitled'})`);

          if (!grouped[grade]) grouped[grade] = {};
          if (!grouped[grade][subject]) grouped[grade][subject] = [];
          grouped[grade][subject].push({ id: docSnap.id, ...data });
        });
        
        console.log("Grouped data:", grouped);

        const results = document.getElementById("results");
        results.innerHTML = "";

        Object.keys(grouped).sort().forEach(grade => {
          console.log(`Creating section for grade: ${grade}`);
        // Create grade section
        const gradeSection = document.createElement("div");
        gradeSection.className = "grade-section";
        
        // Grade title
        const gradeTitle = document.createElement("h2");
        gradeTitle.className = "grade-title";
        gradeTitle.textContent = grade;
        gradeSection.appendChild(gradeTitle);

        // Courses grid for this grade
        const coursesGrid = document.createElement("div");
        coursesGrid.className = "courses-grid";

          Object.keys(grouped[grade]).sort().forEach(subject => {
            const papers = grouped[grade][subject];
            console.log(`Creating cards for: ${grade} - ${subject} (${papers.length} papers)`);
            
            // Create subject header
            const subjectHeader = document.createElement("div");
            subjectHeader.className = "subject-header";
            subjectHeader.textContent = subject;
            coursesGrid.appendChild(subjectHeader);
            
            // Create a card for each individual paper
            papers.forEach(paper => {
              console.log(`Creating card for paper: ${paper.title || 'Untitled'}`);
              
              // Create course card for individual paper
              const courseCard = document.createElement("div");
              courseCard.className = "course-card";
              
              // Course icon
              const courseIcon = document.createElement("div");
              courseIcon.className = `course-icon ${getSubjectClass(subject)}`;
              courseIcon.textContent = getSubjectIcon(subject);
              courseCard.appendChild(courseIcon);
              
              // Course title (individual paper title)
              const courseTitle = document.createElement("h3");
              courseTitle.className = "course-title";
              courseTitle.textContent = paper.title || "Untitled";
              courseCard.appendChild(courseTitle);
              
              // Course description (subject and grade info)
              const courseDesc = document.createElement("p");
              courseDesc.className = "course-description";
              courseDesc.textContent = `${subject} for ${grade}. Practice paper to help you master the concepts and prepare for your exams.`;
              courseCard.appendChild(courseDesc);
              
              // Start course button
              const startBtn = document.createElement("button");
              startBtn.className = "start-course-btn";
              startBtn.textContent = "Start Practice";
              startBtn.onclick = () => {
                window.location.href = `learn.html?id=${paper.id}`;
              };
              courseCard.appendChild(startBtn);
              
              coursesGrid.appendChild(courseCard);
            });
          });

          gradeSection.appendChild(coursesGrid);
          results.appendChild(gradeSection);
        });
        
      } catch (error) {
        console.error("Error loading activities:", error);
        document.getElementById("results").innerHTML = `<div class="no-data">Error loading papers: ${error.message}</div>`;
      }
    }

    loadAll();