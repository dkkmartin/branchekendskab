//JavaScript kode:
const menuButton = document.querySelector('.header__menu__con');
const closeButton = document.querySelector('.close');
const container = document.querySelector('.container');


menuButton.addEventListener('click', () => {
  container.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  container.style.display = 'none';
});
