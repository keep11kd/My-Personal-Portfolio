AOS.init();
       // Initializes the AOS library, enabling animations on scroll.

       const toggleThemeBtn = document.getElementById("themeToggle");
       // Gets a reference to the theme toggle button by its ID.
       const themeIcon = toggleThemeBtn.querySelector("i");
       // Gets a reference to the <i> element (the icon) inside the theme toggle button.

       // Function to set theme based on localStorage or default
       function setTheme(theme) {
           // Defines a function to apply a given theme ('light-mode' or 'dark-mode').
           if (theme === "light-mode") {
               // If the requested theme is light mode:
               document.body.classList.remove("dark-mode");
               // Removes the 'dark-mode' class from the body.
               document.body.classList.add("light-mode");
               // Adds the 'light-mode' class to the body.
               themeIcon.classList.remove("fa-moon");
               // Changes the icon from moon to sun.
               themeIcon.classList.add("fa-sun");
               // Adds the sun icon class.
               toggleThemeBtn.classList.add("active");
               // Adds 'active' class to the button, which moves the icon.
           } else {
               // If the requested theme is dark mode:
               document.body.classList.remove("light-mode");
               // Removes the 'light-mode' class from the body.
               document.body.classList.add("dark-mode");
               // Adds the 'dark-mode' class to the body.
               themeIcon.classList.remove("fa-sun");
               // Changes the icon from sun to moon.
               themeIcon.classList.add("fa-moon");
               // Adds the moon icon class.
               toggleThemeBtn.classList.remove("active");
               // Removes 'active' class from the button, moving the icon back.
           }
           localStorage.setItem("theme", theme);
           // Stores the current theme preference in local storage for persistence.
       }

       // Event listener for theme toggle button
       toggleThemeBtn.addEventListener("click", () => {
           // Adds a click event listener to the theme toggle button.
           if (document.body.classList.contains("dark-mode")) {
               // If the body currently has 'dark-mode':
               setTheme("light-mode");
               // Call setTheme to switch to light mode.
           } else {
               // Otherwise (if it has 'light-mode'):
               setTheme("dark-mode");
               // Call setTheme to switch to dark mode.
           }
       });

       // Apply theme on initial load
       const savedTheme = localStorage.getItem("theme");
       // Retrieves the saved theme preference from local storage.
       if (savedTheme) {
           // If a theme preference is found:
           setTheme(savedTheme);
           // Apply the saved theme.
       } else {
           // Default to dark mode if no theme is saved
           setTheme("dark-mode");
           // If no theme is saved, set dark mode as default.
       }


       const lines = [
           // Array of strings for the typing animation.
           "function developFeature() {",
           "   makeItWork();",
           "   makeItRight();",
           "   makeItFast();",
           "}"
       ];

       const target = document.getElementById("typing-code");
       // Gets a reference to the <pre> element where the code will be typed.
       let lineIndex = 0,
           charIndex = 0;
       // Initializes indices for current line and character.

       function typeLine() {
           // Function to simulate typing a line of code.
           if (lineIndex < lines.length) {
               // If there are more lines to type:
               if (charIndex < lines[lineIndex].length) {
                   // If there are more characters in the current line:
                   target.textContent += lines[lineIndex].charAt(charIndex++);
                   // Appends the current character to the target element's text content.
                   setTimeout(typeLine, 50);
                   // Calls typeLine again after a short delay to type the next character.
               } else {
                   // If the current line is fully typed:
                   target.textContent += "\n";
                   // Adds a newline character.
                   lineIndex++;
                   // Moves to the next line.
                   charIndex = 0;
                   // Resets character index for the new line.
                   setTimeout(typeLine, 300);
                   // Calls typeLine again after a longer delay to start the next line.
               }
           } else {
               // If all lines are typed:
               const cursor = document.createElement("span");
               // Creates a new <span> element for the blinking cursor.
               cursor.classList.add("cursor");
               // Adds the 'cursor' class for styling.
               target.appendChild(cursor);
               // Appends the cursor to the target element.
           }
       }

       window.addEventListener("DOMContentLoaded", typeLine);
       // Starts the typing animation once the DOM is fully loaded.

       const backToTopBtn = document.getElementById("backToTopBtn");
       // Gets a reference to the "Back to Top" button.
       window.addEventListener("scroll", () => {
           // Adds a scroll event listener to the window.
           backToTopBtn.style.display = window.scrollY > window.innerHeight * 0.5 ? "block" : "none";
           // Shows the button if scrolled more than half the viewport height, otherwise hides it.
       });

       backToTopBtn.addEventListener("click", () => {
           // Adds a click event listener to the "Back to Top" button.
           window.scrollTo({
               top: 0,
               behavior: "smooth"
           });
           // Scrolls the window smoothly to the top (position 0).
       });

       // HEADER SCROLL BEHAVIOR
       const header = document.querySelector('[data-header]');
       // Gets a reference to the header element using its data attribute.
       window.addEventListener("scroll", () => {
           // Adds a scroll event listener to the window.
           header.classList.toggle("active", window.scrollY >= 10);
           // Toggles the 'active' class on the header if the scroll position is 10px or more from the top.
       });

       // LANGUAGE SWITCHER JAVASCRIPT
       const languageSelect = document.getElementById('lang');
       // Gets a reference to the language select dropdown.

       if (languageSelect) {
           // Checks if the language select element exists.
           languageSelect.addEventListener('change', (event) => {
               // Adds a 'change' event listener to the language select.
               const selectedLanguage = event.target.value;
               // Gets the value of the selected option.
               console.log(`Selected language: ${selectedLanguage}`);
               // Logs the selected language to the console.
               // Add your actual language switching logic here.
               // This is a placeholder for future language switching functionality.
           });
       }

	   
	   //Note: however the active nav is not working here in MVC but working in simple portfolio test
       // Active Navigation on Scroll - Robust and Smooth Implementation
       const sections = document.querySelectorAll('section[id]');
       // Selects all <section> elements that have an `id` attribute.
       const navLinks = document.querySelectorAll('.nav-items a');
       // Selects all navigation links within the header.
       const headerElement = document.querySelector('header');
       // Gets a reference to the header element.

       let currentActiveSectionId = null;
       // Variable to keep track of the currently active section's ID.

       const updateActiveNavLink = (activeId) => {
           // Function to update the active navigation link.
           if (currentActiveSectionId === activeId) return;
           // If the active section hasn't changed, do nothing.

           navLinks.forEach(link => link.classList.remove('active-nav'));
           // Removes the 'active-nav' class from all navigation links.
           const correspondingLink = document.querySelector(`.nav-items a[href="#${activeId}"]`);
           // Finds the navigation link corresponding to the active section ID.
           if (correspondingLink) {
               // If a corresponding link is found:
               correspondingLink.classList.add('active-nav');
               // Adds the 'active-nav' class to it.
               console.log(`Active link set to: #${activeId}`);
               // Logs the active link for debugging.
               currentActiveSectionId = activeId;
               // Updates the current active section ID.
           }
       };

       // Use a higher threshold to ensure a significant portion of the section is visible
       // before it's considered active.
       // rootMargin is set to dynamically subtract the header height, so the intersection
       // calculation effectively starts below the header.
       const observerOptions = {
           root: null, // viewport
           // The root is the viewport, meaning intersections are detected relative to the browser window.
           rootMargin: `-${headerElement.offsetHeight + 1}px 0px 0px 0px`,
           // Adjusts the viewport's top margin by the header's height + 1px. This makes the intersection
           // calculation effectively start just below the fixed header, preventing header overlap issues.
           threshold: 0.7 // Trigger when 70% of the section is visible within the adjusted viewport
           // The callback will be executed when 70% of the target element is visible.
       };

       const sectionObserver = new IntersectionObserver((entries, observer) => {
           // Creates a new IntersectionObserver instance.
           let newActiveSectionId = null;
           // Variable to store the ID of the new active section.
           let maxIntersectionRatio = 0;
           // Variable to track the highest intersection ratio.

           entries.forEach(entry => {
               // Iterates over each entry (section) being observed.
               // Only consider sections that are currently intersecting and have a higher ratio
               if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                   // If the section is currently intersecting and its intersection ratio is higher than previous ones:
                   maxIntersectionRatio = entry.intersectionRatio;
                   // Update the max ratio.
                   newActiveSectionId = entry.target.id;
                   // Set this section as the potential new active section.
               }
           });

           // If a new active section is clearly identified, update the navigation
           if (newActiveSectionId) {
               // If a new active section was found:
               updateActiveNavLink(newActiveSectionId);
               // Update the navigation link.
           } else {
               // Fallback for when no section meets the high threshold (e.g., between sections)
               // or at the very top/bottom of the page.
               // We want to keep the previously active link or default to 'home' if at the top.
               const scrolledY = window.scrollY;
               // Get the current vertical scroll position.
               const headerBottom = headerElement.offsetHeight;
               // Get the height of the header.

               // If we are at the very top of the page, ensure 'home' is active
               if (scrolledY <= headerBottom) {
                   // If scrolled to the very top (or within header height):
                   updateActiveNavLink('home');
                   // Set 'home' as the active link.
               } else if (!newActiveSectionId && currentActiveSectionId) {
                   // If no new section is clearly active (didn't meet threshold), but there was a previously active section:
                   // try to find the section whose top is just below the header.
                   let closestSectionId = null;
                   // Variable to store the ID of the closest section.
                   let minDistance = Infinity;
                   // Variable to track the minimum distance.

                   sections.forEach(section => {
                       // Iterate over all sections.
                       const rect = section.getBoundingClientRect();
                       // Get the size and position of the section relative to the viewport.
                       // Check if the section's top is visible in the viewport and below the header
                       if (rect.top < window.innerHeight && rect.bottom > headerBottom) {
                           // If the section is visible in the viewport and extends below the header:
                           const distance = Math.abs(rect.top - headerBottom);
                           // Calculate the absolute distance between the section's top and the header's bottom.
                           if (distance < minDistance) {
                               // If this distance is smaller than the current minimum:
                               minDistance = distance;
                               // Update minimum distance.
                               closestSectionId = section.id;
                               // Set this section as the closest.
                           }
                       }
                   });
                   if (closestSectionId && closestSectionId !== currentActiveSectionId) {
                       // If a closest section is found and it's different from the current active one:
                       updateActiveNavLink(closestSectionId);
                       // Update the navigation link.
                   }
               }
           }
       }, observerOptions);

       // Observe each section
       sections.forEach(section => {
           // Loops through all sections.
           sectionObserver.observe(section);
           // Starts observing each section for intersection changes.
       });

       // Initial check on page load to set the correct active link
       const setInitialActiveLink = () => {
           // Function to set the active link on initial page load.
           let initialActiveSectionId = null;
           // Variable to store the ID of the initially active section.
           let maxInitialIntersectionRatio = 0;
           // Variable to track the highest initial intersection ratio.
           const headerBottom = headerElement.offsetHeight;
           // Get the height of the header.

           sections.forEach(section => {
               // Iterates over all sections.
               const rect = section.getBoundingClientRect();
               // Gets the size and position of the section.
               if (rect.top < window.innerHeight && rect.bottom > headerBottom) {
                   // If the section is visible in the viewport and extends below the header:
                   const intersectionHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, headerBottom);
                   // Calculates the height of the intersecting part of the section.
                   const sectionHeight = rect.height;
                   // Gets the total height of the section.
                   const intersectionRatio = sectionHeight > 0 ? intersectionHeight / sectionHeight : 0;
                   // Calculates the intersection ratio.

                   if (intersectionRatio > maxInitialIntersectionRatio) {
                       // If this ratio is higher than previous ones:
                       maxInitialIntersectionRatio = intersectionRatio;
                       // Update max ratio.
                       initialActiveSectionId = section.id;
                       // Set this section as the initially active one.
                   }
               }
           });

           if (initialActiveSectionId) {
               // If an initially active section was found:
               updateActiveNavLink(initialActiveSectionId);
               // Update the navigation link.
           } else {
               // Fallback for very top of the page or if no section is sufficiently visible
               if (window.scrollY === 0) {
                   // If scrolled to the very top:
                   updateActiveNavLink('home');
                   // Set 'home' as active.
               }
           }
       };

       // Call initial check after DOM content is loaded
       document.addEventListener('DOMContentLoaded', setInitialActiveLink);
       // Calls the function once the HTML document has been completely loaded and parsed.
       // Also call on window load to ensure all elements are rendered and header height is accurate
       window.addEventListener('load', setInitialActiveLink);
       // Calls the function after the entire page (including images, scripts, etc.) has loaded.
       // Add a debounced scroll listener as a fallback for very rapid scrolling or edge cases
       let scrollTimeout;
       // Variable to hold the timeout ID for debouncing.
       window.addEventListener('scroll', () => {
           // Adds a scroll event listener.
           clearTimeout(scrollTimeout);
           // Clears any existing timeout.
           scrollTimeout = setTimeout(setInitialActiveLink, 100);
           // Sets a new timeout to call setInitialActiveLink after 100ms (debouncing).
       });

       document.addEventListener('DOMContentLoaded', function () {
           // Ensures the script runs after the DOM is fully loaded.
           const viewMoreBtn = document.getElementById('viewMoreBtn');
           // Gets a reference to the "View More Projects" button.
           const hiddenProjects = document.querySelectorAll('.project-hidden');
           // Selects all elements with the 'project-hidden' class.
           const initialVisibleCount = 3; // This is the count of initially visible projects
           // Defines how many projects should be visible initially.

           // Initially hide projects beyond the first 'initialVisibleCount'
           // This loop ensures only projects that are actually hidden by the 'project-hidden' class are affected.
           // The 'project-hidden' class is already applied in HTML for projects beyond the initial 3.
           // So, no need to re-hide them here explicitly unless you want to dynamically control which are hidden.
           // For this fix, we assume 'project-hidden' class is correctly applied in HTML.

           viewMoreBtn.addEventListener('click', function () {
               // Adds a click event listener to the "View More Projects" button.
               // Check if any hidden projects are currently displayed (meaning "View More" was clicked)
               const areProjectsVisible = Array.from(hiddenProjects).some(project => project.style.display === 'grid');
               // Checks if any of the initially hidden projects are currently displayed (meaning they were revealed).

               if (!areProjectsVisible) {
                   // If projects are hidden, show them
                   hiddenProjects.forEach(project => {
                       // Loops through all hidden projects.
                       project.style.display = 'grid'; // Display as grid item
                       // Changes their display property to 'grid' to make them visible.
                   });
                   viewMoreBtn.textContent = 'View Less Projects';
                   // Changes the button text to "View Less Projects".
               } else {
                   // If projects are visible, hide them
                   hiddenProjects.forEach(project => {
                       // Loops through all hidden projects.
                       project.style.display = 'none';
                       // Hides them by setting display to 'none'.
                   });
                   viewMoreBtn.textContent = 'View More Projects';
                   // Changes the button text back to "View More Projects".
               }
           });
       });


       // NEW JAVASCRIPT FOR SKILLS SECTION REDESIGN
       document.addEventListener('DOMContentLoaded', function () {
           // Ensures the script runs after the DOM is fully loaded.
           const skillsSection = document.getElementById('skills');
           // Gets a reference to the skills section.
           const skillsGrid = document.getElementById('skills-grid-new');
           // Gets a reference to the skills grid.
           const toolsGrid = document.getElementById('tools-grid-new');
           // Gets a reference to the tools grid.
           const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
           // Selects all toggle buttons.
           const toggleBox = document.querySelector('[data-toggle-box]');
           // Gets a reference to the toggle switch container.
           const skillsViewMoreBtn = document.getElementById('skillsViewMoreBtn');
           // Gets a reference to the "View More Skills" button.
           const toolsViewMoreBtn = document.getElementById('toolsViewMoreBtn');
           // Gets a reference to the "View More Tools" button.

           const initialSkillsVisibleCount = 6; // Number of skills to show initially
           // Defines the number of skills to show initially.
           const initialToolsVisibleCount = 6; // Number of tools to show initially
           // Defines the number of tools to show initially.

           // Function to hide skills/tools beyond the initial count
           function hideExtraSkills(gridElement, initialCount) {
               // Function to hide skill/tool cards beyond a specified count.
               const skillCards = Array.from(gridElement.querySelectorAll('.skill-card-new'));
               // Converts NodeList of skill cards to an array.
               skillCards.forEach((card, index) => {
                   // Iterates through each skill card.
                   if (index >= initialCount) {
                       // If the card's index is beyond the initial count:
                       card.classList.add('skill-hidden');
                       // Adds the 'skill-hidden' class to hide it.
                   } else {
                       card.classList.remove('skill-hidden');
                       // Ensures cards within the initial count are visible.
                   }
               });
           }

           // Function to animate progress bars for a given grid
           function animateProgressBars(gridElement) {
               // Function to animate the progress bars within a given grid.
               const skillCards = gridElement.querySelectorAll('.skill-card-new:not(.skill-hidden)');
               // Selects only the visible skill cards within the grid.
               skillCards.forEach(card => {
                   // Iterates through each visible skill card.
                   const percent = parseInt(card.getAttribute('data-skill-percent'));
                   // Gets the target percentage from the 'data-skill-percent' attribute.
                   const progressBarFill = card.querySelector('.progress-bar-fill-new');
                   // Gets the progress bar fill element.

                   // Reset width to 0 before animating to ensure animation plays every time
                   progressBarFill.style.transition = 'none';
                   // Temporarily disables transition for immediate width reset.
                   progressBarFill.style.width = '0%';
                   // Resets the width to 0.
                   void progressBarFill.offsetWidth;
                   // Forces a reflow to apply the 0% width immediately.
                   progressBarFill.style.transition = 'width 1s ease-out';
                   // Re-enables the transition for the animation.

                   // Animate to target percentage
                   progressBarFill.style.width = `${percent}%`;
                   // Sets the width to the target percentage, triggering the animation.
               });
           }

           // Intersection Observer to trigger animations when skills section is in view
           const skillsObserver = new IntersectionObserver((entries, observer) => {
               // Creates an IntersectionObserver to detect when the skills section enters/leaves the viewport.
               entries.forEach(entry => {
                   // Iterates over each entry (the skills section).
                   if (entry.isIntersecting) {
                       // If the skills section is currently visible in the viewport:
                       // Animate the currently active grid when the section comes into view
                       const activeGrid = document.querySelector('.skills-grid-new.active-grid');
                       // Finds the currently active skill/tool grid.
                       if (activeGrid) {
                           // If an active grid is found:
                           animateProgressBars(activeGrid);
                           // Animate its progress bars.
                       }
                   } else {
                       // Optionally reset progress bars when section leaves view
                       skillsGrid.querySelectorAll('.progress-bar-fill-new').forEach(fill => {
                           fill.style.width = '0%';
                       });
                       // Resets all skills progress bars to 0%.
                       toolsGrid.querySelectorAll('.progress-bar-fill-new').forEach(fill => {
                           fill.style.width = '0%';
                       });
                       // Resets all tools progress bars to 0%.
                   }
               });
           }, {
               threshold: 0.3 // Trigger when 30% of the section is visible
               // The callback will fire when 30% of the skills section is visible.
           });

           skillsObserver.observe(skillsSection);
           // Starts observing the skills section.

           // Toggle functionality for Skills/Tools
           toggleBtns.forEach(btn => {
               // Adds a click event listener to each toggle button.
               btn.addEventListener('click', () => {
                   const targetType = btn.getAttribute('data-toggle-btn');
                   // Gets the type of grid to show ('skills' or 'tools').

                   // Update button active state
                   toggleBtns.forEach(b => b.classList.remove('active'));
                   // Removes 'active' class from all toggle buttons.
                   btn.classList.add('active');
                   // Adds 'active' class to the clicked button.

                   // Reset "View More" button text and state for both using innerHTML
                   skillsViewMoreBtn.innerHTML = 'View More Skills <i class="fas fa-chevron-down"></i>';
                   // Resets the "View More Skills" button text.
                   toolsViewMoreBtn.innerHTML = 'View More Tools <i class="fas fa-chevron-down"></i>';
                   // Resets the "View More Tools" button text.


                   if (targetType === 'tools') {
                       // If 'tools' button was clicked:
                       toggleBox.classList.add('active');
                       // Activates the toggle box (moves the indicator).
                       skillsGrid.classList.remove('active-grid');
                       // Hides the skills grid.
                       toolsGrid.classList.add('active-grid');
                       // Shows the tools grid.
                       hideExtraSkills(toolsGrid, initialToolsVisibleCount);
                       // Hides extra tool cards beyond the initial count.
                       animateProgressBars(toolsGrid);
                       // Animates the progress bars for the visible tool cards.
                       toolsViewMoreBtn.style.display = (Array.from(toolsGrid.querySelectorAll('.skill-card-new')).length > initialToolsVisibleCount) ? 'inline-flex' : 'none';
                       // Shows "View More Tools" button if there are more tools than initially visible.
                       skillsViewMoreBtn.style.display = 'none';
                       // Hides the "View More Skills" button.
                   } else {
                       // If 'skills' button was clicked:
                       toggleBox.classList.remove('active');
                       // Deactivates the toggle box (moves the indicator back).
                       toolsGrid.classList.remove('active-grid');
                       // Hides the tools grid.
                       skillsGrid.classList.add('active-grid');
                       // Shows the skills grid.
                       hideExtraSkills(skillsGrid, initialSkillsVisibleCount);
                       // Hides extra skill cards beyond the initial count.
                       animateProgressBars(skillsGrid);
                       // Animates the progress bars for the visible skill cards.
                       skillsViewMoreBtn.style.display = (Array.from(skillsGrid.querySelectorAll('.skill-card-new')).length > initialSkillsVisibleCount) ? 'inline-flex' : 'none';
                       // Shows "View More Skills" button if there are more skills than initially visible.
                       toolsViewMoreBtn.style.display = 'none';
                       // Hides the "View More Tools" button.
                   }
               });
           });

           // Initial setup for skills and tools visibility and view more buttons
           hideExtraSkills(skillsGrid, initialSkillsVisibleCount);
           // Hides extra skills on initial load.
           hideExtraSkills(toolsGrid, initialToolsVisibleCount);
           // Hides extra tools on initial load.

           // Show/hide view more button based on initial visible count
           skillsViewMoreBtn.style.display = (Array.from(skillsGrid.querySelectorAll('.skill-card-new')).length > initialSkillsVisibleCount) ? 'inline-flex' : 'none';
           // Sets initial display for "View More Skills" button.
           toolsViewMoreBtn.style.display = 'none'; // Tools grid is initially hidden
           // Ensures "View More Tools" button is hidden initially.

           // Add event listeners for the new view more buttons
           skillsViewMoreBtn.addEventListener('click', function () {
               // Adds a click event listener to the "View More Skills" button.
               const hiddenSkills = skillsGrid.querySelectorAll('.skill-card-new.skill-hidden');
               // Selects currently hidden skill cards.
               const isShowingAll = hiddenSkills.length === 0;
               // Checks if all skills are currently shown.

               if (isShowingAll) {
                   // Currently showing all, so hide extras
                   hideExtraSkills(skillsGrid, initialSkillsVisibleCount);
                   // Hides extra skills.
                   skillsViewMoreBtn.innerHTML = 'View More Skills <i class="fas fa-chevron-down"></i>';
                   // Changes button text to "View More Skills".
               } else {
                   // Currently showing only initial, so show all
                   Array.from(skillsGrid.querySelectorAll('.skill-card-new')).forEach(card => {
                       card.classList.remove('skill-hidden');
                   });
                   // Shows all skill cards.
                   animateProgressBars(skillsGrid);
                   // Animates newly revealed progress bars.
                   skillsViewMoreBtn.innerHTML = 'View Less Skills <i class="fas fa-chevron-up"></i>';
                   // Changes button text to "View Less Skills".
               }
           });

           toolsViewMoreBtn.addEventListener('click', function () {
               // Adds a click event listener to the "View More Tools" button.
               const hiddenTools = toolsGrid.querySelectorAll('.skill-card-new.skill-hidden');
               // Selects currently hidden tool cards.
               const isShowingAll = hiddenTools.length === 0;
               // Checks if all tools are currently shown.

               if (isShowingAll) {
                   // Currently showing all, so hide extras
                   hideExtraSkills(toolsGrid, initialToolsVisibleCount);
                   // Hides extra tools.
                   toolsViewMoreBtn.innerHTML = 'View More Tools <i class="fas fa-chevron-down"></i>';
                   // Changes button text to "View More Tools".
               } else {
                   // Currently showing only initial, so show all
                   Array.from(toolsGrid.querySelectorAll('.skill-card-new')).forEach(card => {
                       card.classList.remove('skill-hidden');
                   });
                   // Shows all tool cards.
                   animateProgressBars(toolsGrid);
                   // Animates newly revealed progress bars.
                   toolsViewMoreBtn.innerHTML = 'View Less Tools <i class="fas fa-chevron-up"></i>';
                   // Changes button text to "View Less Tools".
               }
           });


           // Initial animation when the page loads if the skills section is already in view
           // This handles cases where the user loads the page scrolled down to the skills section
           const initialCheckObserver = new IntersectionObserver((entries, observer) => {
               // Creates an IntersectionObserver for an initial check.
               entries.forEach(entry => {
                   // Iterates over entries.
                   if (entry.isIntersecting) {
                       // If the skills section is intersecting:
                       const activeGrid = document.querySelector('.skills-grid-new.active-grid');
                       // Finds the active grid.
                       if (activeGrid) {
                           // If found:
                           animateProgressBars(activeGrid);
                           // Animates its progress bars.
                       }
                       observer.unobserve(skillsSection);
                       // Stops observing the skills section once animated to prevent re-animation.
                   }
               });
           }, {
               threshold: 0.1 // A smaller threshold for initial check
               // Fires when 10% of the section is visible.
           });
           initialCheckObserver.observe(skillsSection);
           // Starts observing the skills section for the initial check.
       });


       // Contact Form Submission (client-side only for demo)
       const contactForm = document.getElementById('contactForm');
       // Gets a reference to the contact form.
       const formMessage = document.getElementById('formMessage');
       // Gets a reference to the form message display area.

       if (contactForm && formMessage) {
           // Checks if both form and message elements exist.
           contactForm.addEventListener('submit', function (event) {
               // Adds a submit event listener to the form.
               event.preventDefault();
               // Prevents the default form submission behavior (page reload).

               // Simulate form submission success/failure
               const isSuccess = Math.random() > 0.5; // 50% chance of success
               // Simulates a 50% chance of successful submission.

               formMessage.classList.remove('success', 'error', 'show');
               // Resets all success, error, and show classes from the message.

               if (isSuccess) {
                   // If submission is simulated as successful:
                   formMessage.textContent = 'Message sent successfully!';
                   // Sets success message text.
                   formMessage.classList.add('success', 'show');
                   // Adds 'success' and 'show' classes.
                   contactForm.reset();
                   // Clears the form fields.
               } else {
                   // If submission is simulated as failed:
                   formMessage.textContent = 'Failed to send message. Please try again.';
                   // Sets error message text.
                   formMessage.classList.add('error', 'show');
                   // Adds 'error' and 'show' classes.
               }

               // Hide message after a few seconds
               setTimeout(() => {
                   // Sets a timeout to hide the message after 5 seconds.
                   formMessage.classList.remove('show');
                   // Removes the 'show' class to hide the message.
               }, 5000);
           });
       }

       // Mobile menu toggle and responsive auto-close
       document.addEventListener('DOMContentLoaded', function () {
           // Ensures the script runs after the DOM is fully loaded.
           const mobileMenuButton = document.getElementById('mobileMenuButton');
           // Gets a reference to the mobile menu button.
           const mobileNavOverlay = document.getElementById('mobileNavOverlay');
           // Gets a reference to the mobile navigation overlay.
           const navLinksInOverlay = mobileNavOverlay.querySelectorAll('a');
           // Selects all navigation links within the mobile overlay.
           const desktopBreakpoint = 768; // Matches the media query breakpoint
           // Defines the breakpoint for desktop screens.

           mobileMenuButton.addEventListener('click', function () {
               // Adds a click event listener to the mobile menu button.
               mobileNavOverlay.classList.toggle('active');
               // Toggles the 'active' class on the mobile navigation overlay to show/hide it.
           });

           // Close mobile menu when a link is clicked
           navLinksInOverlay.forEach(link => {
               // Adds a click event listener to each navigation link in the mobile menu.
               link.addEventListener('click', function () {
                   mobileNavOverlay.classList.remove('active');
                   // Removes the 'active' class from the overlay, closing the menu.
               });
           });

           // Auto-close mobile menu and show desktop nav on resize to larger screen
           window.addEventListener('resize', function () {
               // Adds a resize event listener to the window.
               if (window.innerWidth > desktopBreakpoint && mobileNavOverlay.classList.contains('active')) {
                   // If the window width is greater than the desktop breakpoint AND the mobile menu is active:
                   mobileNavOverlay.classList.remove('active');
                   // Hides the mobile menu.
               }
           });
       });