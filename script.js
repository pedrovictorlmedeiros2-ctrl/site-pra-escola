/* ==========================================================
   CARTEIRO AMIGO - ESTILOS GERAIS
   Identidade visual: "selo postal" — papel creme, azul-marinho
   de carteiro, vermelho de carimbo e cartões com borda picotada
   como um selo de verdade.
   ========================================================== */

:root {
  --azul-marinho: #16204a;
  --azul-carteiro: #2451c4;
  --azul-claro: #e7edfb;
  --creme: #faf6ee;
  --branco: #ffffff;
  --cinza-medio: #8b8778;
  --cinza-borda: #e6e0d2;
  --verde: #2f9e64;
  --verde-claro: #e2f5e9;
  --amarelo: #c8811f;
  --amarelo-claro: #faf0dc;
  --vermelho-selo: #c1443c;
  --sombra: 0 10px 24px rgba(22, 32, 74, 0.09);
  --raio: 18px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
  background: var(--creme);
  color: var(--azul-marinho);
}

h1, h2, h3 {
  font-family: "Fraunces", Georgia, serif;
}

/* ==========================================================
   CONTAINER GERAL - simula a tela de um aplicativo de celular
   ========================================================== */

.app-container {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--creme);
  display: flex;
  flex-direction: column;
  box-shadow: var(--sombra);
  position: relative;
}

@media (min-width: 600px) {
  body {
    padding: 28px 0;
  }
  .app-container {
    min-height: calc(100vh - 56px);
    border-radius: 26px;
    overflow: hidden;
  }
}

/* ==========================================================
   CABEÇALHO — recorte de aba de envelope na base
   ========================================================== */

.app-header {
  background: var(--azul-marinho);
  color: var(--branco);
  padding: 22px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%);
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-icon {
  width: 46px;
  height: 46px;
  min-width: 46px;
  background: var(--creme);
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
}

.app-header h1 {
  margin: 0;
  font-size: 1.28rem;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.subtitle {
  margin: 3px 0 0;
  font-size: 0.76rem;
  color: #aebbe8;
  font-weight: 500;
}

.bell-btn {
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: var(--branco);
  font-size: 1.05rem;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  cursor: pointer;
  transition: background 0.15s ease;
}

.bell-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--vermelho-selo);
  color: var(--branco);
  font-size: 0.63rem;
  font-weight: 700;
  min-width: 17px;
  height: 17px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 2px solid var(--azul-marinho);
}

.badge.escondido {
  display: none;
}

/* ==========================================================
   CONTEÚDO PRINCIPAL / TELAS
   ========================================================== */

#main-content {
  flex: 1;
  padding: 8px 20px 20px;
  padding-bottom: 100px;
}

.section {
  display: none;
  animation: aparecer 0.25s ease-out;
}

.section.active {
  display: block;
}

