// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const targetId = e.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth',
  });
}

// Toggle active class on navigation links based on scroll position
window.addEventListener('scroll', toggleActiveLink);

function toggleActiveLink() {
  const sections = document.querySelectorAll('section');

  for (const section of sections) {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  }
}
