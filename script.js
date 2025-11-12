const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já tinha um tema
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggleBtn.innerHTML = '☀️';
}

// Altera o tema ao clicar 
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        toggleBtn.innerHTML = '☀️';
        localStorage.setItem('theme, light');
    } else {
        toggleBtn.innerHTML = '🌙';
        localStorage.setItem('theme', 'dark');
    }
})