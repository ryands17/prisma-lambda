import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})

async function main() {
  for (let i = 0; i < 100; i++)
    await prisma.user.create({ data: { name: `user ${i}` } })
}

main()
  .catch((e) => {
    console.dir(e)
    console.log('message', e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
