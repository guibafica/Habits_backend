import Fastify from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';

const app = Fastify();

app.register(cors); // => qualquer aplicação pode consumir os dados
// app.register(cors, {
//   origin: ['http://localhost:3000'] // => apenas este endereço frontend teria acesso
// });

app.register(appRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 HTTP server listening on port 3333 🚀')
});