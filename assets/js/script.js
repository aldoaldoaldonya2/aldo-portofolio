
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('open');
    });

    // Filter functionality
    document.addEventListener('DOMContentLoaded', function() {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectItems = document.querySelectorAll('.project-item');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
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
  