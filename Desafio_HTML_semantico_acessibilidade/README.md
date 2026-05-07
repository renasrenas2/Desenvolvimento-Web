# 🚀 Projeto de Otimização Semântica e Acessibilidade

Este projeto consistiu na reestruturação completa do código HTML do artigo "Desafios da Formação de Engenheiros de Software". O objetivo foi transformar um código fonte genérico em uma página web moderna, acessível e semanticamente correta, seguindo as diretrizes da disciplina de Desenvolvimento Web (Profª Kadidja Valéria).

## 🛠️ O que foi alterado (Site Antigo vs. Novo)

### 1. Reestruturação Semântica e Redução de Divs
O site original utilizava uma estrutura baseada quase inteiramente em `<div>`, o que não fornece significado ao navegador ou tecnologias assistivas.
- **Antes:** Conteúdo solto dentro de divisões genéricas.
- **Depois:** Implementação das tags de seção do HTML5:
    - `<header>`: Para o topo fixo e branding.
    - `<nav>`: Para os menus de navegação.
    - `<main>`: Para delimitar onde começa e termina o conteúdo principal.
    - `<article>`: Para o corpo do texto do artigo.
    - `<section>`: Para cada tópico numerado (1.1 a 1.6), permitindo que o navegador entenda a divisão do assunto.

### 2. Organização da Página Central
- Organizamos o fluxo de leitura de forma mais limpa, garantindo que a hierarquia de títulos (`h1`, `h2`, `h3`) seguisse uma ordem lógica, facilitando o SEO e o entendimento de quem usa leitores de tela.

### 3. Implementação de Rodapé (Footer) Institucional
O site original carecia de um encerramento formal.
- **Adição:** Criamos um `<footer>` completo, utilizando o modelo de grid, separando informações de copyright e links úteis de navegação.

### 4. Melataria em Acessibilidade e Navegação
- **Link de Retorno ao Topo:** Adicionamos um link funcional no rodapé que direciona o usuário imediatamente para o início do site (`#main-content`), melhorando a usabilidade em textos longos.
- **Skip Link:** Implementamos o link "Pular para o conteúdo principal" para usuários que navegam via teclado.
- **Contraste de Interface:** O botão de Modo Dark foi ajustado para que o texto nunca fique transparente, mantendo a visibilidade em qualquer tema.

## 🏁 Missões Concluídas
- [x] **Redução drástica de divs inúteis.**
- [x] **Aplicação de HTML5 Semântico puro.**
- [x] **Criação de Footer robusto.**
- [x] **Ajuste de acessibilidade nas imagens (Atributo Alt).**
- [x] **Melhoria no fluxo de navegação interna (links de âncora).**

---
**Desenvolvido por:** [Seu Nome]  
**Instituição:** CEUB | Engenharia de Software  
**Professor(a):** Kadidja Valéria
