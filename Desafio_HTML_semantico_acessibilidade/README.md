# 🚀 Desafio: Reestruturação Semântica e Acessibilidade Digital 
## Atividade correspondente ao dia 30/04
Este repositório contém a atividade prática de reestruturação do artigo "Desafios da Formação de Engenheiros de Software". O foco foi transformar um código-fonte genérico e automático em uma página web moderna e inclusiva.

## 📂 Estrutura do Repositório

Para facilitar a avaliação e a comparação do trabalho realizado, o repositório foi organizado da seguinte forma:

* **[index.html](index.html):** Código-fonte reestruturado com aplicação total de HTML5 Semântico e recursos de acessibilidade.
* **[site_original_sem_alteracoes.html](site_original_sem_alteracoes.html):** Cópia do código-fonte original do site, mantido para fins de comparação e evidência das melhorias realizadas.

---

## 🛠️ Modificações e Melhorias Realizadas

### 1. Arquitetura de Informação (Tags de Seção)
Substituímos o uso excessivo de `<div>` por uma estrutura semântica que define claramente as áreas do site:
* **Header:** Organizado com `<nav>` para links e branding.
* **Main:** Delimita exclusivamente o conteúdo principal do artigo.
* **Footer:** Criado do zero com uma estrutura de grid, contendo informações institucionais, copyright e links de apoio.
* **Article e Section:** O texto foi encapsulado em `<article>` e cada sub-tópico (1.1 a 1.6) recebeu uma `<section>` própria.

### 2. Acessibilidade (WCAG e Navegação)
* **Skip Link (Link de Salto):** Implementamos o recurso "Pular para o conteúdo principal" para usuários de teclado.
* **Textos Alternativos:** Adição de atributo `alt` descritivo em todas as imagens.
* **Contraste e Labels:** Correção do botão de "Modo Dark" e adição de `aria-label` em elementos interativos.
* **Âncora de Retorno:** Link no rodapé para retorno imediato ao topo da página.

### 3. Hierarquia e SEO
* **Padronização de Títulos:** Ajuste da hierarquia lógica (`<h1>` único, seguido de `<h2>` e `<h3>`), garantindo uma estrutura de títulos impecável.

## ✅ Checklist de Qualidade Atendido
- [x] Criação correta de Header, Main e Footer.
- [x] Substituição de Divs por tags semânticas (HTML5).
- [x] Adição de Alt em imagens e Labels de acessibilidade.
- [x] Organização da hierarquia lógica de títulos (H1 -> H2 -> H3).
- [x] Implementação de Skip Link para acessibilidade via teclado.
- [x] Disponibilização do código original para comparação.

---
**Curso:** Engenharia de Software  
**Disciplina:** Desenvolvimento Web
**Feito por:** Renato Moreira Santos Faria  
