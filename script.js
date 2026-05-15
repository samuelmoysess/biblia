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

let perguntas = [];
let indice = 0;
let dificuldadeAtual = "";

// 🔥 BANCO COM 10 PERGUNTAS POR DIFICULDADE
const banco = {
    facil: [
        { q: "Quem construiu a arca?", op: ["Noé", "Moisés", "Abraão"], c: 0, v: "Gênesis 6:14" },
        { q: "Quantos discípulos Jesus tinha?", op: ["10", "12", "7"], c: 1, v: "Lucas 6:13" },
        { q: "Quem matou Golias?", op: ["Davi", "Saul", "Samuel"], c: 0, v: "1 Samuel 17:50" },
        { q: "Qual mar se abriu?", op: ["Mar Vermelho", "Mediterrâneo", "Negro"], c: 0, v: "Êxodo 14:21" },
        { q: "Quem foi vendido pelos irmãos?", op: ["José", "Moisés", "Abraão"], c: 0, v: "Gênesis 37:28" },
        { q: "Quem virou estátua de sal?", op: ["Mulher de Ló", "Eva", "Sara"], c: 0, v: "Gênesis 19:26" },
        { q: "Quem foi engolido por peixe?", op: ["Jonas", "Elias", "Pedro"], c: 0, v: "Jonas 1:17" },
        { q: "Quem liderou Israel no Egito?", op: ["Moisés", "Davi", "Josué"], c: 0, v: "Êxodo 3:10" },
        { q: "Quem construiu o templo?", op: ["Salomão", "Davi", "Saul"], c: 0, v: "1 Reis 6:1" },
        { q: "Quem foi primeiro homem?", op: ["Adão", "Noé", "Caim"], c: 0, v: "Gênesis 2:7" }
    ],

    medio: [
        { q: "Quem escreveu Apocalipse?", op: ["João", "Pedro", "Paulo"], c: 0, v: "Apocalipse 1:1" },
        { q: "Quem foi jogado na cova dos leões?", op: ["Daniel", "Elias", "Isaías"], c: 0, v: "Daniel 6:16" },
        { q: "Quem traiu Jesus?", op: ["Judas", "Pedro", "Tomé"], c: 0, v: "Mateus 26:14" },
        { q: "Qual profeta subiu ao céu em redemoinho?", op: ["Elias", "Eliseu", "Isaías"], c: 0, v: "2 Reis 2:11" },
        { q: "Quem foi o primeiro rei de Israel?", op: ["Saul", "Davi", "Salomão"], c: 0, v: "1 Samuel 10:1" },
        { q: "Quantos livros tem a Bíblia?", op: ["66", "70", "72"], c: 0, v: "Estrutura bíblica" },
        { q: "Quem construiu a arca da aliança?", op: ["Bezalel", "Moisés", "Arão"], c: 0, v: "Êxodo 37:1" },
        { q: "Quem interpretou sonhos no Egito?", op: ["José", "Daniel", "Jacó"], c: 0, v: "Gênesis 41:15" },
        { q: "Quem batizou Jesus?", op: ["João Batista", "Pedro", "Paulo"], c: 0, v: "Mateus 3:13" },
        { q: "Qual era o nome original de Abraão?", op: ["Abrão", "Isaque", "Jacó"], c: 0, v: "Gênesis 17:5" }
    ],

    dificil: [
        { q: "Quem escreveu Salmos?", op: ["Davi", "Moisés", "Salomão"], c: 0, v: "Salmos 3:1" },
        { q: "Onde Paulo foi preso?", op: ["Roma", "Egito", "Israel"], c: 0, v: "Atos 28:16" },
        { q: "Qual era o nome do irmão de Moisés?", op: ["Arão", "Josué", "Calebe"], c: 0, v: "Êxodo 4:14" },
        { q: "Quem foi o primeiro mártir?", op: ["Estêvão", "Pedro", "Paulo"], c: 0, v: "Atos 7:59" },
        { q: "Qual profeta viu vale de ossos secos?", op: ["Ezequiel", "Isaías", "Jeremias"], c: 0, v: "Ezequiel 37:1" },
        { q: "Quem escreveu Provérbios?", op: ["Salomão", "Davi", "Moisés"], c: 0, v: "Provérbios 1:1" },
        { q: "Quem negou Jesus 3 vezes?", op: ["Pedro", "João", "Tomé"], c: 0, v: "Lucas 22:61" },
        { q: "Qual discípulo andou sobre água?", op: ["Pedro", "João", "Tiago"], c: 0, v: "Mateus 14:29" },
        { q: "Quem construiu o tabernáculo?", op: ["Moisés", "Bezalel", "Arão"], c: 1, v: "Êxodo 36:1" },
        { q: "Onde Jesus nasceu?", op: ["Belém", "Nazaré", "Jerusalém"], c: 0, v: "Lucas 2:4" }
    ]
};

function iniciar(nivel) {
    dificuldadeAtual = nivel;
    perguntas = banco[nivel];
    indice = 0;

    document.getElementById("menu").style.display = "none";

    mostrarPergunta();
}

function mostrarPergunta() {
    const p = perguntas[indice];

    document.getElementById("pergunta").innerHTML = p.q;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    p.op.forEach((texto, i) => {
        const btn = document.createElement("button");

        btn.innerHTML = texto;

        btn.onclick = function () {
            responder(i);
        };

        opcoesDiv.appendChild(btn);
    });

    document.getElementById("resultado").innerHTML = "";
}

function responder(escolha) {
    const p = perguntas[indice];
    const resultado = document.getElementById("resultado");

    // ❌ ERRO OU ACERTO = NÃO REPETE
    if (escolha === p.c) {
        resultado.innerHTML = "Correto!";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Errado! " + p.v;
        resultado.style.color = "red";
    }

    // ⏭️ vai pra próxima automaticamente
    setTimeout(() => {
        indice++;

        if (indice >= perguntas.length) {
            document.getElementById("pergunta").innerHTML = " Quiz finalizado!";
            document.getElementById("opcoes").innerHTML = "";
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("menu").style.display = "block";
            return;
        }

        mostrarPergunta();
    }, 1500);
}