@keyframes aparecer {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

h2 {
  color: var(--azul-marinho);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 14px;
}

h3 {
  color: var(--azul-marinho);
  font-size: 1.02rem;
  font-weight: 600;
  margin: 26px 0 8px;
}

/* ==========================================================
   TELA INÍCIO
   ========================================================== */

.saudacao {
  font-family: "Fraunces", Georgia, serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 18px 0 2px;
}

.bemvindo {
  color: var(--cinza-medio);
  margin: 0 0 18px;
  font-size: 0.92rem;
}

.resumo-card {
  background: var(--verde-claro);
  border: 1px solid #c4e6d2;
  color: #1c6b41;
  padding: 14px 16px;
  border-radius: var(--raio);
  font-weight: 600;
  font-size: 0.92rem;
  margin-bottom: 22px;
}

.resumo-card.sem-encomendas {
  background: var(--branco);
  border-color: var(--cinza-borda);
  color: var(--cinza-medio);
}

.home-cards {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.home-card {
  border: none;
  border-radius: var(--raio);
  padding: 18px;
  text-align: left;
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 12px;
  row-gap: 2px;
  cursor: pointer;
  box-shadow: var(--sombra);
  font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.home-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(22, 32, 74, 0.13);
}

.home-card:active {
  transform: translateY(0);
}

.home-card-icone {
  font-size: 1.55rem;
  grid-row: span 2;
}

.home-card-titulo {
  font-weight: 700;
  font-size: 1rem;
}

.home-card-desc {
  font-size: 0.81rem;
  opacity: 0.85;
}

.home-card.cor-azul {
  background: var(--azul-marinho);
  color: var(--branco);
}

.home-card.cor-clara {
  background: var(--azul-claro);
  color: var(--azul-marinho);
}

.home-card.cor-verde {
  background: var(--verde-claro);
  color: #1c6b41;
}

/* ==========================================================
   TELA ENCOMENDAS - abas de filtro
   ========================================================== */

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tab-btn {
  flex: 1;
  padding: 9px 4px;
  border-radius: 10px;
  border: 1px solid var(--cinza-borda);
  background: var(--branco);
  color: var(--cinza-medio);
  font-size: 0.84rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.tab-btn.active {
  background: var(--azul-carteiro);
  border-color: var(--azul-carteiro);
  color: var(--branco);
  font-weight: 600;
}

.lista-encomendas,
.lista-notificacoes {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Cartão de cada encomenda — topo picotado, como um selo destacável */
.encomenda-card {
  background: var(--branco);
  border: 1px solid var(--cinza-borda);
  border-top: none;
  border-radius: 0 0 16px 16px;
  padding: 18px 16px 14px;
  box-shadow: var(--sombra);
  position: relative;
}

.encomenda-card::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 9px;
  background:
    radial-gradient(circle, var(--creme) 3.4px, transparent 3.6px) top / 14px 14px repeat-x,
    var(--branco);
  border-top: 4px solid var(--cinza-medio);
  border-radius: 16px 16px 0 0;
}

.encomenda-card.status-disponivel::before { border-top-color: var(--verde); }
.encomenda-card.status-aguardando::before { border-top-color: var(--amarelo); }
.encomenda-card.status-retirada::before { border-top-color: var(--cinza-medio); }
.encomenda-card.status-retirada { opacity: 0.82; }

.encomenda-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 4px;
}

.encomenda-titulo {
  font-weight: 700;
  font-size: 0.95rem;
}

.status-tag {
  font-size: 0.71rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.status-tag.status-disponivel {
  background: var(--verde-claro);
  color: #1c6b41;
}

.status-tag.status-aguardando {
  background: var(--amarelo-claro);
  color: #8a5814;
}

.status-tag.status-retirada {
  background: var(--creme);
  color: var(--cinza-medio);
}

.encomenda-info {
  font-size: 0.85rem;
  color: var(--cinza-medio);
  margin: 3px 0;
}

.btn-detalhes {
  margin-top: 10px;
  background: none;
  border: none;
  color: var(--azul-carteiro);
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  font-size: 0.87rem;
}

.vazio {
  text-align: center;
  color: var(--cinza-medio);
  padding: 34px 10px;
  font-size: 0.9rem;
}

/* ==========================================================
   TELA DETALHES
   ========================================================== */

.btn-voltar {
  background: none;
  border: none;
  color: var(--azul-carteiro);
  font-weight: 600;
  font-size: 0.94rem;
  cursor: pointer;
  padding: 0;
  margin: 14px 0 16px;
}

.detalhe-caixa {
  background: var(--branco);
  border: 1px solid var(--cinza-borda);
  border-radius: 20px;
  padding: 22px 20px;
  box-shadow: var(--sombra);
}

/* Selo/carimbo circular com borda tracejada, como um postmark real */
.detalhe-icone-grande {
  text-align: center;
  font-size: 2.1rem;
  width: 74px;
  height: 74px;
  line-height: 74px;
  margin: 0 auto 12px;
  border: 2px dashed var(--cinza-borda);
  border-radius: 50%;
  background: var(--creme);
}

.detalhe-status-texto {
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 20px;
  font-family: "Fraunces", Georgia, serif;
}

.detalhe-linha {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 0;
  border-bottom: 1px dashed var(--cinza-borda);
  font-size: 0.89rem;
}

.detalhe-linha:last-of-type {
  border-bottom: none;
}

.detalhe-linha span:first-child {
  color: var(--cinza-medio);
}

.detalhe-linha span:last-child {
  font-weight: 600;
  text-align: right;
}

.aviso-documento {
  background: var(--azul-claro);
  color: var(--azul-marinho);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 0.85rem;
  margin-top: 18px;
}

.btn-primario {
  width: 100%;
  background: var(--azul-carteiro);
  color: var(--branco);
  border: none;
  border-radius: 14px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;
  transition: filter 0.15s ease, transform 0.15s ease;
}

.btn-primario:hover:not(:disabled) {
  filter: brightness(1.08);
}

.btn-primario:active:not(:disabled) {
  transform: scale(0.99);
}

.btn-primario.verde {
  background: var(--verde);
}

.btn-primario:disabled {
  background: var(--cinza-borda);
  color: var(--cinza-medio);
  cursor: default;
}

/* ==========================================================
   TELA NOTIFICAÇÕES
   ========================================================== */

.notificacao-card {
  background: var(--azul-claro);
  border-radius: 16px;
  padding: 14px 16px;
  font-size: 0.88rem;
  box-shadow: var(--sombra);
  border-left: 4px solid var(--azul-carteiro);
}

.notificacao-titulo {
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--azul-marinho);
}

.notificacao-info {
  color: var(--azul-marinho);
  opacity: 0.75;
  margin: 2px 0;
}

/* ==========================================================
   TELA CONTA / FALE CONOSCO
   ========================================================== */

.conta-perfil {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--branco);
  border: 1px solid var(--cinza-borda);
  border-radius: 16px;
  padding: 16px;
  margin: 4px 0 8px;
  box-shadow: var(--sombra);
}

.conta-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--azul-claro);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.55rem;
}

