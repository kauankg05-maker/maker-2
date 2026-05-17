o// ===================== DARK MODE =====================
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '◑';
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '◐';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '◑';
        localStorage.setItem('theme', 'dark');
    }
});

// ===================== MOSTRAR SENHA =====================
const senhaInput = document.getElementById('senha');
const toggleLogin = document.getElementById('toggleLogin');

toggleLogin.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleLogin.textContent = 'Ocultar';
    } else {
        senhaInput.type = 'password';
        toggleLogin.textContent = 'Mostrar';
    }
});

// ===================== LOGIN =====================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value;

    if (!usuario || !senha) {
        alert("Usuário e senha são obrigatórios!");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find(u => u.usuario === usuario && u.senha === senha);

    if (userFound) {
        alert(`Bem-vindo, ${usuario}!`);
        window.location.href = "index3.html";
    } else {
        alert("Usuário ou senha incorretos.\nVocê precisa se cadastrar primeiro.");
    }
});