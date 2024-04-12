import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const example = await prisma.example.create({
        data: {
            name: 'alice@prisma.io',
        },
    })
    console.log({ example })
}
main()
    .then(async () => {
        console.error("🌱 Start to seed the database...")
        await prisma.$disconnect()
        console.error("Prisma Client disconnected after seed the database")
    })
    .catch(async (e) => {
        console.error("Error on seed database: ", e)
        await prisma.$disconnect()
        console.error("Prisma Client disconnected after error: ", e)
        process.exit(1)
    })