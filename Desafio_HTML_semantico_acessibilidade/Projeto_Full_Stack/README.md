# Sistema de Feedbacks de Clientes — Projeto Full Stack

**Disciplina:** Desenvolvimento Web — CEUB  
**Professora:** Kadidja Valéria  
**Alunos:** Renato Moreira Santos Faria e Guilherme Carvalho

**Metodologia:** ABP (Aprendizagem Baseada em Projetos) — Unidades 4, 5 e 6

---

## 1. Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- npm (vem junto com o Node.js)

### Passo a passo

```bash
# 1. Entre na pasta do projeto
cd Projeto_Full_Stack

# 2. Instale as dependências
npm install

# 3. Inicialize o banco de dados SQLite com Prisma
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init

# 4. Rode o servidor
node server.js
```

### Acesso
Abra o navegador em: **http://localhost:3000**

---

## 2. Diagrama Arquitetural

```
┌──────────────────────┐        HTTP (GET/POST/DELETE)       ┌─────────────────────────┐
│                      │ ──────────────────────────────────► │                         │
│  Frontend            │                                     │  Backend                │
│  (index.html)        │                                     │  (server.js — Express)  │
│                      │ ◄────────────────────────────────── │                         │
│  fetch('/api/...')   │        Resposta JSON                 │  Porta 3000             │
└──────────────────────┘                                     └────────────┬────────────┘
                                                                          │
                                                                          │ Prisma ORM
                                                                          │ (SQL gerado automaticamente)
                                                                          ▼
                                                             ┌─────────────────────────┐
                                                             │  Banco de Dados         │
                                                             │  SQLite (prisma/dev.db) │
                                                             └─────────────────────────┘
```

**Fluxo:** O usuário digita um feedback → o frontend envia via `fetch()` → o backend Express recebe → Prisma salva no SQLite → a resposta volta em JSON → o frontend atualiza a interface.

---

## 3. Entidade e Modelo de Dados

```
┌─────────────────────┐
│      Feedback       │
├─────────────────────┤
│ id       (Integer)  │ ← chave primária, autoincremento
│ texto    (String)   │ ← conteúdo do feedback
│ criadoEm (DateTime) │ ← data de criação (automática)
└─────────────────────┘
```

---

## 4. ORM Utilizado — Prisma

O Prisma foi escolhido pela alta simplicidade de configuração com SQLite. Ele faz o mapeamento entre objetos JavaScript e tabelas do banco sem precisar escrever SQL puro.

**Instalação:**
```bash
npm install @prisma/client prisma
npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
```

**Schema (`prisma/schema.prisma`):**
```prisma
model Feedback {
  id        Int      @id @default(autoincrement())
  texto     String
  criadoEm DateTime @default(now())
}
```

---

## 5. Rotas CRUD Disponíveis

| Ação                  | Método HTTP | Rota                   | Descrição                        |
|-----------------------|-------------|------------------------|----------------------------------|
| Listar feedbacks      | `GET`       | `/api/feedbacks`       | Retorna todos os feedbacks       |
| Criar novo feedback   | `POST`      | `/api/feedbacks`       | Salva um novo feedback no banco  |
| Remover feedback      | `DELETE`    | `/api/feedbacks/:id`   | Deleta um feedback pelo ID       |

**Exemplo de body para POST:**
```json
{ "texto": "Ótimo serviço!" }
```

**Exemplo de resposta:**
```json
{ "id": 1, "texto": "Ótimo serviço!", "criadoEm": "2026-06-23T10:00:00.000Z" }
```

---

## 6. Análise de Vulnerabilidade XSS e Resolução (Aula 18)

### O que é XSS (Cross-Site Scripting)?

XSS é um ataque onde um usuário malicioso injeta código JavaScript no campo de texto. Se o sistema exibir esse código com `innerHTML`, ele será **executado** pelo browser de todos os usuários que visualizarem o feedback.

**Exemplo de ataque:**
```
Texto digitado: <script>alert('Hackeado!')</script>
```

### Caminho Vulnerável ❌

```javascript
// INSEGURO — executa qualquer script injetado
elemento.innerHTML = feedbackDoUsuario
```

### Resolução Implementada ✅

**Frontend — `textContent` em vez de `innerHTML`:**
```javascript
// SEGURO — trata tudo como texto puro, nunca como código
textoEl.textContent = fb.texto
```

**Backend — pacote `helmet`:**
```javascript
const helmet = require('helmet')
app.use(helmet()) // adiciona cabeçalhos HTTP de segurança:
                  // Content-Security-Policy, X-Frame-Options,
                  // X-XSS-Protection, Strict-Transport-Security...
```

O `helmet` bloqueia a execução de scripts não autorizados no browser, mesmo que o frontend cometesse algum erro.

---

## 7. Estrutura de Arquivos

```
Projeto_Full_Stack/
├── index.html           ← Frontend (interface do usuário)
├── server.js            ← Backend (API Express + Prisma)
├── package.json         ← Dependências do projeto
├── prisma/
│   ├── schema.prisma    ← Modelo de dados (entidade Feedback)
│   └── dev.db           ← Banco SQLite (gerado pelo migrate)
└── README.md            ← Esta documentação
```

---

## 8. Uso de Inteligência Artificial

Conforme as diretrizes do CEUB, declaro que utilizei IA (Claude da Anthropic) como apoio para:
- Geração da estrutura inicial dos arquivos `server.js` e `index.html`
- Revisão da lógica de proteção XSS com `textContent`
- Formatação deste README

Todo o código foi revisado, compreendido e adaptado pelo aluno para o contexto do projeto.
