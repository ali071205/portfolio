
    // Function to switch between floor plans
    function openFloor(floorName) {
      // Hide all floor content
      const floorContents = document.getElementsByClassName("floor-content");
      for (let i = 0; i < floorContents.length; i++) {
        floorContents[i].classList.remove("active");
      }
      
      // Remove active class from all buttons
      const tabButtons = document.getElementsByClassName("tab-btn");
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
      }
      
      // Show the selected floor content
      document.getElementById(floorName).classList.add("active");
      
      // Add active class to the clicked button
      event.currentTarget.classList.add("active");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Highlight current section in navigation
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 300)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
