import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors); // => qualquer aplicação pode consumir os dados
// app.register(cors, {
//   origin: ['http://localhost:3000'] // => apenas este endereço frontend teria acesso
// });

app.get('/', () => {
  return 'Hello world!';
});

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 HTTP server listening on port 3333 🚀')
});