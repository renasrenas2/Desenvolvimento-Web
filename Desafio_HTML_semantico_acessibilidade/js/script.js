/**
 * script.js — Aula 13: JavaScript e Interatividade
 * Unidade 3 | Desenvolvimento Web | CEUB
 * Profa. Kadidja Valéria | 14/05/2026
 *
 * Implementa os 3 eventos obrigatórios + extras da atividade prática:
 *   ✅ click      — altera texto e estilo do painel de feedback
 *   ✅ mouseover  — destaca o botão ao passar o mouse
 *   ✅ keyup      — eco em tempo real do texto digitado
 *   ★  dblclick   — efeito de destaque dourado (evento extra)
 *   ★  keydown    — conta caracteres em tempo real (evento extra)
 *   ★  esconder/mostrar seção inteira via DOM
 */

'use strict';

/* ══════════════════════════════════════════
   1. SELEÇÃO DE ELEMENTOS (DOM Selection)
   Usamos getElementById conforme exigido
══════════════════════════════════════════ */
const btnClique   = document.getElementById('btnClique');
const btnReset    = document.getElementById('btnReset');
const btnToggle   = document.getElementById('btnToggle');
const mensagem    = document.getElementById('mensagem');
const campoTexto  = document.getElementById('campoTexto');
const eco         = document.getElementById('eco');
const contador    = document.getElementById('contador');
const painelJs    = document.getElementById('painel-js');

// Estado inicial guardado para o reset
const TEXTO_INICIAL = mensagem ? mensagem.textContent : '';

/* ══════════════════════════════════════════
   2. EVENTO: click
   Altera o texto e adiciona classe CSS
   de destaque ao parágrafo de mensagem
══════════════════════════════════════════ */
if (btnClique) {
    btnClique.addEventListener('click', () => {
        mensagem.textContent = '✅ Você clicou no botão! O DOM foi manipulado via JavaScript.';
        mensagem.classList.add('js-highlight');
        mensagem.classList.remove('js-hover');
        btnClique.setAttribute('aria-pressed', 'true');
    });
}

/* ══════════════════════════════════════════
   3. EVENTO: mouseover  (+ mouseleave)
   Altera texto ao passar o mouse;
   restaura ao sair
══════════════════════════════════════════ */
if (btnClique) {
    btnClique.addEventListener('mouseover', () => {
        if (!mensagem.classList.contains('js-highlight')) {
            mensagem.textContent = '🖱️ O mouse está sobre o botão — evento mouseover disparado!';
            mensagem.classList.add('js-hover');
        }
    });

    btnClique.addEventListener('mouseleave', () => {
        if (mensagem.classList.contains('js-hover')) {
            mensagem.textContent = TEXTO_INICIAL;
            mensagem.classList.remove('js-hover');
        }
    });
}

/* ══════════════════════════════════════════
   4. EVENTO: keyup
   Eco em tempo real do texto digitado
══════════════════════════════════════════ */
if (campoTexto) {
    campoTexto.addEventListener('keyup', () => {
        const valor = campoTexto.value;
        eco.textContent = valor.length > 0
            ? `💬 Você digitou: "${valor}"`
            : '';
    });
}

/* ══════════════════════════════════════════
   5. EVENTO EXTRA: keydown
   Conta os caracteres em tempo real
   (antes mesmo da tecla soltar)
══════════════════════════════════════════ */
if (campoTexto && contador) {
    campoTexto.addEventListener('keydown', () => {
        // +1 porque o keydown dispara antes do caractere entrar
        const total = campoTexto.value.length;
        contador.textContent = `${total} caractere(s)`;
    });
}

/* ══════════════════════════════════════════
   6. EVENTO EXTRA: dblclick
   Aplica destaque dourado e muda estilo
══════════════════════════════════════════ */
if (btnClique) {
    btnClique.addEventListener('dblclick', () => {
        mensagem.textContent = '⭐ Duplo clique detectado! Evento dblclick — estilo alterado via JS.';
        mensagem.classList.remove('js-highlight', 'js-hover');
        mensagem.classList.add('js-gold');
        setTimeout(() => {
            mensagem.classList.remove('js-gold');
            mensagem.classList.add('js-highlight');
        }, 1800);
    });
}

/* ══════════════════════════════════════════
   7. EVENTO EXTRA: esconder/mostrar
   Alterna visibilidade do painel inteiro
══════════════════════════════════════════ */
if (btnToggle && painelJs) {
    btnToggle.addEventListener('click', () => {
        const visivel = painelJs.style.display !== 'none';
        painelJs.style.display = visivel ? 'none' : 'block';
        btnToggle.textContent   = visivel ? '👁️ Mostrar painel' : '🙈 Esconder painel';
        btnToggle.setAttribute('aria-expanded', String(!visivel));
    });
}

/* ══════════════════════════════════════════
   8. RESET — volta ao estado inicial
══════════════════════════════════════════ */
if (btnReset) {
    btnReset.addEventListener('click', () => {
        mensagem.textContent = TEXTO_INICIAL;
        mensagem.classList.remove('js-highlight', 'js-hover', 'js-gold');

        if (campoTexto)  campoTexto.value   = '';
        if (eco)         eco.textContent    = '';
        if (contador)    contador.textContent = '0 caractere(s)';

        if (painelJs) painelJs.style.display = 'block';
        if (btnToggle) {
            btnToggle.textContent = '🙈 Esconder painel';
            btnToggle.setAttribute('aria-expanded', 'true');
        }
        if (btnClique) btnClique.setAttribute('aria-pressed', 'false');
    });
}

