const sections = document.querySelectorAll('.section__block');
const arrowsRight = document.querySelectorAll('.arrow__right');
const arrowsLeft = document.querySelectorAll('.arrow__left');
let currentSection = 0;


// Add event listeners for arrowsRight
arrowsRight.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    sections[currentSection].style.display = 'none';
    currentSection = (currentSection + 1) % sections.length;
    sections[currentSection].style.display = 'flex';
  });
});

// Add event listeners for arrowsLeft
arrowsLeft.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    sections[currentSection].style.display = 'none';
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    sections[currentSection].style.display = 'flex';
  });
});

