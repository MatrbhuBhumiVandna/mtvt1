// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Admin Login Modal
const adminLoginLink = document.getElementById('admin-login-link');
const adminModal = document.getElementById('admin-modal');
const closeModal = document.querySelector('.close-modal');

adminLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    adminModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    adminModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === adminModal) {
        adminModal.style.display = 'none';
    }
});

// Admin Login Form
const adminLoginForm = document.getElementById('admin-login-form');

adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin6007') {
        alert('Login successful! Admin features will be added in the next version.');
        adminModal.style.display = 'none';
    } else {
        alert('Invalid username or password');
    }
});

// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will contact you soon.');
    this.reset();
});
