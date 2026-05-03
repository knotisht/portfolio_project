/* ============================================================
   ACTIVE NAVIGATION
   Highlights nav links based on scroll position
   ============================================================ */

const sectionIds = ['about', 'experience', 'stack', 'school-projects', 'certifications', 'recommendations'];
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  // Find which section is currently in view
  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element && window.scrollY >= element.offsetTop - 120) {
      currentSection = id;
    }
  });

  // Update active link
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
  });
});
