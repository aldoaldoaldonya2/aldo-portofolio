
    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const closeButton = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('.nav-link');

    // Toggle open/close
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
        mobileMenu.classList.toggle('translate-x-0');
        
        navLinks.forEach((link, index) => {
        setTimeout(() => link.classList.toggle('opacity-0'), index * 100);
        });
    });

    closeButton.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        navLinks.forEach(link => link.classList.add('opacity-0'));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');

        navLinks.forEach(l => l.classList.add('opacity-0'));
        });
    });

    // Filter functionality
    document.addEventListener('DOMContentLoaded', function() {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectItems = document.querySelectorAll('.project-item');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          projectItems.forEach(item => {
            if (filterValue === 'all') {
              item.classList.remove('hidden');
            } else {
              if (item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
              } else {
                item.classList.add('hidden');
              }
            }
          });
        });
      });
    });
  