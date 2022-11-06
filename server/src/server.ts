import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from './routes/pool'
import { userRoutes } from './routes/user'
import { guessRoutes } from './routes/guess'
import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'

async function bootstrap(){
    const fastify = Fastify({
        // solta logs de tudo que está acontecendo na aplicação, ajuda na monitoração
        logger: true,
    })

    //origin:true permite que qualquer aplicação acesse o backend, mas é mais saudável definir qual o domínio (ex: www.google.com)
    await fastify.register(cors, {
        origin: true,
    })

    // fastify.get('/pools/count', async () => {
    //     const pools = await prisma.pool.findMany({
    //         where:{
    //             code:{
    //                 startsWith: 'T'
    //             }
    //         }
    //     })

    //     return {pools}
    //em produção secret precisa ser uma variável ambiente    
    await fastify.register(jwt, {
        secret: 'nlwcopa',
    })
    

    await fastify.register(poolRoutes)
    await fastify.register(authRoutes)
    await fastify.register(userRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessRoutes)

    await fastify.listen({port: 3333, host: '0.0.0.0'})
}

bootstrap()