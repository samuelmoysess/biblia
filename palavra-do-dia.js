const versiculos = [
    "Tudo posso naquele que me fortalece. Filipenses 4:13",
    "O Senhor é meu pastor e nada me faltará. Salmos 23:1",
    "Não temas, porque eu sou contigo. Isaías 41:10"
];

const aleatorio = Math.floor(Math.random() * versiculos.length);

document.getElementById("texto").innerText = versiculos[aleatorio];