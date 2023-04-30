  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  
    // For animation 
    const mainContent = document.querySelector('.main_content');
    mainContent.style.opacity = '0';
  
    setTimeout(() => {
      mainContent.style.opacity = '1';
      mainContent.style.transform = 'translateY(0)';
    }, 500);
  });

  document.getElementById('linkedin-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(event.target.closest('a').href, '_blank');
  });