import { FastifyInstance } from 'fastify'
import { prisma } from '../libs/prisma'
import { z } from 'zod'

// configuraçãopadrão do fastify o nome da função é vocẽ que define, ela recebe app como parâmetro que é do tipo FastifyInstance
export async function memoriesRoutes(app: FastifyInstance) {
  // rota para listar todas as memorias

  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      // Eu quero ordenar as memória s pelo campo createdAt de forma crescente
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
        createdAt: memory.createdAt,
      }
    })
  })

  // lista memoria em especifico e para eu ter acesso eu preciso do id e utilizamos os **:** para passar o identificador para buuscar cada memoria
  app.get('/memories/:id', async (request) => {
    // const { id } = request.params

    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    // o findUniqueOrThrow é para encontarar ua única memória ou disparar um erro
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  // Cria memória
  app.post('/memories/:id', async (request) => {
    // valida o body da reuisição
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      // verficamos se a informação é pública ou não, que vai ser um booleano que inicia como false, e usa a função coerce para fazer essa validação em booleano para o html
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    // salva memória no banco de dados
    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '1197fe28-916d-40fe-8fd0-72c7a584aa80',
      },
    })

    return memory
  })

  // atualização da memória
  app.put('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      // verficamos se a informação é pública ou não, que vai ser um booleano que inicia como false, e usa a função coerce para fazer essa validação em booleano para o html
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  // remover memória
  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    // o findUniqueOrThrow é para encontarar ua única memória ou disparar um erro
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