.conta-nome {
  margin: 0;
  font-weight: 700;
}

.conta-info {
  margin: 2px 0 0;
  color: var(--cinza-medio);
  font-size: 0.85rem;
}

.fale-conosco-texto {
  color: var(--cinza-medio);
  font-size: 0.88rem;
  margin: 0 0 10px;
}

#mensagem-texto {
  width: 100%;
  border: 1px solid var(--cinza-borda);
  border-radius: 14px;
  padding: 12px;
  font-family: inherit;
  font-size: 0.92rem;
  resize: vertical;
  background: var(--branco);
}

#mensagem-texto:focus {
  outline: 2px solid var(--azul-carteiro);
  outline-offset: 1px;
}

.msg-sucesso {
  background: var(--verde-claro);
  color: #1c6b41;
  border-radius: 12px;
  padding: 12px 14px;
  margin-top: 14px;
  font-weight: 600;
  text-align: center;
}

.escondido {
  display: none !important;
}

/* ==========================================================
   BARRA DE NAVEGAÇÃO INFERIOR
   ========================================================== */

.bottom-nav {
  position: sticky;
  bottom: 0;
  display: flex;
  background: var(--branco);
  border-top: 1px solid var(--cinza-borda);
  padding: 8px 4px;
}

.nav-btn {
  flex: 1;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 0;
  color: var(--cinza-medio);
  cursor: pointer;
  font-family: inherit;
  transition: color 0.15s ease;
}

.nav-icone {
  font-size: 1.22rem;
}

.nav-texto {
  font-size: 0.67rem;
  font-weight: 600;
}

.nav-btn.active {
  color: var(--azul-carteiro);
}

/* Respeita quem prefere menos movimento na tela */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}

