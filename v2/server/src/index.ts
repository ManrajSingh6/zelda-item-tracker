import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

async function startServer(): Promise<void> {
  dotenv.config()

  const server = new ApolloServer({
    typeDefs: '',
    resolvers: {},
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.SERVER_PORT || '') },
  })

  console.log(`🛡️ Server ready at: ${url}`)
}

startServer()
