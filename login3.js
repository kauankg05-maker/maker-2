// ===================== DARK MODE =====================
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
const toggleSenha = document.getElementById('toggleSenha');

toggleSenha.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleSenha.textContent = 'Ocultar';
    } else {
        senhaInput.type = 'password';
        toggleSenha.textContent = 'Mostrar';
    }
});

// ===================== CADASTRO =====================
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const senha = document.getElementById('senha').value;
    const repetirSenha = document.getElementById('repetirSenha').value;

    if (!usuario || !telefone || !senha || !repetirSenha) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    if (senha !== repetirSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se usuário já existe
    if (users.some(u => u.usuario === usuario)) {
        alert("Este usuário já está cadastrado!");
        return;
    }

    users.push({
        usuario: usuario,
        telefone: telefone,
        senha: senha
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index1.html";   // Volta para login
});