// Função para navegar para os temas
function goToTheme() {
    const select = document.getElementById('theme-select');
    const selectedValue = select.value;
    
    if (selectedValue) {
        window.location.href = selectedValue + '/index.html';
    }
}

// Validação do formulário de login
function validateLoginForm(event) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    if (!email || !password) return true;
    
    // Validação básica
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault();
        return false;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, digite um email válido!');
        event.preventDefault();
        return false;
    }
    
    // Validação de senha (mínimo 6 caracteres)
    if (password.value.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        event.preventDefault();
        return false;
    }
    
    return true;
}

// Validação do formulário de cadastro
function validateRegisterForm(event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Validação básica
    if (name.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault();
        return false;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, digite um email válido!');
        event.preventDefault();
        return false;
    }
    
    // Validação de senha (mínimo 6 caracteres)
    if (password.value.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        event.preventDefault();
        return false;
    }
    
    // Verificar se as senhas coincidem
    if (password.value !== confirmPassword.value) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        event.preventDefault();
        return false;
    }
    
    return true;
}

// Adicionar efeito de scroll suave
document.addEventListener('DOMContentLoaded', function() {
    // Validar formulário de login ao enviar
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }
    
    // Validar formulário de cadastro ao enviar
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', validateRegisterForm);
    }
    
    // Efeito de fade-in para elementos
    const elements = document.querySelectorAll('main, aside, header');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.6s ease-in forwards`;
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Adicionar interatividade aos links de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
            this.style.color = '#0056b3';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
            this.style.color = '';
        });
    });
});

// Função para mostrar alertas personalizados
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'error' ? '#f8d7da' : type === 'success' ? '#d4edda' : '#d1ecf1'};
        color: ${type === 'error' ? '#721c24' : type === 'success' ? '#155724' : '#0c5460'};
        border: 1px solid;
        border-color: ${type === 'error' ? '#f5c6cb' : type === 'success' ? '#c3e6cb' : '#bee5eb'};
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Função para adicionar stylesheet de animações
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Carregar animações ao inicializar a página
addAnimationStyles();
