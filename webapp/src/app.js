import Fastify from 'fastify'
import { addTwoNumbers } from './controller/addTwoNumbers.js'

const fastify = Fastify({ logger: true })

fastify.get('/', async (request, reply) => {
  return { task: '6-1 pipeline' }
})

fastify.get('/addTwoNumbers/:num1/:num2', async (request, reply) => {
  const { num1, num2 } = request.params

  const number1 = parseInt(num1, 10)
  const number2 = parseInt(num2, 10)

  if (isNaN(number1) || isNaN(number2)) {
    return reply.status(400).send({ error: 'Invalid input numbers' })
  }

  const result = addTwoNumbers(number1, number2)

  return reply.send({ result })
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
