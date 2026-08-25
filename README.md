# 📬 Carteiro Amigo

Protótipo de site para organizar encomendas de moradores, feito como trabalho
escolar (8º ano). O objetivo é ajudar a avisar quando uma encomenda chega e
facilitar a retirada, com uma interface simples parecida com um aplicativo
de celular.

O projeto usa **apenas HTML, CSS e JavaScript puro** (sem React, sem
Node.js, sem banco de dados e sem back-end). Todos os dados das encomendas
ficam guardados diretamente no arquivo `script.js`.

## 📁 Estrutura do projeto

```
carteiro-amigo/
│
├── index.html   -> estrutura da página (as "telas" do site)
├── style.css    -> visual: cores, cards arredondados, sombras, responsividade
├── script.js    -> dados das encomendas e toda a interação (JavaScript)
└── README.md    -> este arquivo
```

## ✨ Funcionalidades

- **Início**: saudação, resumo de quantas encomendas estão disponíveis para
  retirada e atalhos para as principais telas.
- **Minhas Encomendas**: lista de encomendas com filtros (Todas, Disponíveis,
  Retiradas), cada uma com uma cor diferente de acordo com o status.
- **Detalhes da encomenda**: código, destinatário, data de chegada, local e
  horário de retirada, com o botão **✅ Confirmar retirada**.
- **Confirmar retirada**: ao clicar no botão, o status muda na hora (usando
  JavaScript) para "Retirada com sucesso!" e a lista é atualizada
  automaticamente.
- **Notificações**: avisos fictícios sobre chegada e retirada de encomendas.
- **Fale Conosco**: campo de mensagem que, ao ser enviado, mostra
  "Mensagem enviada com sucesso!" (não envia nada de verdade, é só protótipo).
- **Barra de navegação inferior**, como em um aplicativo: Início, Encomendas,
  Notificações e Conta — tudo em uma única página (`index.html`), trocando de
  "tela" com JavaScript.

## 💻 Como abrir o projeto no computador

Não é preciso instalar nada! Basta:

1. Baixar ou clonar esta pasta (`carteiro-amigo`).
2. Dar duplo clique no arquivo **`index.html`**.
3. O site abrirá direto no seu navegador (Chrome, Edge, Firefox, etc.).

## 🌐 Como hospedar gratuitamente no GitHub Pages

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver uma).
2. Crie um novo repositório, por exemplo chamado `carteiro-amigo`.
3. Envie os arquivos do projeto (`index.html`, `style.css`, `script.js`,
   `README.md`) para esse repositório.
4. No repositório, vá em **Settings** (Configurações) → **Pages**.
5. Em **Branch**, selecione a branch principal (`main`) e a pasta `/root`,
   depois clique em **Save**.
6. Aguarde alguns minutos. O GitHub vai gerar um link parecido com:
   `https://seu-usuario.github.io/carteiro-amigo/`
7. Pronto! O site estará no ar, disponível para qualquer pessoa acessar.

## 🚀 Como hospedar gratuitamente na Netlify (alternativa)

1. Crie uma conta em [netlify.com](https://www.netlify.com).
2. Clique em **Add new site** → **Deploy manually**.
3. Arraste a pasta do projeto (com `index.html`, `style.css` e `script.js`)
   para a área indicada.
4. A Netlify gera um link automaticamente e o site já fica no ar.

## 🎨 Sobre o design

O visual foi inspirado em aplicativos de celular, usando:

- Azul escuro e azul para o cabeçalho e botões principais;
- Branco e cinza claro para o fundo e os cartões;
- Verde para indicar encomendas disponíveis/retiradas com sucesso;
- Cards arredondados, sombras suaves e ícones (emojis) para facilitar a leitura;
- Layout responsivo: funciona bem tanto no celular quanto no computador.

## 📝 Observações

- Este é um **protótipo estático** para fins educacionais. Não existe login
  real, banco de dados ou envio de mensagens de verdade.
- Os dados das encomendas (exemplo: Encomenda #001, #002, #003) estão
  fixos no arquivo `script.js` e podem ser editados livremente para testar
  outros cenários.
