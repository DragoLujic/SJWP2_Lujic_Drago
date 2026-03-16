const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    menuCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});
