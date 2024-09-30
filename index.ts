import fastify from "fastify";

const app = fastify()

app.get('/hello', async () => {
  return 'hello word'
})

app.listen({
  port: 3333
})