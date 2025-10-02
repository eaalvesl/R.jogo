const charadas = [
  {
    pergunta: "O que pode encher uma sala inteira sem ocupar espaço?",
    resposta: "luz"
  },
  {
    pergunta: "Qual é o animal que anda com os pés na cabeça?",
    resposta: "piolho"
  },
  {
    pergunta: "Qual é a coisa que quanto mais se tira, maior fica?",
    resposta: "buraco"
  },
  {
    pergunta: "O que é que tem dentes, mas não morde?",
    resposta: "pente"
  },
  {
    pergunta: "Tenho chaves mas não tranco portas. O que sou?",
    resposta: "teclado"
  },
  {
    pergunta: "O que sempre sobe, mas nunca desce?",
    resposta: "idade"
  },
  {
    pergunta: "Você me encontra no céu, mas não sou estrela nem lua. O que sou?",
    resposta: "nuvem"
  },
  {
    pergunta: "O que é invisível e se você fala, desaparece?",
    resposta: "silêncio"
  },
  {
    pergunta: "É seu, mas as outras pessoas usam mais do que você?",
    resposta: "Seu nome"
  },
  {
    pergunta: "Fica molhado enquanto seca os outros?",
    resposta: "A toalha"
  },
  {
    pergunta: "Tem cidade, mas não tem casas?",
    resposta: "O mapa"
  },
  {
    pergunta: "Você quebra antes mesmo de usar?",
    resposta: "Um ovo"
  },
  {
    pergunta: "Tem coroa, mas não é rei, tem escamas mas não é peixe?",
    resposta: "O abacaxi"
  },
  {
    pergunta: "É maior que um elefante, mas não pesa nada?",
    resposta: "A sombra do elefante"
  },
  {
    pergunta: "Tem folhas mas não é árvore, Conta histórias mas não fala"
    resposta: "O livro"
  },
  {
    pergunta: "Tem pernas, mas não anda?"
    resposta: "A cadeira"
  },
  {
    pergunta: "Anda sem sair do lugar?"
    resposta: "O relógio"
  },
  {
    pergunta: "Quanto mais enche, mais leve fica?"
    resposta: "O balão"
  },
  {
    pergunta: "Tem língua mas não fala, tem boca mas não come?"
    resposta: "O sapato"
  },
{
    pergunta: "Cai em pé e corre deitado?"
    resposta: "A chuva"
  },
  {
    pergunta: "Tem chave, mas não abre porta?"
    resposta: "O teclado"
  },
  {
    pergunta: "Sempre olha para você, mas nunca fala?"
    resposta: "O espelho"
  },
  {
    pergunta: "Sou cheio de furos, mas consigo reter água?"
    resposta: "A esponja"
  },
  {
    pergunta: "Não tem asas mas voa, não tem olhos mas chora"
    resposta: "A nuvem"
  },
  {
    pergunta: "Sou comprado para comer, mas nunca como?"
    resposta: "O prato"
  },
  {
    pergunta: "Quanto mais se espalha, menos se vê?"
    resposta: "A neblina"
  },
   {
    pergunta: "Quanto mais rápido você corre, mais ele se afasta?"
    resposta: "O horizonte"
  },
   {
    pergunta: "Não tem asas, mas pode voar com o vento?"
    resposta: "O papel"
  },
   {
    pergunta: "Nasce grande e morre pequeno?"
    resposta: "O lápis"
  },
   {
    pergunta: "Tem um pescoço, mas não tem cabeça"
    resposta: "A garrafa"
  },
];

let indiceAtual = 0;
let acertos = 0;
let erros = 0;

function carregarCharada() {
  const atual = charadas[indiceAtual];
  document.getElementById('charada').textContent = atual.pergunta;
  document.getElementById('resposta').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
}

function verificarResposta() {
  const entrada = document.getElementById('resposta').value.trim().toLowerCase();
  const respostaCorreta = charadas[indiceAtual].resposta.toLowerCase();

  if (entrada === '') {
    document.getElementById('feedback').textContent = "Digite uma resposta!";
    document.getElementById('feedback').style.color = "black";
    return;
  }

  if (entrada === respostaCorreta) {
    document.getElementById('feedback').textContent = "✅ Acertou!";
    document.getElementById('feedback').style.color = "green";
    acertos++;
  } else {
    document.getElementById('feedback').textContent = `❌ Errou! A resposta era: ${respostaCorreta}`;
    document.getElementById('feedback').style.color = "red";
    erros++;
  }

  atualizarPlacar();
  document.getElementById('next-btn').style.display = 'inline-block';
}

function atualizarPlacar() {
  document.getElementById('placar').textContent = `✅ Acertos: ${acertos} | ❌ Erros: ${erros}`;
}

function proximaCharada() {
  indiceAtual++;
  if (indiceAtual >= charadas.length) {
    document.getElementById('charada').textContent = "🎉 Fim das charadas!";
    document.getElementById('resposta').style.display = 'none';
    document.querySelector("button").style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').textContent = `Jogo finalizado! Você acertou ${acertos} e errou ${erros}. 👏`;
    document.getElementById('feedback').style.color = "#333";
  } else {
    carregarCharada();
  }
}

// Inicializar o jogo ao carregar a página
window.onload = carregarCharada;
