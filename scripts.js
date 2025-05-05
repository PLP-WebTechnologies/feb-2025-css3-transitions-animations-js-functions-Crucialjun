function setupAnimationsAndPreferences() {
    const imageElement = document.getElementById('myAnimatedImage');
    const fadeButton = document.getElementById('fadeImageButton');
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;
  
    // Function to save user preference to localStorage
    function savePreference(key, value) {
      localStorage.setItem(key, value);
    }
  
    // Function to retrieve user preference from localStorage
    function getPreference(key) {
      return localStorage.getItem(key);
    }
  
    // Check for saved theme preference on page load
    const savedTheme = getPreference('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      if (themeToggleButton) {
        themeToggleButton.textContent = 'Light Mode';
      }
    }
  
    // Theme toggle functionality
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkMode = body.classList.contains('dark-theme');
        savePreference('theme', isDarkMode ? 'dark' : 'light');
        themeToggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
      });
    }
  
    // Trigger fade-out animation on button click
    if (fadeButton && imageElement) {
      fadeButton.addEventListener('click', () => {
        imageElement.classList.add('fade-out');
  
        // Optionally, remove the class after the animation completes
        setTimeout(() => {
          imageElement.classList.remove('fade-out');
        }, 500); // Matches the transition duration
      });
    }
  }
  
  // Call the function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', setupAnimationsAndPreferences);