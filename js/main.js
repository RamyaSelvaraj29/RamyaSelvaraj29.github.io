// Shared nav behavior
function initNav(activePage) {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if (a.dataset.page === activePage) a.classList.add('active');
  });
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.classList.contains('open');
  if (isOpen) {
    links.classList.remove('open');
    links.style.cssText = '';
  } else {
    links.classList.add('open');
    links.style.cssText = `
      display:flex; flex-direction:column; position:fixed;
      top:68px; left:0; right:0;
      background:rgba(247,243,236,0.97);
      padding:28px 6%; gap:22px;
      border-bottom:1px solid var(--border);
      z-index:199; backdrop-filter:blur(14px);
    `;
  }
}

// Scroll reveal
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 0.07}s`;
    obs.observe(el);
  });
}

// Contact form
function handleSubmit() {
  const btn = document.querySelector('.cf-submit');
  if (!btn) return;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#3A5A40';
  btn.style.borderColor = '#3A5A40';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 3500);
}

document.addEventListener('DOMContentLoaded', initReveal);
