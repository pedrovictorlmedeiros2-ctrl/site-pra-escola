

/* ==========================================================
   CARTEIRO AMIGO - SCRIPT PRINCIPAL
   Todo o "banco de dados" fica aqui mesmo, em uma lista (array)
   de objetos JavaScript. Não usamos backend nem banco de dados.
   ========================================================== */

/* ==========================================================
   LOGIN — guarda só o nome da pessoa, no localStorage do
   navegador, para lembrar quem está usando o app
   ========================================================== */

const CHAVE_NOME = "carteiroAmigoNome";

function entrarNoApp(nome) {
  document.getElementById("nome-usuario").textContent = nome;
  document.getElementById("conta-nome").textContent = nome;

  document.getElementById("section-login").classList.add("escondido");
  document.getElementById("app-shell").classList.add("ativo");

  iniciar();
}

document.getElementById("btn-entrar").addEventListener("click", function () {
  const campoNome = document.getElementById("input-nome");
  const erro = document.getElementById("login-erro");
  const nome = campoNome.value.trim();

  if (nome === "") {
    erro.classList.remove("escondido");
    campoNome.focus();
    return;
  }

  erro.classList.add("escondido");
  localStorage.setItem(CHAVE_NOME, nome);
  entrarNoApp(nome);
});

// Permite apertar Enter no campo de nome para entrar
document.getElementById("input-nome").addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    document.getElementById("btn-entrar").click();
  }
});

// Botão "Trocar nome" na tela de Conta: limpa o nome salvo e volta ao login
document.getElementById("btn-trocar-nome").addEventListener("click", function () {
  localStorage.removeItem(CHAVE_NOME);
  document.getElementById("app-shell").classList.remove("ativo");
  document.getElementById("section-login").classList.remove("escondido");
  document.getElementById("input-nome").value = "";
  document.getElementById("input-nome").focus();
});

/* ==========================================================
   MODO ESCURO — também fica salvo no localStorage
   ========================================================== */

const CHAVE_TEMA = "carteiroAmigoTema";

function aplicarTema(tema) {
  document.body.classList.toggle("tema-escuro", tema === "escuro");
  document.getElementById("btn-tema").textContent = tema === "escuro" ? "☀️" : "🌙";
}

document.getElementById("btn-tema").addEventListener("click", function () {
  const temaAtual = document.body.classList.contains("tema-escuro") ? "escuro" : "claro";
  const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
  localStorage.setItem(CHAVE_TEMA, novoTema);
  aplicarTema(novoTema);
});

aplicarTema(localStorage.getItem(CHAVE_TEMA) || "claro");

// Lista de encomendas fictícias.
// status pode ser: "aguardando", "disponivel" ou "retirada"
let encomendas = [
  {
    id: "001",
    destinatario: "Maria Silva",
    chegada: "25/08/2026 às 14:30",
    local: "Central de entregas",
    horario: "8h às 18h",
    status: "disponivel",
    retiradaEm: null
  },
  {
    id: "002",
    destinatario: "Maria Silva",
    chegada: "27/08/2026 às 09:00",
    local: "Recepção do condomínio",
    horario: "9h às 19h",
    status: "aguardando",
    retiradaEm: null
  },
  {
    id: "003",
    destinatario: "Maria Silva",
    chegada: "20/08/2026 às 11:00",
    local: "Central de entregas",
    horario: "8h às 18h",
    status: "retirada",
    retiradaEm: "21/08/2026 às 10:15"
  }
];

// Notificações fictícias mostradas na tela de Notificações
let notificacoes = [
  {
    titulo: "🔔 Sua encomenda #001 chegou!",
    local: "Central de entregas",
    horario: "Disponível para retirada das 8h às 18h."
  },
  {
    titulo: "🔔 Sua encomenda #002 está a caminho",
    local: "Recepção do condomínio",
    horario: "Previsão de chegada: 27/08/2026."
  },
  {
    titulo: "✔️ Encomenda #003 retirada com sucesso",
    local: "Central de entregas",
    horario: "Retirada em 21/08/2026 às 10:15."
  }
];

// Guarda o id da encomenda que está sendo exibida na tela de detalhes
let idEncomendaSelecionada = null;

// Guarda o filtro atual da lista de encomendas
let filtroAtual = "todas";

/* ==========================================================
   TEXTOS AUXILIARES PARA CADA STATUS
   ========================================================== */

const textoStatus = {
  disponivel: "Disponível para retirada",
  aguardando: "Aguardando chegada",
  retirada: "Retirada"
};

const iconeStatus = {
  disponivel: "🟢",
  aguardando: "🟡",
  retirada: "⚪"
};

/* ==========================================================
   NAVEGAÇÃO ENTRE TELAS
   ========================================================== */

// Troca a tela visível e destaca o botão certo na barra inferior
function mostrarTela(nomeTela) {
  document.querySelectorAll(".section").forEach(function (secao) {
    secao.classList.remove("active");
  });
  document.getElementById("section-" + nomeTela).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(function (botao) {
    botao.classList.toggle("active", botao.dataset.target === nomeTela);
  });

  // Sempre que a tela mudar, rola para o topo do conteúdo
  document.getElementById("main-content").scrollTop = 0;
  window.scrollTo(0, 0);
}

