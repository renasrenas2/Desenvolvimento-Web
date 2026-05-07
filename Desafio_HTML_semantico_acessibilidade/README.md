# 🚀 Desafio: Reestruturação Semântica e Acessibilidade Digital

Este projeto apresenta a reestruturação do código-fonte do artigo "Desafios da Formação de Engenheiros de Software". Partindo de uma base gerada automaticamente com falhas estruturais, aplicamos conceitos avançados de HTML5 e diretrizes de acessibilidade para transformar o site em uma plataforma semântica e inclusiva.

## 🛠️ Modificações e Melhorias Realizadas

Com base nos critérios de avaliação da disciplina, as seguintes ações foram executadas:

### 1. Arquitetura de Informação (Tags de Seção)
Substituímos o uso excessivo de `<div>` por uma estrutura semântica que define claramente as áreas do site:
* **Header:** Organizado com `<nav>` para links e branding.
* **Main:** Delimita exclusivamente o conteúdo principal do artigo.
* **Footer:** Criado do zero com uma estrutura de grid, contendo informações institucionais, copyright e links de apoio.
* **Article e Section:** O texto foi encapsulado em `<article>` e cada sub-tópico (1.1 a 1.6) recebeu uma `<section>` própria, facilitando o mapeamento por navegadores.

### 2. Acessibilidade (WCAG e Navegação)
* **Skip Link (Link de Salto):** Implementamos um link oculto ("Pular para o conteúdo principal") que é o primeiro item a receber foco via teclado, permitindo saltar o menu principal.
* **Textos Alternativos:** Todas as imagens e infográficos receberam o atributo `alt` descritivo, garantindo que usuários de leitores de tela compreendam as figuras e dados apresentados.
* **Contraste e Labels:** Corrigimos a visibilidade do botão de "Modo Dark" (antes com texto transparente) e adicionamos `aria-label` para descrever funções de botões e links de imagem.
* **Âncora de Retorno:** Adicionamos um link no rodapé que permite ao usuário retornar rapidamente ao topo da página principal.

### 3. Hierarquia e SEO
* **Padronização de Títulos:** Corrigimos a hierarquia de cabeçalhos. O site agora possui um único `<h1>` (título de maior importância), seguido por `<h2>` para capítulos e `<h3>` para subseções, sem pular níveis hierárquicos.

### 4. Código Limpo e Semântico
* O código foi higienizado, removendo scripts e estilos em linha redundantes herdados do site original.
* Utilizamos a tag `<figure>` e `<figcaption>` para garantir que as legendas das imagens estejam semanticamente ligadas às fotos.
* Citações foram marcadas com a tag `<blockquote>`, fornecendo o sentido correto de "bloco de citação" para o navegador.

## ✅ Checklist de Qualidade Atendido
- [x] Criação correta de Header, Main e Footer.
- [x] Substituição de Divs por tags semânticas (HTML5).
- [x] Adição de Alt em imagens e Labels de acessibilidade.
- [x] Organização da hierarquia lógica de títulos (H1 -> H2 -> H3).
- [x] Implementação de Skip Link para acessibilidade via teclado.
- [x] Garantia de código limpo e semântica correta.

---
**Curso:** Engenharia de Software  
**Disciplina:** Desenvolvimento Web  
**Desenvolvido por:** Renato Moreira Santos Faria
