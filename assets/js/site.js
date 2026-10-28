// Mobile menu
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}

menuButton?.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  nav.classList.toggle('is-open', opening);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

nav?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

// "Zoom across scales" panel on the home page
const scaleButtons = [...document.querySelectorAll('[data-scale-button]')];
if (scaleButtons.length) {
  const images = [...document.querySelectorAll('[data-scale-image]')];
  const caption = document.querySelector('.scale-caption');
  const counter = document.querySelector('[data-scale-index]');
  const fill = document.querySelector('[data-ruler-fill]');

  function showScale(index) {
    scaleButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    images.forEach((img, i) => { img.hidden = i !== index; });
    caption.textContent = scaleButtons[index].dataset.caption;
    counter.textContent = String(index + 1).padStart(2, '0');
    if (fill) fill.style.width = (scaleButtons.length > 1 ? (index / (scaleButtons.length - 1)) * 100 : 0) + '%';
  }

  scaleButtons.forEach((button, i) => button.addEventListener('click', () => showScale(i)));
}
