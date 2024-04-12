import { PrismaClient } from '@prisma/client'
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient()
const logger = new Logger('Example Seed')

async function main() {
    const example = await prisma.example.create({
        data: {
            name: 'alice@prisma.io',
        },
    })
}

main()
    .then(async () => {
        logger.log("🌱 Start to seed the database...")
        await prisma.$disconnect()
        logger.log("Prisma Client disconnected after seed the database")
    })
    .catch(async (e) => {
        logger.log("Error on seed database: ", e)
        await prisma.$disconnect()
        logger.log("Prisma Client disconnected after error: ", e)
        process.exit(1)
    })