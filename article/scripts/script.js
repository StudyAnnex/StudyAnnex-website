//urgent click

document.querySelector('.js-urgent-notice').addEventListener('click', () => {
    window.open("https://my.nsfas.org.za", '_blank');
});

// Function to create article cards
function createArticleCard(article) {
  return `
    
      <article class="article-card ${article.urgent ? 'urgent' : ''}" data-category="${article.category}" onClick='window.location.href="${article.title}.html"'>
          <div class="article-header">
              <span class="category" >${article.category}</span>
              <span class="deadline">${article.deadline}</span>
          </div>
          <h3>${article.title}</h3>
          <p class="excerpt">${article.excerpt}</p>
          <div class="metadata">
              <span><i class="far fa-calendar"></i> ${article.date}</span>
              <span><i class="far fa-clock"></i> ${article.readTime}</span>
          </div>
      </article>
    
  `;
}

// Function to filter articles by category
function filterArticles(category = 'all') {
  const articlesContainer = document.querySelector('.articles');
  const filteredArticles = category === 'all' 
      ? articles 
      : articles.filter(article => article.category === category);
  
  articlesContainer.innerHTML = filteredArticles.map(article => createArticleCard(article)).join('');

  // Update active button state
  document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.category === category) {
          btn.classList.add('active');
      }
  });
}

// Initialize buttons and event listeners
function initializeCategories() {
  const categoriesContainer = document.querySelector('.categories');
  const uniqueCategories = ['all', ...new Set(articles.map(article => article.category))];
  
  // Create category buttons
  categoriesContainer.innerHTML = uniqueCategories.map(category => `
      <button class="category-btn ${category === 'all' ? 'active' : ''}" data-category="${category}">
          <i class="fas ${getCategoryIcon(category)}"></i>
          <span>${category === 'all' ? 'All' : category}</span>
      </button>
  `).join('');
  
  // Add click event listeners to buttons
  document.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', () => {
          filterArticles(button.dataset.category);
      });
  });
}

// Helper function to get icon for each category
function getCategoryIcon(category) {
  const icons = {
      'all': 'fa-list',
      'NSFAS': 'fa-graduation-cap',
      'University': 'fa-university',
      'FUNZA': 'fa-book'
  };
  return icons[category] || 'fa-list';
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
  initializeCategories();
  filterArticles('all'); // Show all articles initially
});

document.getElementById('year').textContent = new Date().getFullYear();
