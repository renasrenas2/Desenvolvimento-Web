                        DIAGRAMA DE ARQUITETURA UML

┌───────────────────────────────┐
│         <<Client>>            │
│           Frontend            │
├───────────────────────────────┤
│ • index.html                  │
│ • Formulário de Feedback      │
│ • Lista de Feedbacks          │
│ • JavaScript (fetch)          │
└───────────────┬───────────────┘
                │
                │ HTTP/JSON
                ▼
┌──────────────────────────────────────────────────────┐
│              <<Component>> Backend                   │
│                  Node.js + Express                   │
├──────────────────────────────────────────────────────┤
│ server.js                                            │
│                                                      │
│ Middleware                                           │
│ • Express JSON                                       │
│ • Helmet (Proteção XSS)                              │
│                                                      │
│ API REST                                             │
│ • GET    /api/feedbacks                              │
│ • POST   /api/feedbacks                              │
│ • DELETE /api/feedbacks/{id}                         │
└───────────────┬──────────────────────────────────────┘
                │
                │ Prisma ORM
                ▼
┌──────────────────────────────────────────────────────┐
│             <<Persistence>> Prisma ORM               │
├──────────────────────────────────────────────────────┤
│ • create()                                           │
│ • findMany()                                         │
│ • delete()                                           │
│                                                      │
│ Mapeamento JavaScript → SQL                          │
└───────────────┬──────────────────────────────────────┘
                │
                │ SQL
                ▼
┌──────────────────────────────────────────────────────┐
│                <<Database>> SQLite                   │
├──────────────────────────────────────────────────────┤
│ dev.db                                               │
│                                                      │
│ Feedback                                             │
│ ─────────────────────────────                        │
│ id : Int                                             │
│ texto : String                                       │
│ criadoEm : DateTime                                  │
└──────────────────────────────────────────────────────┘