// Botões da barra inferior
document.querySelectorAll(".nav-btn").forEach(function (botao) {
  botao.addEventListener("click", function () {
    mostrarTela(botao.dataset.target);
    if (botao.dataset.target === "encomendas") {
      renderizarEncomendas();
    }
    if (botao.dataset.target === "notificacoes") {
      renderizarNotificacoes();
    }
  });
});

// Cards clicáveis da tela inicial (também usam data-target)
document.querySelectorAll(".home-card").forEach(function (card) {
  card.addEventListener("click", function () {
    mostrarTela(card.dataset.target);
    if (card.dataset.target === "encomendas") {
      renderizarEncomendas();
    }
    if (card.dataset.target === "notificacoes") {
      renderizarNotificacoes();
    }
  });
});

// Sino de notificações no cabeçalho
document.getElementById("btn-bell-home").addEventListener("click", function () {
  mostrarTela("notificacoes");
  renderizarNotificacoes();
});

// Botão de voltar da tela de detalhes
document.getElementById("btn-voltar-detalhes").addEventListener("click", function () {
  mostrarTela("encomendas");
});

/* ==========================================================
   TELA INICIAL: resumo de encomendas disponíveis
   ========================================================== */

function renderizarResumoInicio() {
  const disponiveis = encomendas.filter(function (e) {
    return e.status === "disponivel";
  }).length;

  const resumo = document.getElementById("resumo-disponivel");

  if (disponiveis > 0) {
    resumo.classList.remove("sem-encomendas");
    resumo.textContent =
      "📦 Você tem " +
      disponiveis +
      (disponiveis === 1 ? " encomenda disponível" : " encomendas disponíveis") +
      " para retirada.";
  } else {
    resumo.classList.add("sem-encomendas");
    resumo.textContent = "Nenhuma encomenda disponível para retirada no momento.";
  }

  // Atualiza o número vermelho no sino do cabeçalho
  const badge = document.getElementById("badge-notif");
  badge.textContent = disponiveis;
  badge.classList.toggle("escondido", disponiveis === 0);
}

/* ==========================================================
   TELA DE ENCOMENDAS (lista)
   ========================================================== */

// Botões de filtro (Todas / Disponíveis / Retiradas)
document.querySelectorAll(".tab-btn").forEach(function (botao) {
  botao.addEventListener("click", function () {
    filtroAtual = botao.dataset.filtro;

    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    botao.classList.add("active");

    renderizarEncomendas();
  });
});

function renderizarEncomendas() {
  const lista = document.getElementById("lista-encomendas");
  lista.innerHTML = "";

  let encomendasFiltradas = encomendas;
  if (filtroAtual !== "todas") {
    encomendasFiltradas = encomendas.filter(function (e) {
      return e.status === filtroAtual;
    });
  }

  if (encomendasFiltradas.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhuma encomenda encontrada.</p>';
    return;
  }

  encomendasFiltradas.forEach(function (encomenda) {
    const card = document.createElement("div");
    card.className = "encomenda-card status-" + encomenda.status;

    card.innerHTML =
      '<div class="encomenda-topo">' +
        '<span class="encomenda-titulo">📦 Encomenda #' + encomenda.id + "</span>" +
        '<span class="status-tag status-' + encomenda.status + '">' +
          iconeStatus[encomenda.status] + " " + textoStatus[encomenda.status] +
        "</span>" +
      "</div>" +
      '<p class="encomenda-info">📍 ' + encomenda.local + "</p>" +
      '<p class="encomenda-info">📅 Chegada: ' + encomenda.chegada + "</p>" +
      '<button class="btn-detalhes" data-id="' + encomenda.id + '">Ver detalhes →</button>';

    lista.appendChild(card);
  });

  // Liga o evento de clique em cada botão "Ver detalhes" recém-criado
  document.querySelectorAll(".btn-detalhes").forEach(function (botao) {
    botao.addEventListener("click", function () {
      abrirDetalhes(botao.dataset.id);
    });
  });
}

/* ==========================================================
   TELA DE DETALHES DA ENCOMENDA
   ========================================================== */

function buscarEncomendaPorId(id) {
  return encomendas.find(function (e) {
    return e.id === id;
  });
}

function abrirDetalhes(id) {
  idEncomendaSelecionada = id;
  renderizarDetalhes();
  mostrarTela("detalhes");
}

