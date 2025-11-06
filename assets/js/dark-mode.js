/**
 * Dark Mode Toggle Functionality
 */
(function() {
  'use strict';

  // Get the current theme from localStorage or default to 'light'
  function getCurrentTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  // Set the theme and save to localStorage
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle state
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.checked = theme === 'dark';
    }
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initializeTheme() {
    const savedTheme = getCurrentTheme();
    
    // Check for system preference if no saved theme
    if (!localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setTheme(systemTheme);
    } else {
      setTheme(savedTheme);
    }
  }

  // Set up event listeners
  function setupEventListeners() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.addEventListener('change', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addListener(function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeTheme();
      setupEventListeners();
    });
  } else {
    initializeTheme();
    setupEventListeners();
  }

  // Expose functions globally for debugging
  window.darkMode = {
    toggle: toggleTheme,
    setTheme: setTheme,
    getCurrentTheme: getCurrentTheme
  };
})();