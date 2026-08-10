const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (menu) {
      menu.setAttribute('aria-expanded', 'false');
      menu.focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (menu) {
      menu.setAttribute('aria-expanded', 'false');
    }
  }
});