function renderizarDetalhes() {
  const encomenda = buscarEncomendaPorId(idEncomendaSelecionada);
  const container = document.getElementById("detalhe-conteudo");

  if (!encomenda) {
    container.innerHTML = '<p class="vazio">Encomenda não encontrada.</p>';
    return;
  }

  const disponivel = encomenda.status === "disponivel";
  const jaRetirada = encomenda.status === "retirada";

  let iconeGrande = "📦";
  let tituloStatus = textoStatus[encomenda.status];
  if (jaRetirada) {
    iconeGrande = "✔️";
    tituloStatus = "Retirada com sucesso!";
  } else if (disponivel) {
    iconeGrande = "✅";
    tituloStatus = "Encomenda disponível para retirada!";
  } else {
    iconeGrande = "⏳";
    tituloStatus = "Aguardando chegada da encomenda";
  }

  let html =
    '<div class="detalhe-caixa">' +
      '<div class="detalhe-icone-grande">' + iconeGrande + "</div>" +
      '<p class="detalhe-status-texto">' + tituloStatus + "</p>" +

      '<div class="detalhe-linha"><span>Código</span><span>#' + encomenda.id + "</span></div>" +
      '<div class="detalhe-linha"><span>👤 Destinatário</span><span>' + encomenda.destinatario + "</span></div>" +
      '<div class="detalhe-linha"><span>📅 Chegada</span><span>' + encomenda.chegada + "</span></div>" +
      '<div class="detalhe-linha"><span>📍 Local</span><span>' + encomenda.local + "</span></div>" +
      '<div class="detalhe-linha"><span>🕒 Horário</span><span>' + encomenda.horario + "</span></div>" +
      '<div class="detalhe-linha"><span>Status</span><span>' +
        iconeStatus[encomenda.status] + " " + textoStatus[encomenda.status] +
      "</span></div>";

  if (jaRetirada) {
    html +=
      '<div class="detalhe-linha"><span>Retirada em</span><span>' + encomenda.retiradaEm + "</span></div>";
  }

  if (disponivel) {
    html +=
      '<div class="aviso-documento">📄 <strong>Importante:</strong> leve um documento com foto para retirar sua encomenda.</div>' +
      '<button class="btn-primario verde" id="btn-confirmar-retirada">✅ Confirmar retirada</button>';
  }

  if (!disponivel && !jaRetirada) {
    html += '<button class="btn-primario" disabled>⏳ Aguardando chegada</button>';
  }

  html += "</div>";

  container.innerHTML = html;

  // Liga o botão de confirmar retirada, se ele existir na tela
  const botaoConfirmar = document.getElementById("btn-confirmar-retirada");
  if (botaoConfirmar) {
    botaoConfirmar.addEventListener("click", confirmarRetirada);
  }
}

// Marca a encomenda selecionada como retirada e atualiza toda a interface
function confirmarRetirada() {
  const encomenda = buscarEncomendaPorId(idEncomendaSelecionada);
  if (!encomenda) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR");
  const horaFormatada = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  encomenda.status = "retirada";
  encomenda.retiradaEm = dataFormatada + " às " + horaFormatada;

  // Adiciona uma notificação nova sobre a retirada
  notificacoes.unshift({
    titulo: "✔️ Encomenda #" + encomenda.id + " retirada com sucesso",
    local: encomenda.local,
    horario: "Retirada em " + encomenda.retiradaEm + "."
  });

  renderizarDetalhes();
  renderizarEncomendas();
  renderizarResumoInicio();
}

/* ==========================================================
   TELA DE NOTIFICAÇÕES
   ========================================================== */

function renderizarNotificacoes() {
  const lista = document.getElementById("lista-notificacoes");
  lista.innerHTML = "";

  if (notificacoes.length === 0) {
    lista.innerHTML = '<p class="vazio">Nenhuma notificação por enquanto.</p>';
    return;
  }

  notificacoes.forEach(function (notificacao) {
    const card = document.createElement("div");
    card.className = "notificacao-card";
    card.innerHTML =
      '<p class="notificacao-titulo">' + notificacao.titulo + "</p>" +
      '<p class="notificacao-info">📍 ' + notificacao.local + "</p>" +
      '<p class="notificacao-info">🕒 ' + notificacao.horario + "</p>";
    lista.appendChild(card);
  });
}

/* ==========================================================
   TELA FALE CONOSCO
   ========================================================== */

document.getElementById("btn-enviar-mensagem").addEventListener("click", function () {
  const campoMensagem = document.getElementById("mensagem-texto");
  const mensagemSucesso = document.getElementById("msg-sucesso");

  if (campoMensagem.value.trim() === "") {
    return; // não faz nada se o campo estiver vazio
  }

  // Como é apenas um protótipo, não enviamos a mensagem de verdade
  mensagemSucesso.classList.remove("escondido");
  campoMensagem.value = "";

  // Some com a mensagem de sucesso depois de alguns segundos
  setTimeout(function () {
    mensagemSucesso.classList.add("escondido");
  }, 3000);
});

/* ==========================================================
   INICIALIZAÇÃO DO SITE
   ========================================================== */

function iniciar() {
  renderizarResumoInicio();
  renderizarEncomendas();
  renderizarNotificacoes();
  mostrarTela("inicio");
}

// Se já existe um nome salvo de uma visita anterior, pula direto para o app.
// Caso contrário, a tela de login (que já começa visível no HTML) permanece.
const nomeSalvo = localStorage.getItem(CHAVE_NOME);
if (nomeSalvo) {
  entrarNoApp(nomeSalvo);
}
