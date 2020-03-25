const express = require('express')
const cors    = require('cors')     // módulo de segurança p/ login
const routes  = require('./routes') // arquivo routes.js

const app = express()

app.use(cors())
app.use(express.json()) // avisa p/ app express q usamos json no corpo das requisições
app.use(routes)

// Rota / Recurso (route/resource)

/**
 * Métodos HTTP:
 * 
 * GET:    Buscar uma informação no back-end
 * POST:   Criar uma informação no back-end
 * PUT:    Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Parms:  Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *               pode ser concatenados com &
 * Route Parms:  Parâmetros ñ nomeados utilizados para identificar recursos :id 
 *               com /rota/:id exemplo: /users/1
 * Request Body: Corpo da Requisição utlizado p/ criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
// app.post('/users', (request, response) => {
//   // return response.send('Hello World')
//   // const dados = request.query
//   // const dados = request.params
//   const dados = request.body
//   console.log(dados)
  
//   return response.json({
//     evento: 'Semana Omnistack 11.0',
//     aluno: 'Magna Carvalho'
//   })
// })

app.listen(3333)