/* ══════════════════════════════════════════
   9. Dark mode — mantém o toggle do index
   (o script.js é carregado após o inline
   do dark-mode-toggle, então apenas
   garante que o estado inicial seja lido)
══════════════════════════════════════════ */
const darkBtn = document.getElementById('dark-mode-toggle');
if (darkBtn) {
    // já inicializado inline; apenas garante aria-pressed correto
    const tema = document.documentElement.getAttribute('data-theme');
    darkBtn.setAttribute('aria-pressed', tema === 'dark' ? 'true' : 'false');
}


/* ══════════════════════════════════════════════════════
   DESAFIOS EXTRAS — Aula 13
   Implementados por: Renato Moreira Santos Faria

   🟢 FÁCIL    — Botão que altera a cor de fundo da página
   🟡 MÉDIO    — Contador de cliques + classList.toggle()
   🔴 AVANÇADO — Lista dinâmica de itens
══════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────
   🟢 DESAFIO FÁCIL
   Botão que altera a cor de fundo da página
   ao ser clicado (classList.toggle em body)
───────────────────────────────────────── */
const btnCorFundo = document.getElementById('btnCorFundo');

// Paleta de temas de fundo disponíveis
const temasFundo = ['tema-roxo', 'tema-verde', 'tema-laranja', 'tema-azul'];
let temaAtual = 0;

if (btnCorFundo) {
    btnCorFundo.addEventListener('click', () => {
        // Remove o tema anterior do body
        document.body.classList.remove(...temasFundo);

        // Avança para o próximo tema (cicla em loop)
        temaAtual = (temaAtual + 1) % temasFundo.length;
        document.body.classList.add(temasFundo[temaAtual]);

        // Atualiza o rótulo do botão com o tema ativo
        const nomes = ['Roxo', 'Verde', 'Laranja', 'Azul'];
        btnCorFundo.textContent = `🎨 Tema: ${nomes[temaAtual]}`;
    });
}


/* ─────────────────────────────────────────
   🟡 DESAFIO MÉDIO — Parte A
   Contador de cliques: cada clique no botão
   incrementa e exibe o número na tela
───────────────────────────────────────── */
const btnContador     = document.getElementById('btnContador');
const displayContador = document.getElementById('displayContador');
const btnZerarContador = document.getElementById('btnZerarContador');
let totalCliques = 0;

if (btnContador && displayContador) {
    btnContador.addEventListener('click', () => {
        totalCliques++;
        displayContador.textContent = totalCliques;

        // Muda a cor do display conforme o número cresce
        displayContador.className = 'contador-display';
        if (totalCliques >= 10) displayContador.classList.add('contador-quente');
        if (totalCliques >= 20) displayContador.classList.add('contador-max');
    });
}

if (btnZerarContador && displayContador) {
    btnZerarContador.addEventListener('click', () => {
        totalCliques = 0;
        displayContador.textContent = '0';
        displayContador.className = 'contador-display';
    });
}

/* ─────────────────────────────────────────
   🟡 DESAFIO MÉDIO — Parte B
   classList.toggle() para alternar entre
   dois estilos visuais num card de destaque
───────────────────────────────────────── */
const btnToggleEstilo = document.getElementById('btnToggleEstilo');
const cardEstilo      = document.getElementById('cardEstilo');

if (btnToggleEstilo && cardEstilo) {
    btnToggleEstilo.addEventListener('click', () => {
        // toggle adiciona a classe se não existir; remove se existir
        const ativo = cardEstilo.classList.toggle('estilo-alternativo');
        btnToggleEstilo.textContent = ativo
            ? '🌙 Voltar ao estilo padrão'
            : '🌗 Alternar estilo';
        btnToggleEstilo.setAttribute('aria-pressed', String(ativo));
    });
}


/* ─────────────────────────────────────────
   🔴 DESAFIO AVANÇADO
   Lista dinâmica: o usuário digita um item
   e ele é adicionado à lista na página.
   Cada item tem um botão de remover (×).
───────────────────────────────────────── */
const inputLista   = document.getElementById('inputLista');
const btnAdicionarItem = document.getElementById('btnAdicionarItem');
const listaItens   = document.getElementById('listaItens');
const avisoVazio   = document.getElementById('avisoVazio');

/**
 * Cria e insere um novo <li> na lista dinâmica.
 * @param {string} texto — conteúdo do item
 */
function adicionarItem(texto) {
    const textoLimpo = texto.trim();
    if (!textoLimpo) return; // ignora entradas vazias

    // Cria o elemento <li>
    const li = document.createElement('li');
    li.className = 'lista-item';

    // Texto do item
    const span = document.createElement('span');
    span.textContent = textoLimpo;

    // Botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = '×';
    btnRemover.className = 'btn-remover-item';
    btnRemover.setAttribute('aria-label', `Remover "${textoLimpo}"`);
    btnRemover.setAttribute('type', 'button');

    // Evento: remove o <li> ao clicar em ×
    btnRemover.addEventListener('click', () => {
        li.classList.add('item-saindo');
        setTimeout(() => {
            li.remove();
            atualizarAvisoVazio();
        }, 280);
    });

    li.appendChild(span);
    li.appendChild(btnRemover);
    listaItens.appendChild(li);

    // Limpa o campo e foca novamente
    inputLista.value = '';
    inputLista.focus();
    atualizarAvisoVazio();
}

/**
 * Exibe ou oculta o aviso de lista vazia
 */
function atualizarAvisoVazio() {
    if (!avisoVazio || !listaItens) return;
    const temItens = listaItens.querySelectorAll('.lista-item').length > 0;
    avisoVazio.style.display = temItens ? 'none' : 'block';
}

// Adiciona item ao clicar no botão
if (btnAdicionarItem && inputLista) {
    btnAdicionarItem.addEventListener('click', () => {
        adicionarItem(inputLista.value);
    });

    // Adiciona item ao pressionar Enter no campo
    inputLista.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') adicionarItem(inputLista.value);
    });
}
