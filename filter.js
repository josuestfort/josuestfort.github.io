document.addEventListener("DOMContentLoaded", function() {
    const filterDropdown = document.getElementById('filterDropdown');
    const filterItems = document.querySelectorAll('.filter-item');
  
    // Event listener for dropdown changes
    filterDropdown.addEventListener('change', function() {
      const selectedFilter = this.value;
  
      filterItems.forEach(item => {
        // Hide all items first
        item.classList.remove('active');
  
        // If "all" is selected, show all items
        if (selectedFilter === 'all') {
          item.classList.add('active');
        } else {
          // Otherwise, only show the selected option's content
          if (item.classList.contains(selectedFilter)) {
            item.classList.add('active');
          }
        }
      });
    });
  
    // Trigger change event on page load to show all content by default
    filterDropdown.dispatchEvent(new Event('change'));
  });
  