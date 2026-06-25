/**
 * server.js — Projeto Full Stack: Sistema de Feedbacks
 * =====================================================
 * Aula 16: Arquitetura Cliente-Servidor + rota mockada
 * Aula 17: Persistência real com Prisma ORM + SQLite
 * Aula 18: Segurança web com helmet (cabeçalhos HTTP)
 *
 * Stack: Node.js + Express + Prisma ORM + SQLite
 * Autor: Renato Moreira Santos Faria — CEUB
 */

'use strict'

const express      = require('express')
const helmet       = require('helmet')
const path         = require('path')
const { PrismaClient } = require('@prisma/client')

const app    = express()
const prisma = new PrismaClient()
const PORT   = 3000

// ══════════════════════════════════════════════════
//  MIDDLEWARES
// ══════════════════════════════════════════════════

// Aula 18 — Segurança: helmet adiciona cabeçalhos HTTP de proteção
// Content-Security-Policy desativado para permitir scripts inline do frontend
// Os demais headers (X-Frame-Options, X-XSS-Protection, etc.) continuam ativos
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// Parse de JSON no body das requisições
app.use(express.json())

// Serve os arquivos estáticos (index.html, css, js) da pasta atual
app.use(express.static(path.join(__dirname)))

// ══════════════════════════════════════════════════
//  ROTAS CRUD — Entidade: Feedback
//  Aula 17: Substituiu os dados mockados por banco real
// ══════════════════════════════════════════════════

/**
 * GET /api/feedbacks
 * Read — Lista todos os feedbacks do banco
 */
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { criadoEm: 'desc' },
    })
    res.json(feedbacks)
  } catch (error) {
    console.error('Erro ao buscar feedbacks:', error)
    res.status(500).json({ erro: 'Erro interno ao buscar feedbacks.' })
  }
})

/**
 * POST /api/feedbacks
 * Create — Salva um novo feedback no banco
 *
 * Aula 18 — Sanitização: o texto é salvo como dado puro no banco.
 * A proteção XSS acontece no frontend com textContent (não innerHTML).
 */
app.post('/api/feedbacks', async (req, res) => {
  const { texto } = req.body

  if (!texto || typeof texto !== 'string' || texto.trim().length === 0) {
    return res.status(400).json({ erro: 'O campo "texto" é obrigatório e não pode estar vazio.' })
  }

  if (texto.trim().length > 500) {
    return res.status(400).json({ erro: 'O feedback não pode ter mais de 500 caracteres.' })
  }

  try {
    const novoFeedback = await prisma.feedback.create({
      data: { texto: texto.trim() },
    })
    res.status(201).json(novoFeedback)
  } catch (error) {
    console.error('Erro ao criar feedback:', error)
    res.status(500).json({ erro: 'Erro interno ao salvar feedback.' })
  }
})

/**
 * DELETE /api/feedbacks/:id
 * Delete — Remove um feedback pelo ID
 */
app.delete('/api/feedbacks/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)

  if (isNaN(id)) {
    return res.status(400).json({ erro: 'ID inválido.' })
  }

  try {
    await prisma.feedback.delete({ where: { id } })
    res.json({ mensagem: `Feedback #${id} removido com sucesso.` })
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ erro: `Feedback #${id} não encontrado.` })
    }
    console.error('Erro ao deletar feedback:', error)
    res.status(500).json({ erro: 'Erro interno ao deletar feedback.' })
  }
})

// ══════════════════════════════════════════════════
//  INICIALIZAÇÃO DO SERVIDOR
// ══════════════════════════════════════════════════
app.listen(PORT, () => {
  console.log(`\n✅ Servidor rodando em http://localhost:${PORT}`)
  console.log(`   • GET    /api/feedbacks       → lista todos`)
  console.log(`   • POST   /api/feedbacks       → cria novo`)
  console.log(`   • DELETE /api/feedbacks/:id   → remove por ID`)
  console.log(`\n   Frontend: http://localhost:${PORT}/index.html`)
  console.log(`   Banco:    SQLite (prisma/dev.db)\n`)
})