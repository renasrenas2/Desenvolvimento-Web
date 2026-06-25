// Dark mode toggle
const btn = document.getElementById('dark-mode-toggle');
btn.addEventListener('click', () => {
    const isPressed = btn.getAttribute('aria-pressed') === 'true';
    const newTheme = isPressed ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    btn.setAttribute('aria-pressed', String(!isPressed));
    btn.textContent = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
});

// Mobile hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.getElementById('primary-nav');
hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
    });
});
