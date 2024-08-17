import 'dotenv/config'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

async function startServer(): Promise<void> {
  const server = new ApolloServer({
    typeDefs: `type Query { bookIds: [Int!]!}`,
    resolvers: {},
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.SERVER_PORT || '') },
  })

  console.log(`🛡️ Server ready at: ${url}`)
}

startServer()
