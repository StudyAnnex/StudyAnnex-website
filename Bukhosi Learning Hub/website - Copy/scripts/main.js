// Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Check for saved theme preference or default to dark mode
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        if (currentTheme === 'light') {
            body.classList.add('light-mode');
            themeToggle.textContent = 'Dark';
        } else {
            themeToggle.textContent = 'Light';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeToggle.textContent = 'Dark';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.textContent = 'Light';
                localStorage.setItem('theme', 'dark');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const isLightMode = body.classList.contains('light-mode');
    
    if (window.scrollY > 100) {
        if (isLightMode) {
            header.style.background = 'rgba(248, 250, 252, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        }
    } else {
        if (isLightMode) {
            header.style.background = 'rgba(248, 250, 252, 0.95)';
            header.style.boxShadow = 'none';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Get the current year
const currentYear = new Date().getFullYear();   
// Display the year in the span with id "year"
document.getElementById('year').textContent = currentYear;