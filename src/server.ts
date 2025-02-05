import fastify from 'fastify'

interface Name {
  name: string
}

const server = fastify({ logger: true })

const start = async () => {
  server.get('/', async (req, res) => {
    res.status(200).send({
      message: 'Parabéns, você conseguiu configurar o servidor corretamente!'
    })
  })

  server.post('/name', async (req, res) => {
    const { name } = req.body as Name
    return { name }
  })

  server.listen({ port: 3333 }, () => {
    console.log('Server running...')
  })
}

start()
