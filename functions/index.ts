import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DB_URL,
    },
  },
})

export const handler = async (event: any) => {
  let users = await prisma.user.findMany()
  console.log(users)
  return 'done'
}
