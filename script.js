document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  const dropdownButtons = document.querySelectorAll('.dropdown .dropbtn');

  // Toggle the main menu on hamburger click
  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  dropdownButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      // Prevent default event propagation to avoid triggering document click listener
      e.stopPropagation();
  
      // Get the associated dropdown content
      const dropdownContent = this.nextElementSibling;
  
      // Toggle the 'show' class for this menu
      const isVisible = dropdownContent.classList.contains('show');
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        menu.classList.remove('show'); // Close all menus
      });
  
      // If the menu was not visible, show it
      if (!isVisible) {
        dropdownContent.classList.add('show');
      }
    });
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      navLinks.classList.remove('active');
      dropdownButtons.forEach((btn) => btn.nextElementSibling.classList.remove('show'));
    }
  });
  

  // Toggle the submenu on dropdown button click
  dropdownButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the click from bubbling to document
      const submenu = btn.nextElementSibling;
      submenu.classList.toggle('show');

      // Collapse other open submenus
      dropdownButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.nextElementSibling.classList.remove('show');
        }
      });
    });
  });
});
