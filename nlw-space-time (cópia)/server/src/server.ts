import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

// passamos a execução do fastify para uma variável
const app = fastify()

app.register(cors, {
  origin: true, //Todas as URLs de frontend poderão acessar o backend
})
// O método **register** do fastify serve para regstar um app de rota separado importando a rota do arquivo memoriesRoutes
app.register(memoriesRoutes)

// definimos a porta que o nosso servidor vai  rodar
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  }) // assim quand
