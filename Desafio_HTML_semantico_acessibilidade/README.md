# 🚀 Reestruturação Semântica, Acessibilidade e Design Responsivo

**Curso:** Engenharia de Software
**Disciplina:** Desenvolvimento Web
**Feito por:** Renato Moreira Santos Faria

---

## 📋 Sobre o Projeto

Este repositório reúne as atividades práticas da disciplina de Desenvolvimento Web. O ponto de partida foi o artigo *"Desafios da Formação de Engenheiros de Software"* — um HTML gerado automaticamente — que foi progressivamente evoluído em três etapas: reestruturação semântica, acessibilidade e design responsivo.

---

## 📂 Estrutura do Repositório

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal — artigo com semântica, acessibilidade e responsividade |
| `engsoftmoderna.html` | Página do livro Engenharia de Software Moderna |
| `manutencao.html` | Página do livro Fundamentos de Manutenção de Software |
| `artigos.html` | Página de artigos didáticos |
| `site_original_sem_alteracoes.html` | Código original mantido para comparação |

---

## 📅 Unidade 2 — HTML Semântico e Acessibilidade
### Atividade correspondente ao dia 30/04

O foco foi transformar o código-fonte genérico e automático em uma página web moderna e inclusiva, aplicando HTML5 semântico e boas práticas de acessibilidade (WCAG).

### 🛠️ Modificações Realizadas

#### 1. Arquitetura de Informação (Tags de Seção)
Substituímos o uso excessivo de `<div>` por uma estrutura semântica que define claramente as áreas do site:

* **Header:** Organizado com `<nav>` para links e branding, com `role="banner"` explícito.
* **Main:** Delimita exclusivamente o conteúdo principal do artigo, com `tabindex="-1"` para o skip link.
* **Footer:** Criado do zero com estrutura de grid, contendo informações institucionais, copyright e links de apoio.
* **Article e Section:** O texto foi encapsulado em `<article>` e cada sub-tópico (1.1 a 1.6) recebeu uma `<section>` própria com `aria-labelledby`.

#### 2. Acessibilidade (WCAG e Navegação)

* **Skip Link:** Implementação do "Pular para o conteúdo principal" para usuários de teclado.
* **Textos Alternativos:** Atributo `alt` descritivo em todas as imagens.
* **aria-pressed:** Botão de dark mode com estado correto para leitores de tela.
* **aria-labelledby:** Todas as `<section>` vinculadas ao seu `<h2>` via ID.
* **Blockquote semântico:** `<blockquote>` com `<footer>` interno e `<cite>` para identificar autoria.
* **Nav com aria-label:** Navegação identificada para leitores de tela.

#### 3. Hierarquia e SEO

* **Padronização de Títulos:** `<h1>` único, seguido de `<h2>` e `<h3>` em ordem lógica.
* **Logo separada da nav:** A imagem do livro foi retirada da `<ul>` de links.
* **role="contentinfo" removido** do `<footer>` por ser redundante com o elemento nativo.

### ✅ Checklist — Unidade 2

- [x] Criação correta de Header, Main e Footer semânticos
- [x] Substituição de Divs por tags semânticas (HTML5)
- [x] Alt descritivo em todas as imagens
- [x] Labels e aria-attributes em elementos interativos
- [x] Hierarquia lógica de títulos (H1 → H2 → H3)
- [x] Skip Link para acessibilidade via teclado
- [x] aria-pressed no botão de dark mode
- [x] Código original disponível para comparação

---

## 📅 Unidade 3 — CSS e Design Responsivo
### Atividade correspondente ao dia 07/05

Evolução da página semântica criada em 30/04 para torná-la **responsiva**, ou seja, adaptável a celulares, tablets e desktops, aplicando a abordagem Mobile-First com media queries e layout com Grid.

### 🛠️ Modificações Realizadas

#### 1. Meta Tag Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
Presente no `<head>` do documento para controlar a escala em dispositivos móveis.

#### 2. CSS Mobile-First (base para telas pequenas)
```css
/* Base mobile: fonte menor, 1 coluna */
body {
    font-size: 14px;
    width: 100%;
    display: block;
}
```
O código padrão inicial é sempre o do celular — estilos mais complexos são adicionados progressivamente via media queries.

#### 3. Breakpoints com Media Queries
```css
/* Tablet (≥600px): 2 colunas, fonte 16px */
@media screen and (min-width: 600px) {
    body { font-size: 16px; }
    .content-grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop (≥1024px): 3 colunas, fonte 18px */
@media screen and (min-width: 1024px) {
    body { font-size: 18px; }
    .content-grid { grid-template-columns: 1fr 1fr 1fr; }
}
```

#### 4. Layout com CSS Grid (Flexbox ou Grid)
```css
/* Mobile: 1 coluna (base) */
.content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}
```
Aplicado na seção "Eixos de Formação" (seção 1.3), demonstrando a reorganização de 1 → 2 → 3 colunas conforme a tela cresce.

#### 5. Imagens Responsivas
```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```
Garante que nenhuma imagem ultrapasse a largura do seu contêiner, evitando rolagem horizontal.

#### 6. Navbar com Hamburger Menu (Mobile)
A barra de navegação colapsa em um menu hambúrguer em telas menores que 700px, controlado via JavaScript e `aria-expanded`.

