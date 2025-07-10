import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
   type zodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'

const app = fastify().withTypeProvider<zodTypeProvider>()   

app.register(fastifyCors, {
    origin: 'https://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
    console.log(`Port: ${process.env.PORT}`)
})