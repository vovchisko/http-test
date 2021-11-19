import fastify      from 'fastify'
import fastify_cors from 'fastify-cors'

const app = fastify()

app.register(fastify_cors, { origin: '*', methods: [ 'POST', 'GET' ] })

// catch connection's upgrades
app.get('/*', {}, (request) => {
  console.log(new Date(Date.now()), 'got request', request.url)
  return { rnd: Math.random(), msg: `response from the server url ${ request.url }` }
})

app.listen(9999).catch(e => console.error)
console.log('listening', `http://localhost:9999/`)