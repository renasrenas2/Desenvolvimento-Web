# 🚀 Reestruturação Semântica, Acessibilidade e Design Responsivo

**Curso:** Engenharia de Software

**Disciplina:** Desenvolvimento Web

**Feito por:** Renato Moreira Santos Faria

**Link para o site:** comfy-travesseiro-4b1b81.netlify.app

---

## 📋 Sobre o Projeto

Este repositório reúne as atividades práticas da disciplina de Desenvolvimento Web. O ponto de partida foi o artigo *"Desafios da Formação de Engenheiros de Software"* — um HTML gerado automaticamente — que foi progressivamente evoluído em três etapas: reestruturação semântica, acessibilidade e design responsivo.

---

## 📂 Estrutura do Repositório

```
Desafio_HTML_semantico_acessibilidade/
├── html/
│   ├── index.html            # Página principal — artigo com semântica, acessibilidade e responsividade
│   ├── engsoftmoderna.html   # Página do livro Engenharia de Software Moderna
│   ├── manutencao.html       # Página do livro Fundamentos de Manutenção de Software
│   └── artigos.html          # Página de artigos didáticos
├── css/
│   ├── index.css             # Estilos da página principal
│   ├── engsoftmoderna.css    # Estilos da página ES Moderna
│   ├── manutencao.css        # Estilos da página Manutenção
│   └── artigos.css           # Estilos da página de artigos
├── js/
│   ├── script.js             # Interatividade (eventos DOM) da página principal
│   └── navbar.js             # Lógica da navbar responsiva (hamburger menu)
├── vue-prototipo.html                # Protótipo Vue.js 3 via CDN (Aula 11)
├── site_original_sem_alteracoes.html # Código original mantido para comparação
└── README.md
```

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

## 📅 Aula 11 — Frameworks Front-end: Prototipagem Ágil
### Atividade correspondente ao dia 21/05/2026

Evolução da aplicação para o universo dos **frameworks front-end modernos**.  
A aula foi dividida em duas missões: um seminário colaborativo (Missão 1) e um laboratório prático (Missão 2).

---

### 🎓 Missão 1 — Seminário Colaborativo

Framework estudado: **Vue.js**

#### Por que Vue.js? (Justificativa)

Vue.js foi escolhido por três razões principais:

1. **Menor curva de aprendizado** entre os três frameworks (React, Angular, Vue.js), com sintaxe intuitiva e próxima do HTML/CSS/JS que já dominamos nas aulas anteriores.
2. **Funciona via CDN** sem necessidade de instalar Node.js, npm ou CLI — permitindo rodar o protótipo diretamente no navegador como um único arquivo `.html`, ideal para o ambiente de laboratório.
3. **Framework Progressivo** — pode ser adotado gradualmente em um projeto existente, o que se alinha bem com a proposta de evolução incremental que seguimos ao longo da disciplina.

#### Tópicos obrigatórios do seminário

| Tópico | Vue.js |
|---|---|
| **Filosofia** | Framework Progressivo — adoção gradual, sem impor estrutura |
| **Criado por** | Evan You (ex-Google), 2014 |
| **Curva de aprendizado** | Baixa — sintaxe intuitiva, próxima do HTML |
| **Vantagens** | Leve, flexível, excelente documentação em PT-BR |
| **Limitações** | Ecossistema menor que React; menos adotado em grandes empresas |
| **Cenário ideal** | Protótipos rápidos, projetos ágeis, refatoração de legados |
| **Exemplos reais** | Alibaba, Xiaomi, GitLab |

#### Comparativo rápido (Matriz Diagnóstica da aula)

| Dimensão | React | Angular | **Vue.js** |
|---|---|---|---|
| Filosofia | Biblioteca de UI | Framework Completo (MVC) | **Framework Progressivo** |
| Curva de aprendizado | Média | Alta | **Baixa** |
| Cenário ideal | Startups, ecossistemas densos | Aplicações Enterprise | **Projetos ágeis, legados** |

---

### 🔬 Missão 2 — Laboratório Prático

**Arquivo:** `vue-prototipo.html`  
**Tecnologia:** Vue.js 3 via CDN (sem instalação, roda direto no navegador)

#### Requisitos funcionais implementados

| # | Requisito | Implementação Vue.js |
|---|---|---|
| 1 | Título dinâmico | `v-model` vincula o `<input>` ao dado `titulo` em tempo real |
| 2 | Botão interativo (evento de clique) | `@click`, `@dblclick`, `@mouseover` com dados reativos |
| 3 | Lista dinâmica de itens | `v-for` renderiza o array `itens` automaticamente |

#### Conceitos Vue.js demonstrados no protótipo

```javascript
// Composition API — Vue 3
const { createApp, ref, computed } = Vue

// Dado reativo (Requisito 1 — título dinâmico)
const titulo = ref('Desafios da Formação de Engenheiros de Software')

// Evento de clique (Requisito 2)
const cliques = ref(0)
// No template: <button @click="cliques++">Clique</button>

// Array reativo (Requisito 3 — lista dinâmica)
const itens = ref([])
const adicionarItem = () => {
    itens.value.push({ id: Date.now(), texto: novoItem.value })
}
// No template: <li v-for="item in itens" :key="item.id">{{ item.texto }}</li>
```

#### Diferencial Vue vs Vanilla JS

| Tarefa | Vanilla JS (Aulas anteriores) | Vue.js (Esta aula) |
|---|---|---|
| Atualizar texto | `document.getElementById('x').textContent = valor` | `{{ titulo }}` — automático via `v-model` |
| Evento de clique | `btn.addEventListener('click', fn)` | `@click="fn"` no template |
| Renderizar lista | `document.createElement('li')` em loop | `v-for="item in itens"` |
| Condicional | `if (x) el.style.display = 'block'` | `v-if="x"` no template |

#### Fricções encontradas

- A **Composition API** do Vue 3 (`setup()`, `ref()`) tem sintaxe diferente da Options API (Vue 2), o que gerou confusão inicial na hora de expor variáveis ao template.
- O `transition-group` para animar a lista exige que cada item tenha uma `key` única — resolvido usando `Date.now()` como ID.
- Sem servidor local, alguns navegadores bloqueiam módulos ES (`import/export`). A solução foi usar a build **global** do Vue via CDN (`vue.global.js`), que expõe tudo em `window.Vue`.

### ✅ Checklist — Aula 11

- [x] Divisão em grupos para seminário — framework escolhido: **Vue.js**
- [x] Pesquisa sobre história, características, vantagens e limitações do Vue.js
- [x] Justificativa da escolha documentada no README
- [x] Instalação do ambiente — Vue.js via CDN (sem setup de Node/CLI)
- [x] Criação do protótipo funcional (`vue-prototipo.html`)
- [x] Requisito 1: Título dinâmico com `v-model`
- [x] Requisito 2: Botão interativo com `@click`, `@dblclick`, `@mouseover`
- [x] Requisito 3: Lista dinâmica com `v-for` e animação `transition-group`
- [x] Testes executados no navegador
- [x] Fricções técnicas documentadas no README
- [x] Código registrado no GitHub


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
