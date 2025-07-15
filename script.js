// Menu responsivo
document.getElementById('menu-toggle').addEventListener('click', () => {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('active');
});

// Animação simples ao rolar (opcional)
const fadeElements = document.querySelectorAll('.tratamento, .sobre, .contato, .agendamento');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});
