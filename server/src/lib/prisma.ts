import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    //mostra o log de cada query
    log: ['query'],
})