#### 7. Expansão do Projeto — Novas Páginas
Além do `index.html`, foram criadas três páginas adicionais com o mesmo visual responsivo e identidade consistente:

* **`engsoftmoderna.html`** — Página do livro ES Moderna com grid de capítulos responsivo
* **`manutencao.html`** — Página do livro Manutenção de Software com hero e grid de capítulos
* **`artigos.html`** — Coletânea de 25 artigos didáticos organizados por capítulo

Todas as páginas compartilham: navbar sticky responsiva, hero banner, dark mode, footer com créditos e link para o GitHub.

### ✅ Checklist — Unidade 3

- [x] Reutilização da página semântica criada em 30/04
- [x] Meta tag viewport inserida no `<head>`
- [x] Estilos Mobile-First definidos como base (font-size: 14px)
- [x] Media queries para tablet (≥600px) e desktop (≥1024px)
- [x] Layout com CSS Grid — `.content-grid` de 1 → 2 → 3 colunas
- [x] Imagens responsivas com `max-width: 100%` e `height: auto`
- [x] Navbar responsiva com hamburger menu para mobile
- [x] Ausência de rolagem horizontal verificada em todos os breakpoints

---

## 📅 Aula 13 — JavaScript e Interatividade
### Atividade correspondente ao dia 14/05

Evolução da página responsiva (07/05) para torná-la **interativa**, adicionando o "sistema nervoso" da aplicação: JavaScript manipulando o DOM e respondendo a eventos do usuário em tempo real, sem recarregar a página.

### 🛠️ O que foi implementado

#### 1. Arquivo `script.js` separado — vinculado no final do `<body>`
```html
<!-- Etapa 2 da atividade: vínculo correto no final do body -->
<script src="script.js"></script>
```
Separar o JS do HTML mantém o código organizado e garante que o DOM já esteja carregado quando o script executar.

#### 2. Seleção de elementos com `getElementById` (DOM Selection)
```javascript
const btnClique  = document.getElementById('btnClique');
const mensagem   = document.getElementById('mensagem');
const campoTexto = document.getElementById('campoTexto');
```

#### 3. Evento obrigatório: `click`
```javascript
btnClique.addEventListener('click', () => {
    mensagem.textContent = '✅ Você clicou no botão!';
    mensagem.classList.add('js-highlight');
});
```

#### 4. Evento obrigatório: `mouseover` + `mouseleave`
```javascript
btnClique.addEventListener('mouseover', () => {
    mensagem.textContent = '🖱️ Mouse sobre o botão — mouseover disparado!';
    mensagem.classList.add('js-hover');
});
```

#### 5. Evento obrigatório: `keyup` — eco em tempo real
```javascript
campoTexto.addEventListener('keyup', () => {
    eco.textContent = `💬 Você digitou: "${campoTexto.value}"`;
});
```

#### 6. Evento extra: `dblclick` — estilo dourado temporário
```javascript
btnClique.addEventListener('dblclick', () => {
    mensagem.classList.add('js-gold');
    setTimeout(() => mensagem.classList.remove('js-gold'), 1800);
});
```

#### 7. Evento extra: `keydown` — contador de caracteres
```javascript
campoTexto.addEventListener('keydown', () => {
    contador.textContent = `${campoTexto.value.length} caractere(s)`;
});
```

#### 8. Extra: esconder/mostrar elemento via DOM
```javascript
btnToggle.addEventListener('click', () => {
    const visivel = painelJs.style.display !== 'none';
    painelJs.style.display = visivel ? 'none' : 'block';
});
```

### 📂 Novo arquivo no projeto
```
pasta-do-projeto/
├── index.html    ← seção #interatividade adicionada + <script src="script.js">
├── script.js     ← arquivo JS separado (novo)
├── engsoftmoderna.html
├── manutencao.html
└── artigos.html
```

### ✅ Checklist — Aula 13

- [x] Reutilização da página responsiva criada em 07/05
- [x] Elementos HTML adicionados: botão (`#btnClique`), reset (`#btnReset`), campo de texto (`#campoTexto`)
- [x] Arquivo `script.js` criado e vinculado corretamente no final do `<body>`
- [x] DOM manipulado com `getElementById` e `classList`
- [x] Evento `click` — altera texto e estilo do painel de feedback
- [x] Evento `mouseover` — detecta passagem do mouse sobre o botão
- [x] Evento `keyup` — eco em tempo real do texto digitado
- [x] Evento extra `dblclick` — aplica estilo dourado temporário
- [x] Evento extra `keydown` — contador de caracteres em tempo real
- [x] Esconder/mostrar painel via `style.display` e toggle de botão
- [x] `aria-live` no painel de feedback para acessibilidade
- [x] Testes de fluxo realizados no navegador (F12 → Console)
- [x] Commit e push para o repositório no GitHub


---

## 🎨 Identidade Visual

O projeto adota uma identidade visual consistente em todas as páginas:

* **Cores:** Roxo escuro `#3d1d5c` e dourado `#c9a84c` como cores primárias
* **Tipografia:** Syne (títulos) + Source Serif 4 (corpo)
* **Dark Mode:** Alternável via botão com `aria-pressed` correto
* **Navbar sticky:** Fixa no topo com links de âncora para cada seção
* **Footer:** Grid de 3 colunas com créditos, navegação e links úteis

---

*Site reestruturado por **Renato Moreira Santos Faria** · [github.com/renasrenas2](https://github.com/renasrenas2)*
