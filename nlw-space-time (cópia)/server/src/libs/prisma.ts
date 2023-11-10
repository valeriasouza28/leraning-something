// Faz  import do prisma client que faz com que a API tenha acesso a ao banco de dados
import { PrismaClient } from '@prisma/client'

// passamos o prisma client para a variável

export const prisma = new PrismaClient({
  log: ['query'],
})
